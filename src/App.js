import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import p from "./utils/paths";

import Home from "./components/Home";
import Impact from "./components/Impact";
import About from "./components/About";
import Layout from "./components/Layout";
import Letter from "./components/Letter";
import Plasma from "./components/Plasma";

class App extends React.Component {
  UNSAFE_componentWillMount() {
    document.title = "Fuel Hospital Workers!";
  }

  render() {
    return (
      <Router>
        <link rel="icon" href="./images/logo.png" />
        <Layout>
          <title>Fuel Hosipital Workers</title>
          <Route exact path={p.home} component={Home} />
          <Route path={p.about} component={About} />
          <Route path={p.impact} component={Impact} />
          <Route path={p.letter} component={Letter} />
          <Route path={p.plasma} component={Plasma} />
        </Layout>
      </Router>
    );
  }
}

export default App;
