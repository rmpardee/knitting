import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../assets/css/index.css';
import { createRow } from './PatternRow';

class Root extends Component {
  render() {
    const soleTitles = createRow();

    return (
      <div className="wrapper">
        {soleTitles}
        {this.props.children}
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.node,
};

export default Root;
