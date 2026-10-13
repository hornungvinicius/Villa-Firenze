// Contato: o único lugar para alterar o número (DDD + número, só dígitos).
// Todo contato do site vai para este WhatsApp.
const PHONE = '42991459898';

const MESSAGES = {
  visita: 'Olá! Gostaria de agendar uma visita para conhecer a Villa Firenze.',
  modalidades: 'Olá! Gostaria de entender melhor as modalidades Residencial Sênior e Centro Dia da Villa Firenze.',
};

const waLink = (text) => `https://wa.me/55${PHONE}?text=${encodeURIComponent(text)}`;
const phoneText = `(${PHONE.slice(0, 2)}) ${PHONE.slice(2, 7)}-${PHONE.slice(7)}`;
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('[data-wa]').forEach((a) => {
  a.href = waLink(MESSAGES[a.dataset.wa] || MESSAGES.visita);
  a.target = '_blank';
  a.rel = 'noopener';
});
document.querySelectorAll('[data-phone]').forEach((el) => { el.textContent = phoneText; });

// Rolagem suave e lenta (Lenis). No toque o navegador mantém a rolagem nativa.
const header = document.querySelector('[data-header]');
let lenis = null;
if (window.Lenis && !calm) {
  lenis = new Lenis({ duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 4), anchors: { offset: -(header?.offsetHeight || 0) } });
  const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
}

// Menu móvel
const toggle = document.querySelector('[data-menu-toggle]');
const menu = document.getElementById('menu');
const setMenu = (open) => {
  toggle.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-open', open);
  header.classList.toggle('menu-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  if (lenis) open ? lenis.stop() : lenis.start();
  syncHeader();
};
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
});
matchMedia('(min-width: 64rem)').addEventListener('change', () => setMenu(false));

// Header transparente sobre o hero; verde depois dele (ou com o menu aberto)
const hero = document.getElementById('inicio');
let heroVisible = true;
function syncHeader() { header.classList.toggle('is-solid', !heroVisible || header.classList.contains('menu-open')); }
new IntersectionObserver(([e]) => { heroVisible = e.intersectionRatio >= 0.6; syncHeader(); }, { threshold: [0.6] }).observe(hero);

// Carrossel da casa: duplica as fotos para o laço contínuo; velocidade constante em qualquer largura
const track = document.querySelector('.marquee__track');
if (track && !calm) {
  track.querySelectorAll('li').forEach((li) => {
    const clone = li.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.querySelector('img').alt = '';
    track.append(clone);
  });
  const setSpeed = () => track.style.setProperty('--marquee-time', `${track.scrollWidth / 2 / 40}s`); // 40 px/s
  setSpeed();
  addEventListener('resize', setSpeed);
  track.classList.add('is-running');
}

// Entrada dos blocos com desfoque, em sequência dentro de cada grupo
const groups = ['.nine__digit', '.nine__text', '.house__head', '.feature-cards li', '.days__grid > *', '.care__grid > *',
  '.rhythm__title', '.rhythm__cards li', '.family__grid > *', '.family__facts li', '.modes h2', '.mode-card',
  '.included__title', '.included li', '.faq h2', '.faq__list details', '.door__media', '.door__body > *'];
const items = [];
groups.forEach((sel) => document.querySelectorAll(sel).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.setProperty('--d', `${Math.min(i, 5) * 90}ms`);
  items.push(el);
}));
if ('IntersectionObserver' in window && !calm) {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('is-in'));
}

// Formulário de visita: monta a mensagem e abre o WhatsApp (nada é enviado a servidor).
const form = document.querySelector('[data-visit-form]');
const status = form.querySelector('[data-form-status]');
const nome = form.elements.nome;
const nomeErro = document.getElementById('f-nome-erro');

const validate = () => {
  const ok = nome.value.trim().length >= 2;
  nome.setAttribute('aria-invalid', String(!ok));
  nomeErro.hidden = ok;
  return ok;
};
nome.addEventListener('input', () => { if (nome.getAttribute('aria-invalid') === 'true') validate(); });

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validate()) { nome.focus(); return; }
  const f = form.elements;
  const lines = [
    'Olá! Vim pelo site e gostaria de agendar uma visita para conhecer a Villa Firenze.',
    '',
    `Nome: ${f.nome.value.trim()}`,
    `Para quem é o cuidado: ${f.para.value.trim() || 'não informado'}`,
    `Modalidade de interesse: ${f.modalidade.value}`,
    `Melhor período para a visita: ${f.periodo.value}`,
  ];
  const url = waLink(lines.join('\n'));
  const win = window.open(url, '_blank'); // 'noopener' faria open() retornar null sempre
  if (win) win.opener = null;
  status.innerHTML = win
    ? 'Abrimos o WhatsApp com a sua mensagem pronta. É só revisar e enviar.'
    : `Não foi possível abrir o WhatsApp automaticamente. <a href="${url}" target="_blank" rel="noopener">Toque aqui para abrir a conversa</a>.`;
});
