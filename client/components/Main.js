import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

import PhotoGrid from './PhotoGrid';
import Single from './Single';

const Main = ({ history, posts }) => (
  <ConnectedRouter history={history}>
    <main>
      <h1>Reduxtagram</h1>
      {console.log("AQUI...🥰", posts)}


      <Switch>
        <Route path="/" exact render={() => <PhotoGrid posts={posts} />} />
        <Route path="/view/:postId" component={Single} />
      </Switch>
    </main>
  </ConnectedRouter>
);

export default Main;
