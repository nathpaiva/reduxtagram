import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import PhotoGrid from './PhotoGrid';
import Single from './Single';

const Main = ({ history, posts }) => (
  <main>
    <h1><Link to="/">Reduxtagram</Link></h1>
    <Switch>
      <Route path="/" exact render={() => <PhotoGrid posts={posts} />} />
      <Route path="/view/:postId" component={Single} />
    </Switch>
  </main>
);

export default Main;
