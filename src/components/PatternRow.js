import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PatternRow extends PureComponent {
  render() {
    const { row } = this.props;

    return (
      <div className="rowContainer">
        <h2 className="title">{row.title}</h2>
        <div className="instructions">
          {row.instructions.map((step, index) => {
            if (step.stitches && step.stitches.womens) {
              return `${step.text}${step.stitches.womens.l}`;
            }
            return `${step.text}`;
          })}
        </div>
      </div>
    );
  }
}

PatternRow.propTypes = {
  row: PropTypes.object,
};

export default PatternRow;
