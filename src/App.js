import React from "react";
import { Provider } from "react-redux";

import Video from "./components/Video";
import Sidebar from "./components/Sidebar";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* O provider é necessário para que os filhos tenham acesso aos dados e ações desse redux */}
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
