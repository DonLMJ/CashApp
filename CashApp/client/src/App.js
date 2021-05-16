import React from "react";
import "./App.css";
//library to allow to navigate in diff pages in your webapp
//<Router> keeps to UI in sync with the URL
//<Link> renders a navigation link
//<Route> render a UI component depending on the URL
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

//exact property to render the component only if the defined path matches the URL path exactly
//<Switch> component to render only the first route that matches the location
//use nested routes if you want to display different messages depending on the URL
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
