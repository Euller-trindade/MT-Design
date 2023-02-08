import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TemplateDefault from "./templates/Default";
import TemplatePage from "./templates/Page";

import Home from "./pages/Home";
import CustomersList from "./pages/customers/List";
import CustomersRegister from "./pages/customers/Register";

const App = () => {
  return (
    <div>
      <Router>
        <TemplateDefault>
          <Switch>
            <Route path="/Customers/Add">
              <TemplatePage title="Cadastro de clientes" Component={CustomersRegister} />
            </Route>
            <Route path="/Customers">
              <TemplatePage title="Lista de Clientes" Component={CustomersList} />
            </Route>
            <Route path="/">
              <TemplatePage title="Página inicial" Component={Home} />
            </Route>
          </Switch>
        </TemplateDefault>
      </Router>
    </div>
  );
};

export default App;
