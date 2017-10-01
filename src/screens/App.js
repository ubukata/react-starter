import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;