import React from "react";
import "./assets/App.css";
import Navbar from "./components/navbar.js";
import { Switch, Route } from "react-router";

import Home from "./components/Home";
import Rules from "./components/Rules";
import GettingStarted from "./components/GettingStarted";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto my-6 lg:shadow-2xl md:shadow-md sm:shadow-sm rounded">
        <Switch>
          {routes.map((r) => (
            <Route key={r.path} exact={r.exact} path={r.path} component={r.component} />
          ))}
        </Switch>
      </main>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;

const routes = [
  { path: "/rules", component: Rules },
  { path: "/gettingStarted", component: GettingStarted },
  { path: "/about", component: About },
  { path: "/", component: Home, exact: true },
];
