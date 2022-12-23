/* eslint-disable react/prop-types */
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import CurveAreaRadioButtons from '../inputs/CurveAreaRadioButtons';
import DfInput from '../inputs/numInputs/DfNumInput';
import AreaInput from '../inputs/numInputs/AreaNumInput';

function TFromPForm(props) {
  const { hookValues, hookSetters } = props;

  const {
    area, df, curveRegion,
  } = hookValues;

  const {
    setArea, setDF, setCurveRegion,
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

export default TFromPForm;
