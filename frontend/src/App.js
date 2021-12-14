import React from 'react';
import ReactDOM from "react-dom";
import {
  Switch,
  Route
} from "react-router-dom";

import Produto from "./pages/Produto";
import Fornecedor from "./pages/Fornecedor";
import TipoProduto from "./pages/TipoProduto";

function App() {
  return(
      <Switch>
          <Route path="/" exact component={Produto} />
          <Route path="/fornecedor" component={Fornecedor} />
          <Route path="/tipo" component={TipoProduto} />
      </Switch>
  );
}

export default App;
