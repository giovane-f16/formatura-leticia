---
name: frontend-designer
description: Use esta skill quando precisar definir, revisar ou implementar UX/UI front-end em React, incluindo layout responsivo, sistema visual, micro-interacoes, componentes, acessibilidade, estados de interface e verificacao visual contra uma especificacao SDD.
---

# Frontend Designer

## Objetivo

Transformar uma especificacao de produto em uma interface React polida, responsiva, acessivel e facil de manter. Use esta skill em tarefas de layout, design system leve, criacao de paginas, revisao visual, melhoria de micro-interacoes e alinhamento entre `docs/sdd` e implementacao.

## Fluxo

1. Leia a fonte do produto: `prompt.md` e os documentos em `docs/sdd/`.
2. Identifique publico, tom emocional, paginas, fluxos e restricoes visuais.
3. Defina primeiro a estrutura da experiencia: navegacao, hierarquia, secoes, estados e conteudo editavel.
4. Aplique o sistema visual do projeto antes de criar novos estilos.
5. Implemente componentes reutilizaveis somente quando houver repeticao real.
6. Verifique responsividade, estados interativos, contraste, foco por teclado e ausencia de sobreposicao de texto.
7. Quando houver servidor ou build disponivel, valide visualmente em desktop e mobile antes de finalizar.

## Diretrizes De Interface

- Priorize a experiencia utilizavel na primeira tela; nao crie landing page de marketing quando o pedido for um app/site funcional.
- Use a paleta do projeto como base: `#050E05`, `#9F0000`, `#B48478`, `#0F0F17`.
- Evite uma tela dominada por uma unica familia de cor; use a paleta para contraste, ritmo e hierarquia.
- Use fotos ou placeholders reais para areas de memoria/formatura; evite ilustracoes genericas quando a pagina pede fotos.
- Mantenha cards com raio de ate `8px`, exceto se o design system existente indicar outro padrao.
- Use icones existentes da stack quando disponiveis, especialmente em botoes de acao.
- Nao coloque cards dentro de cards.
- Nao use textos visiveis para explicar como usar a interface, atalhos ou efeitos visuais.
- Defina dimensoes estaveis para galerias, botoes, tabuleiros, tiles e areas fixas para evitar saltos de layout.
- Garanta que textos nao estourem, nao se sobreponham e nao dependam de `vw` para tamanho de fonte.

## Projeto Atual

Para o site de formatura Giovane e Leticia:

- O tom deve ser afetivo, elegante e levemente divertido.
- A Home deve combinar declaracao, orgulho e gratidao com fotos de destaque.
- A listagem de fotos deve ser facil de editar por dados locais.
- O jogo de humor deve parecer intencional, responsivo e acessivel, mesmo com a opcao "Nao" escapando do cursor.
- Use Lorem Ipsum e placeholders enquanto nao houver fotos/textos finais.

## Checklist

- Layout cobre mobile, tablet e desktop.
- Estados de hover, foco, ativo, vazio e carregamento existem quando aplicaveis.
- Conteudo editavel fica centralizado em arrays, objetos ou arquivos de dados simples.
- Componentes principais tem nomes claros e fronteiras pequenas.
- Paleta, espacamentos, tipografia e imagens estao consistentes entre paginas.
- O fluxo do jogo funciona com mouse, toque e teclado sempre que possivel.
- A implementacao corresponde aos criterios de aceite em `docs/sdd/08-acceptance-criteria.md`.

## Referencias

Leia `references/react-ui-checklist.md` quando precisar de uma checklist mais detalhada para implementar ou revisar a interface React.
