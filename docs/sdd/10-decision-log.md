# Decision Log

## 2026-07-03 - Inicio Do SDD

- `prompt.md` foi definido como fonte inicial do produto.
- A documentacao SDD foi criada em `docs/sdd/`.
- Nome de trabalho definido como **GioLe: The Grad Game**.
- Stack inicial definida como React.
- Escopo inicial sem backend, login ou painel administrativo.

## Decisoes Pendentes

- Confirmar nome final do site.
- Escolher ferramenta de criacao React.
- Escolher estrategia de estilo.
- Definir placeholders ou assets temporarios.

## 2026-07-03 - Implementacao React Inicial

- Nome do projeto aplicado como **GioLe: The Grad Game**.
- Ferramenta de projeto escolhida: Vite com React.
- Estrategia de estilo escolhida: CSS global em `src/styles/global.css` com tokens de cor.
- Conteudo editavel centralizado em `src/data/siteContent.js`.
- Rotas iniciais implementadas para `/`, `/fotos` e `/jogo`.
- Assets temporarios definidos via URLs de placeholders e GIF configuravel.

## 2026-07-03 - Referencia Visual Figma

- Layout, fontes e microinteracoes passaram a seguir `https://brief-dimly-86743778.figma.site/`.
- Fontes aplicadas: Playfair Display, Jost e Dancing Script.
- Home refeita com hero central, particulas sutis e declaracoes em cards.
- Galeria refeita em masonry com overlay e lightbox.
- O jogo atual foi mantido, conforme solicitado.

## 2026-07-03 - Fotos Reais

- Fotos extraidas do ZIP em `src/data/fotos/`.
- Imagens publicas normalizadas em `public/photos/formatura/photo-01.jpeg` ate `photo-36.jpeg`.
- Galeria atualizada para usar as fotos locais em `src/data/siteContent.js`.
