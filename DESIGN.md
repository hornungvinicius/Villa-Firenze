# Villa Firenze: sistema de design (v2)

## Princípio
**Uma casa de verdade, com cuidado especializado e a intimidade de acolher até 9 residentes.**
Toda decisão responde a três ideias: casa (luz de janela, madeira, tecido, convivência), cuidado (presença humana, atenção, acompanhamento profissional) e pequena escala (o número 9).

## Diagnóstico da v1 (por que foi reprovada)
- Seis seções claras quase do mesmo tom, cada uma com a lógica "título à esquerda + grade". O verde aparecia em blocos isolados, sem continuidade.
- O 9 estava escondido numa linha pequena do manifesto.
- Muitos itens com o mesmo peso: três listas de estrutura, ritmo da equipe, três passos, dez perguntas, fatos repetidos.
- Nenhum conceito visual atravessava a página; parecia um template com paleta verde e bege.

## Narrativa: entrar na casa
1. **Acolhimento.** Hero com foto em luz de janela. A sombra quente da sala escurece até o verde-floresta e vira a seção seguinte.
2. **O 9.** Seção verde dominante. Um 9 gigante na Kurdis, preenchido com a foto real da sala da Villa: a casa dentro do número.
3. **A casa e o dia a dia.** Galeria de fotos reais que atravessa a fronteira entre o verde e o creme, seguida do cotidiano.
4. **Quem cuida e como funciona.** Responsáveis, ritmo da equipe numa "sala" verde recortada, modalidades e planos do flyer.
5. **Próximo passo.** Dúvidas essenciais e um CTA final em arco (a porta da casa), que continua no rodapé.

Ritmo de cor (não alternado mecanicamente): foto → verde → verde/creme → creme → areia com sala verde → creme → porta verde → verde profundo.

## Cor
| Token | Valor | Uso |
|---|---|---|
| `--forest` | `#1c3b24` | verde da logo (`#17391F`), superfície estrutural |
| `--forest-deep` | `#132a1a` | rodapé, sombras do hero |
| `--moss` | `#2b4a32` | painéis sobre o verde |
| `--ivory` | `#f6f0e4` | superfície principal e texto sobre verde |
| `--sand` | `#ece2cf` | superfície secundária |
| `--ink` | `#2f2418` | texto (marrom da logo, escurecido) |
| `--ink-soft` | `#5b4a3b` | texto de apoio (7,5:1 sobre marfim) |
| `--sage-light` | `#c5d0ae` | detalhes e rótulos sobre verde |
| `--terra` | `#a4532b` | único acento, uso pontual |
O dourado `#94753F` fica só na logo e no ramo.

## Tipografia: Kurdis (única família)
Arquivo: `assets/fonts/kurdis-variable.woff2` (Kurdis Variable 2.0, Harbor Bickmore / That That Creative), subconjunto latino com acentos do português (38 KB).
Eixos não padronizados (`wdth` 0 a 100, `wght` 0 a 100); por isso o CSS controla os estilos com `font-variation-settings` e desliga a síntese de negrito.
| Papel | Largura / peso | Instância equivalente |
|---|---|---|
| Número 9 | wdth 70, wght 100 | Wide Black |
| Títulos | wdth 80, wght 4 | Wide |
| Texto corrido | wdth 60, wght 8 | Regular |
| Rótulos e botões | wdth 40, wght 30 | SemiCondensed SemiBold |
A Kurdis não tem itálico: a ênfase vem da largura (um trecho em Condensed) ou da cor, nunca de itálico sintético.

## Forma e composição
- Raios: pílula para interação, 24px para imagens e painéis, arco (topo em semicírculo) para a porta do CTA e fotos de destaque.
- Linhas finas de 1px, ramo da logo como único ornamento.
- Cada seção tem uma família de layout própria: foto plena, número gigante, faixa horizontal, colagem, sala recortada, acordeão, porta em arco.
- Mobile primeiro: hero com foto vertical própria; o 9 continua ocupando a largura da tela.

## Movimento
Entrada do hero (a foto revela de baixo para cima com máscara, o título sobe por linha, os botões por último). Revelações por rolagem só com `animation-timeline: view()`, nunca escondendo conteúdo. Tudo desligado com `prefers-reduced-motion`.

## Imagens
Fotos reais para os ambientes e a pintura. Imagens geradas (Magnific, Nano Banana 2, 2K) só para cenas de cuidado, sempre com a legenda "Imagem ilustrativa".
