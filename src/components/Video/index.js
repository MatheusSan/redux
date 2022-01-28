import React from "react";
import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => {
  return (
    <div>
      <strong>Módulo {activeModule.title}</strong>
      <span>Aula {activeLesson.title}</span>
    </div>
  );
};

export default connect((state) => ({
  // Connect serve para encapsular o componente principal no redux
  activeLesson: state.course.activeLesson, //State são os redux. course é o redux de course
  activeModule: state.course.activeModule, //As variáveis criadas aqui podem ser importadas no componente
}))(Video);
