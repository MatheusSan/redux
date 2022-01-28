const INITIAL_STATE = {
  // Controla a inicialização do state (quando o arquivo é carregado)
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando em Redux",
      lessons: [
        { id: 1, title: "Primiera Aula" },
        { id: 2, title: "Segunda Aula" },
      ],
    },
    {
      id: 2,
      title: "Criando Mais de Um Redux",
      lessons: [
        { id: 1, title: "Terceira Aula" },
        { id: 2, title: "Quarta Aula" },
      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  // exporta a função que contém a criação e manutençao dos dados desse redux
  //Sempre que um dispatch é chamado essa função executa, na action é possivel ver que função esse dispatch contém
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
}
