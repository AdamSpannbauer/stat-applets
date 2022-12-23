/* eslint-disable react/prop-types */
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AreaInput from '../inputs/numInputs/AreaNumInput';
import MeanInput from '../inputs/numInputs/MeanNumInput';
import SDInput from '../inputs/numInputs/SDNumInput';
import CurveAreaRadioButtons from '../inputs/CurveAreaRadioButtons';

function ZFromPForm(props) {
  const { hookValues, hookSetters } = props;

  const {
    mean, sd, area, curveRegion,
  } = hookValues;

  const {
    setMean, setSD, setArea, setCurveRegion,
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
          <AreaInput hookValue={area} hookSetter={setArea} />
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

export default ZFromPForm;
