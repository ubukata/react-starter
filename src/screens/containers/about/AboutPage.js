import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {withRouter} from "react-router-dom";

class AboutPage extends Component {
  constructor(props, context) {
     super(props, context);
  }

  back = () => {
    // do more stuff before redireting

    //redirecting
    this.props.history.push("/");
  } 

  render() {
    return (
      <div>
          <h1>About</h1>
          <a href="#" onTouchTap={() => this.back()} className="btn btn-primary btn-lg">Back</a>
      </div>
    );
  }
}

AboutPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(AboutPage);