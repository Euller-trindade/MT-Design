import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TemplateDefault from "./templates/Default";
import TemplatePage from "./templates/Page";

import Home from "./pages/Home";
import Customers from "./pages/Customers";

const App = () => {
  return (
    <div>
      <Router>
        <TemplateDefault>
          <Switch>
            <Route path="/Customers">
              <TemplatePage title="Clientes" Component={Customers} />
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
