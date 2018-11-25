import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import PhotoGrid from './PhotoGrid';
import Single from './Single';

class Main extends PureComponent {
  render() {
    return (
      <main>
        <h1><Link to="/">Reduxtagram</Link></h1>
        <Switch>
          <Route path="/" exact render={() => <PhotoGrid {...this.props} />} />
          <Route path="/view/:postId" component={Single} />
        </Switch>
      </main>
    );
  }
}

export default Main;
