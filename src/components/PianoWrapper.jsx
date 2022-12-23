
import { useState } from 'react';
import { Piano } from './Piano.jsx';
import './styles.css';

export const PianoWrapper = (props) => {
  const { selectedSize } = props;

  const wrapperClassName =  `piano-${selectedSize}`;

  return (
    <div className={`piano-wrapper ${wrapperClassName}`} style={{border: '1px solid white'}}>
      <Piano/>
    </div>
  );
};

export default PianoWrapper;