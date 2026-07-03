# Requirements

## Requisitos Funcionais

### RF01 - Home

A Home deve apresentar o nome do site, uma mensagem principal, fotos de destaque em placeholder e chamadas para a galeria e para o jogo.

### RF02 - Listagem De Fotos

A pagina de fotos deve listar imagens em uma grade responsiva. Cada item deve aceitar pelo menos imagem, titulo, texto curto e texto alternativo.

### RF03 - Jogo De Humor

A pagina de jogo deve iniciar com a pergunta "Voce me ama?" e duas respostas: "Sim" e "Nao".

### RF04 - Botao "Nao" Escapando

Nas perguntas do jogo, a opcao "Nao" deve mudar de posicao quando o cursor passar por cima. Em dispositivos sem hover, a interface deve continuar jogavel.

### RF05 - Segunda Pergunta

Ao clicar em "Sim" na primeira pergunta, o jogo deve perguntar "Voce vai me dar um carro?" com opcoes "Sim" e "Nao".

### RF06 - Final Do Jogo

Ao clicar em "Sim" na segunda pergunta, deve aparecer um GIF animado ou placeholder equivalente.

### RF07 - Conteudo Editavel

Textos, fotos e itens de galeria devem ficar em uma estrutura facil de editar, preferencialmente arquivo de dados local.

## Requisitos Nao Funcionais

### RNF01 - Stack

O projeto deve ser implementado em React.

### RNF02 - Responsividade

Todas as paginas devem funcionar em mobile, tablet e desktop.

### RNF03 - Design

A interface deve usar a paleta `#050E05`, `#9F0000`, `#B48478` e `#0F0F17`.

### RNF04 - Movimento

Efeitos visuais e micro-interacoes devem ser suaves e nao devem prejudicar leitura ou acessibilidade.

### RNF05 - Acessibilidade

Links e botoes devem ser navegaveis por teclado, ter foco visivel e manter contraste adequado.

### RNF06 - Performance

Imagens devem usar dimensoes previsiveis e carregamento eficiente quando a implementacao permitir.
