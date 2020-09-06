import React from "react";
import "./assets/App.css";
import Navbar from "./components/navbar.js";
import "./assets/App.css";
import "./assets/timeline.css";
import { Switch, Route } from "react-router";

import Home from "./components/Home";
import Rules from "./components/Rules";
import GettingStarted from "./components/GettingStarted";
import FAQ from "./components/FAQ";
import Apply from "./components/Apply";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto my-6 lg:shadow-2xl md:shadow-md sm:shadow-sm rounded">
        <Switch>
          {routes.map((r) => (
            <Route
              key={r.path}
              exact={r.exact}
              path={r.path}
              component={r.component}
            />
          ))}
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

const routes = [
  { path: "/rules", component: Rules },
  { path: "/gettingStarted", component: GettingStarted },
  { path: "/faq", component: FAQ },
  { path: "/apply", component: Apply },
  { path: "/", component: Home, exact: true },
  { path: "/team", component: Team },
  { path: "/projects", component: Projects},
];
