import { createStore } from "redux";

import rootReducer from "./reducers";

const store = createStore(rootReducer); //cria o store de dados com a coleção de redux que tá na reducers/index

export default store;
