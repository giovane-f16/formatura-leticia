const graduationPhotoPaths = Object.keys(
  import.meta.glob('/public/photos/formatura/photo-*.jpeg', { eager: true }),
).sort((firstPath, secondPath) =>
  firstPath.localeCompare(secondPath, undefined, { numeric: true }),
);

const graduationPhotos = graduationPhotoPaths.map((path, index) => {
  const fileName = path.split('/').at(-1);

  return {
    src: `/photos/formatura/${fileName}`,
    thumb: `/photos/formatura/${fileName}`,
    alt: `Foto ${index + 1} da formatura da Letícia`,
    title: `Momento ${index + 1}`,
    caption: 'Um registro especial da formatura da Letícia.',
  };
});

export const siteContent = {
  siteName: 'Letícia Rocumback França',
  nav: [
    { label: 'Início', href: '/' },
    { label: 'Fotos', href: '/fotos' },
    { label: 'Jogo', href: '/jogo' },
  ],
  graduate: {
    name: 'Letícia Rocumback França',
    course: 'Administração',
    university: 'Universidade Cruzeiro do Sul',
    year: '2026',
    heroQuote: `Ela estudou, sofreu, reclamou bastante...
e mesmo assim chegou lá.`,
  },
  declarations: [
    {
      icon: '♥',
      title: 'Meu orgulho, minha vida',
      text: 'Amor, o começo foi bem difícil mas você nunca desistiu, eu te amo e tenho muito orgulho de você.',
      author: 'Com amor e orgulho!',
    },
    {
      icon: '✦',
      title: 'Sabia que você ia longe',
      text: 'Desde quando te conheci, sabia que você ia longe e que conquistaria tudo que quisesse, meu amor.',
      author: 'Parabéns!',
    },
    {
      icon: '✧',
      title: 'Esforço e resiliência',
      text: 'Com tanto estresse, provas e trabalhos, você mostrou que é capaz de superar qualquer desafio.',
      author: 'Parabéns por essa conquista incrível!',
    },
    {
      icon: '★',
      title: 'Agora é só festa',
      text: 'Após passar por tanto sufoco, agora é hora de celebrar muito, porque essa conquista é sua por inteira.',
      author: 'Só festinha no AP',
    },
  ],
  game: {
    loveQuestion: 'Você me ama?',
    carQuestion: 'Ama mesmoooooo???',
    yes: 'Sim',
    no: 'Não',
    finalTitle: 'Tbm te amo mozi!',
    finalMessage:
      'feito com mt carinho',
    finalGif:
      'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDJnMmI2eDg3aGRrem9yMzdnd244bmdtbmptcnhlMHd1YXdsdms5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qRdGR2H9EtiXUJXorm/giphy.gif',
  },
  photos: graduationPhotos,
};
