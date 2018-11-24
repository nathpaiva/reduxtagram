import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PhotoGrid from './PhotoGrid';
import Single from './Single';

const Main = () => (
  <main>
    <h1>Reduxtagram</h1>
    <Router>
      <Switch>
        <Route path="/" exact component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Switch>
    </Router>
  </main>
);

export default Main;
