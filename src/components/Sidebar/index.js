import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"; //helper Redux para relacionar as actions

import * as CourseActions from "../../store/actions/course"; //Importação das actions

const Sidebar = ({ modules, toggleLesson }) => {
  return (
    <aside>
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => toggleLesson(module, lesson)}>
                  {" "}
                  {/* toggleLesson é uma função das actions, o binde se encarrega de referenciar */}
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

const mapStateToProps = (state) => ({
  //Oferece todos os dados dos redux
  modules: state.course.modules,
});

const mapDispatchToProps = (
  dispatch // Cria um dispatch pra que todas as ações interfiram no redux
) => bindActionCreators(CourseActions, dispatch); // Relaciona os dispatch do componente com as funções da action importada

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
// O connect serve para encapsular o compponente principal "Sidebar" no redux
