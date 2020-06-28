import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Start from "./views/start";
import Write from "./views/write";
import Article from "./views/article";

import { Background, Container } from "./elements/app";

const App = () => {
  return (
    <Background>
      <Container>
        <Switch>
          <Route path="/write">
            <Write />
          </Route>
          <Route path="/post/:id">
            <Article />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        </Switch>
        <Navigation />
      </Container>
    </Background>
  );
};

export default App;
