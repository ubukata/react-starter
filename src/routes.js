import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  HomePage,
  AboutPage
} from './screens/containers/index';
import App from './screens/App';

class Routes extends Component {
  render() {
    return (
      <Router>
        <App>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </div>
        </App>
      </Router>
    );
  }
}

export default Routes;