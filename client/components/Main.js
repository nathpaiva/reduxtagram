import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

import PhotoGrid from './PhotoGrid';
import Single from './Single';

const Main = ({ history }) => (
  <main>
    <h1>Reduxtagram</h1>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Switch>
    </ConnectedRouter>
  </main>
);

export default Main;
