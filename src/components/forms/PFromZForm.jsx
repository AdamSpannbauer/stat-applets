/* eslint-disable react/prop-types */
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import MeanInput from '../inputs/numInputs/MeanNumInput';
import SDInput from '../inputs/numInputs/SDNumInput';
import XInput from '../inputs/numInputs/XNumInput';
import CurveAreaRadioButtons from '../inputs/CurveAreaRadioButtons';

function PFromZForm(props) {
  const { hookValues, hookSetters } = props;

  const {
    mean, sd, x, curveRegion,
  } = hookValues;

  const {
    setMean, setSD, setX, setCurveRegion,
  } = hookSetters;

  return (
    <Box
      component="form"
      sx={{
        width: 'auto',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >

        <Grid item align="center" xs={12}>
          <XInput label="z" hookValue={x} hookSetter={setX} />
          <MeanInput hookValue={mean} hookSetter={setMean} />
          <SDInput hookValue={sd} hookSetter={setSD} />
        </Grid>

        <Grid item align="center" xs={12}>
          <CurveAreaRadioButtons
            hookValue={curveRegion}
            hookSetter={setCurveRegion}
            defaultValue={curveRegion}
          />
        </Grid>

      </Grid>
    </Box>
  );
}

export default PFromZForm;
