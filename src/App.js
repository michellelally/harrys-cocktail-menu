import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Footer, Login, Picker, Cocktails, Create, Update, List, ShowCocktail } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
        <Navigation />
        </div>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/picker" exact component={() => <Picker />} /> 
          <Route path="/cocktails" exact component={() => <Cocktails />} /> 
          <Route path="/create" exact component={() => <Create />} /> 
          <Route path="/update/:id" exact component={() => <Update />} /> 
          <Route path="/list" exact component={() => <List />} /> 
          <Route path="/show-cocktail/:id" exact component={() => <ShowCocktail />} /> 
        </Switch>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;