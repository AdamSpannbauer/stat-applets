/* eslint-disable react/prop-types */
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import XInput from '../inputs/numInputs/XNumInput';
import CurveAreaRadioButtons from '../inputs/CurveAreaRadioButtons';
import DfInput from '../inputs/numInputs/DfNumInput';

function PFromTForm(props) {
  const { hookValues, hookSetters } = props;

  const {
    t, df, curveRegion,
  } = hookValues;

  const {
    setT, setDF, setCurveRegion,
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
          <XInput label="t" hookValue={t} hookSetter={setT} step={0.01} />
          <DfInput hookValue={df} hookSetter={setDF} />
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

export default PFromTForm;
