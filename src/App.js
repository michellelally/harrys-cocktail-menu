import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Footer, Login, Picker } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/picker" exact component={() => <Picker />} /> 
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;