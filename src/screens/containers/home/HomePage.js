import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  constructor(props, context) {
     super(props, context);
  }
  
  render() {
    return (
      <div className="jumbotron">
        <h1>React Node Babel Webpack</h1>
        <p>Starter project of React Node Babel Webpack</p>
        <Link to="about" className="btn btn-primary btn-lg">About</Link>
      </div>
    );
  }
}

export default HomePage;

//<Link to="about" className="btn btn-primary btn-lg">About</Link>