/* eslint-disable react/prop-types */
import * as React from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function CurveAreaRadioButtons(props) {
  const { hookSetter, defaultValue } = props;

  const onChange = (event) => {
    hookSetter(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="curve-region-radio-buttons-group">Region</FormLabel>
      <RadioGroup
        row
        onChange={onChange}
        aria-labelledby="curve-region-radio-buttons-group-label"
        defaultValue={defaultValue || 'outside'}
        name="curve-region-radio-buttons-group"
      >
        <FormControlLabel value="below" control={<Radio />} label="Below" />
        <FormControlLabel value="above" control={<Radio />} label="Above" />
        <FormControlLabel value="between" control={<Radio />} label="Between" />
        <FormControlLabel value="outside" control={<Radio />} label="Outside" />
      </RadioGroup>
    </FormControl>
  );
}

export default CurveAreaRadioButtons;
