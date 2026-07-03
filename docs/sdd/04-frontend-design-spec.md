# Frontend Design Spec

## Direcao Visual

O site deve misturar celebracao de formatura, declaracao afetiva e humor. A composicao deve ser elegante e emocional, com detalhes de jogo apenas onde fizer sentido.

## Paleta

- `#050E05` - base escura esverdeada, fundo profundo.
- `#0F0F17` - fundo secundario escuro, paineis e contraste.
- `#9F0000` - acento dramatico, chamadas e detalhes.
- `#B48478` - tom quente para apoio, bordas, textos secundarios e destaques suaves.

## Tipografia

Usar uma combinacao legivel com hierarquia clara:

- Titulos com peso forte e presenca emocional.
- Corpo com alta legibilidade.
- Textos longos com largura limitada.

## Layout

### Home

- Hero com nome do site, mensagem principal e foto/placeholder de destaque.
- Secao de declaracao com texto curto.
- Faixa de fotos em destaque.
- Chamadas para Galeria e Jogo.

### Fotos

- Cabecalho curto com contexto afetivo.
- Grade responsiva de fotos.
- Cards simples com imagem, titulo e legenda.

### Jogo

- Tela centralizada, divertida e limpa.
- Pergunta em destaque.
- Botoes com area de toque confortavel.
- Area delimitada para o botao "Nao" se mover sem quebrar o layout.
- Estado final com GIF e mensagem curta.

## Micro-Interacoes

- Hover suave em botoes e cards.
- Transicoes curtas em entrada de secoes.
- Botao "Nao" com reposicionamento rapido e visualmente intencional.
- Respeitar `prefers-reduced-motion`.

## Componentes Esperados

- `Layout`
- `Navigation`
- `Hero`
- `PhotoGrid`
- `PhotoCard`
- `CallToAction`
- `HumorGame`
- `GameButton`

## Regras Visuais

- Nao usar cards aninhados.
- Evitar blocos decorativos sem funcao.
- Evitar hero puramente gradiente; usar foto ou placeholder visual claro.
- Manter textos dentro dos containers em todos os breakpoints.
