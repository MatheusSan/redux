//Todas as actions do reducer são guardadas em um arquivo a parte
//Importadas quando necessárias
//Com um Bind é possivel simplificar o código no uso
//Exemplo de uso no arquivo src/components/Sidebar/index.js

export function toggleLesson(module, lesson) {
  return {
    type: "TOGGLE_LESSON",
    module,
    lesson,
  };
}
