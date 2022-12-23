/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';

function MeanInput(props) {
  const { hookValue, hookSetter, step } = props;

  return (
    <TextField
      type="number"
      label="Mean"
      value={hookValue}
      inputProps={{
        step: step || 1.0,
      }}
      onChange={(event) => hookSetter(event.target.value)}
    />
  );
}

export default MeanInput;
