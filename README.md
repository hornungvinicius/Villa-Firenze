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
- Sem cookies, sem rastreamento, sem serviços de terceiros carregados na página.

## Imagens
Fotos reais (pasta `Fotos/`): sala de estar, quartos, espaço ecumênico, sala de TV, convivência, varanda, pintura.
Geradas com Magnific, Nano Banana 2, 2K (projeto "Villa Firenze - Landing Page"): hero (álbum de família, versão horizontal e vertical), mãos no jogo de memória, jogo de cartas, caminhada no pomar, visita da família. A transparência sobre elas fica numa linha do rodapé.

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
5. **Autorização de imagem** das fotos reais com pessoas (pintura; a foto de mãos com cuidadora não foi usada).
6. **Retratos reais** de Leticia e Paola e fotos reais do pomar, área de refeição e banheiros acessíveis (hoje não há).
7. **Logo vetorial (SVG/AI)**: só havia JPEG; a vetorização do Magnific estava desabilitada.
8. **Domínio**: publicado em https://villa-fi.vercel.app (canonical, `og:image` e `sitemap.xml` apontam para ele). Trocar se houver domínio próprio.
9. **Licença da Kurdis** para uso na web: o zip não trazia arquivo de licença.
10. **Preços dos planos** (flyer): não publicados; decidir se entram no site.
