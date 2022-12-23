/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';

function AreaInput(props) {
  const { hookValue, hookSetter, step } = props;

  const onChange = (event) => {
    let v = event.target.value;
    if (v < 0) v = 0;
    if (v > 1) v = 1;
    hookSetter(v);
  };

  return (
    <TextField
      type="number"
      label="Area"
      value={hookValue}
      inputProps={{
        min: 0,
        max: 1,
        step: step || 0.01,
      }}
      onChange={onChange}
    />
  );
}

export default AreaInput;
