import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { felted_slippers } from '../assets/slippers';

import '../assets/css/index.css';
import PatternRow from './PatternRow';

class Root extends Component {
  render() {
    const { sole } = felted_slippers;

    return (
      <div className="wrapper">
        <Select />
        {sole.map(row => <PatternRow row={row} key={row.title} />)}
        {this.props.children}
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.node,
};

export default Root;
