/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';

function XInput(props) {
  const {
    hookValue, hookSetter, step, label,
  } = props;

  return (
    <TextField
      type="number"
      label={label || 'X'}
      value={hookValue}
      inputProps={{
        step: step || 1.0,
      }}
      onChange={(event) => hookSetter(event.target.value)}
    />
  );
}

export default XInput;
