import { combineReducers } from "redux";

import course from "./course";
// import user from './user'

export default combineReducers({
  course,
  // user,
});

// Criar coleção de redux com combineReducers
// assim é possível ter mais de uma estrutura de dados
// todos compartilhando o mesmo redux
// exemplo de uso no Sidebar/index.js
