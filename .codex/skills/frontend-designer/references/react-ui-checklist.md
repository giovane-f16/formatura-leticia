# React UI Checklist

Use esta referencia para revisar implementacoes React orientadas por SDD.

## Estrutura

- Separar dados editaveis de componentes visuais.
- Criar componentes pequenos para secoes repetidas, galerias, botoes e estados.
- Manter rotas e paginas previsiveis: Home, Fotos, Jogo.
- Evitar abstracoes antes de haver repeticao clara.

## Responsividade

- Validar pelo menos larguras proximas de 360px, 768px e 1280px.
- Usar grid/flex com `minmax`, `clamp`, `max-width` e `aspect-ratio` quando fizer sentido.
- Garantir que galerias mantenham proporcao e nao causem layout shift.
- Manter botoes tocaveis com area minima confortavel em mobile.

## Acessibilidade

- Preservar ordem logica de headings.
- Usar texto alternativo para fotos.
- Garantir foco visivel em links e botoes.
- Evitar depender apenas de hover para concluir uma acao.
- Respeitar `prefers-reduced-motion` para animacoes decorativas.

## Movimento

- Micro-interacoes devem reforcar intencao: entrada suave, hover discreto, feedback em clique.
- Animacoes devem ser curtas, reversiveis e sem bloquear conteudo.
- Evitar movimento continuo em textos importantes.

## Verificacao

- Rodar lint/test/build quando existirem scripts.
- Quando houver dev server, conferir visualmente desktop e mobile.
- Conferir que nao ha texto cortado, sobreposto ou ilegivel.
- Comparar implementacao com `docs/sdd/08-acceptance-criteria.md`.
