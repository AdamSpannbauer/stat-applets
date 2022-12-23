/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';

function SDInput(props) {
  const { hookValue, hookSetter, step } = props;

  const onChange = (event) => {
    let v = event.target.value;
    if (v < 0) v = 0;
    hookSetter(v);
  };

  return (
    <TextField
      type="number"
      label="Standard Deviation"
      value={hookValue}
      inputProps={{
        min: 0,
        step: step || 0.5,
      }}
      onChange={onChange}
    />
  );
}

export default SDInput;
