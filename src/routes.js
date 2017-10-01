import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './screens/App';
import {
  HomePage,
  AboutPage,
  SignUpPage
} from './screens/containers/index';

class Routes extends Component {
  render() {
    return (
      <Router>
        <App>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/account/signup" component={SignUpPage} />
          </div>
        </App>
      </Router>
    );
  }
}

export default Routes;