# Technical Spec

## Stack

- React.
- CSS modular, CSS comum ou framework escolhido na etapa de setup.
- Roteamento simples para Home, Fotos e Jogo.

## Estrutura Recomendada

```text
src/
  app/
  components/
  data/
  pages/
  styles/
```

## Dados Editaveis

Criar um arquivo local para centralizar conteudo:

```text
src/data/siteContent.js
```

Conteudos esperados:

- Nome do site.
- Mensagens da Home.
- Fotos da galeria.
- Fotos de destaque.
- Textos do jogo.
- URL do GIF final.

## Roteamento

Rotas iniciais:

- `/` - Home.
- `/fotos` - Listagem de fotos.
- `/jogo` - Jogo de humor.

## Estado Do Jogo

O jogo pode ser controlado por estado local:

- `step`: `love`, `car`, `success`.
- Posicao do botao "Nao" por pergunta.
- Funcao para gerar nova posicao dentro de uma area delimitada.

## Acessibilidade Tecnica

- Usar `button` real para acoes.
- Manter foco visivel.
- Evitar que o botao "Nao" fique inacessivel fora da area do jogo.
- Para toque, permitir que "Nao" tambem mude ao tocar ou focar.

## Validacao Tecnica

Quando os scripts existirem:

- Rodar lint.
- Rodar testes, se houver.
- Rodar build.
- Validar visualmente em mobile e desktop.
