/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';

function DfInput(props) {
  const { hookValue, hookSetter, step } = props;

  const onChange = (event) => {
    let v = event.target.value;
    if (v < 1) v = 1;
    hookSetter(v);
  };

  return (
    <TextField
      type="number"
      label="Degrees of Freedom"
      value={hookValue}
      inputProps={{
        step: step || 1.0,
      }}
      onChange={onChange}
    />
  );
}

export default DfInput;
