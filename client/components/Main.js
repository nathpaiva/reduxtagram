import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import * as Sentry from '@sentry/browser';

import PhotoGrid from './PhotoGrid';
import Single from './Single';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });

    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.error) {
      return (
        <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
      );
    }

    return (
      <main>
        <h1><Link to="/">Reduxtagram</Link></h1>
        <Switch>
          <Route path="/" exact render={() => <PhotoGrid {...this.props} />} />
          <Route path="/view/:postId" render={(props) => {
            const propsSingle = Object.assign({}, this.props, props);
            return <Single {...propsSingle} />
          }} />
        </Switch>
      </main>
    );
  }
}

export default Main;
