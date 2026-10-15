# Villa Firenze Residencial Sênior: landing page

Site estático (HTML + CSS + JS, sem framework nem build). Para publicar, basta subir esta pasta para qualquer hospedagem estática.
Para testar localmente: `python -m http.server 5173` dentro desta pasta.

## Arquivos
- `index.html`: landing page (11 seções). `privacidade.html`: Política de Privacidade.
- `styles.css`: tokens (cores da logo, tipografia, raios) e layout mobile-first.
- `main.js`: **telefone em uma única constante (`PHONE`)**, links de WhatsApp/telefone, menu mobile, formulário que monta a mensagem e abre o WhatsApp.
- `assets/brand/`: logo recortada da arte original (PNG em alta + WebP para web, versão marfim, ramo da logo usado como divisor). `assets/fonts/`: Kurdis Variable hospedada localmente (subconjunto latino, 38 KB). `assets/js/lenis.min.js`: rolagem suave (MIT).
- `images/`: fotos em WebP (hero, care, activities, environments, family). `og-image.jpg`, favicons, `robots.txt`.

## Decisões principais
- Tipografia: **Kurdis** (única família; largura e peso controlados pelos eixos variáveis). Detalhes em `DESIGN.md`.
- Cores medidas na logo: verde `#1C3B24` (logo `#17391F`), marrom, dourado `#94753F` (só na logo). Superfícies marfim/linho, sálvia, terracota como único acento.
- Recursos da Coraiz adaptados: campos de cor chapados, fólio editorial, painéis com contorno fino e numeração em círculo, fotos em arco (porta de casa), luz dourada.
- Google Tag Manager (`GTM-TQJWW5NM`) no `index.html` e em `privacidade.html`. Botão fixo de WhatsApp no canto inferior direito, no mesmo número da constante `PHONE`.

## Textos
Em 14/10 entraram os textos enviados pela cliente (documento `site.docx`): hero, seção do 9, dia a dia, quem cuida, cards do acompanhamento, card dos quartos e seção da família. O site passou a usar "o Villa Firenze" (masculino), como nos textos dela.

## Imagens
Todas as fotos do site são reais, da Villa Firenze (pasta `Fotos/` do Drive e foto das responsáveis enviada em 13/10). Atendendo ao pedido da cliente, as cenas geradas por IA foram retiradas.
Duas fotos passaram por upscale no Magnific (Nano Banana 2.1, 2K), só para ganhar resolução, com instrução de manter tudo idêntico: a placa da fachada (hero) e o close das responsáveis (Quem cuida). Vale a aprovação das responsáveis para o close.

## Testes executados (12/10/2026)
- html-validate: sem erros (index e privacidade).
- Lighthouse mobile: Desempenho 93, Acessibilidade 100, Boas práticas 100, SEO 100, CLS 0. Desktop: 100 em todas.
- Sem rolagem horizontal em 320, 360, 390, 430, 768, 1024, 1280 e 1440 px. Navegação em uma linha a partir de 1024.
- Formulário: erro e foco no campo vazio; mensagem correta para `wa.me/5542991459898`. Menu: abre, trava rolagem, fecha com Esc e devolve o foco.
- Contraste WCAG AA conferido em todos os pares de cor usados em texto.

## Pendências (confirmar com a cliente antes de publicar)
1. **Contato (resolvido 13/10)**: WhatsApp (42) 99145-9898, constante `PHONE` em `main.js`. Todo botão e link de contato do site abre esse WhatsApp.
2. **Instagram (resolvido 13/10)**: `@senior.firenze`, confirmado pela cliente.
3. **Conflitos do flyer com o briefing** (o site segue o briefing): flyer diz "fisioterapia todos os dias" (briefing: 3x por semana) e cita psicóloga, pedagoga e música, que não constam no briefing.
4. **CEP** do endereço: fontes divergem (84070-020 ou 84070-660); não publicado.
5. **Autorização de imagem** das fotos reais com pessoas: pintura, mãos da cuidadora com residente (dia a dia) e o close das responsáveis (upscale com IA, confirmar que aprovam).
6. **Mais fotos reais** ajudariam: pomar, área de refeição, banheiros acessíveis e atividades em grupo.
7. **Logo vetorial (SVG/AI)**: só havia JPEG; a vetorização do Magnific estava desabilitada.
8. **Domínio**: publicado em https://villa-fi.vercel.app (canonical, `og:image` e `sitemap.xml` apontam para ele). Trocar se houver domínio próprio.
9. **Licença da Kurdis** para uso na web: o zip não trazia arquivo de licença.
10. **Preços dos planos** (flyer): não publicados; decidir se entram no site.
