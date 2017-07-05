import React from 'react';

import { felted_slippers } from '../assets/slippers';

export const createRow = () => {
  const { sole } = felted_slippers;
  return sole.map(row => (
    <div key={row.title} className="rowContainer">
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
  ));
};
