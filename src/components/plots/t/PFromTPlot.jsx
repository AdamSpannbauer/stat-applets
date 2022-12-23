/* eslint-disable react/prop-types */
import React from 'react';
import Plot from 'react-plotly.js';

import { MAX_T } from '../../../statistics/tTable/constants';
import genTCurve from '../../../statistics/tTable/genTCurve';
import { genCurvePlotData, genShadedRegionPlotData } from '../plotlyUtils';

const defineShadedRegionEndPoints = (t, selectedRegion) => {
  const shadedRegionEndPoints = {
    r1x1: null, r1x2: null, r2x1: null, r2x2: null, z: null,
  };

  if (Math.abs(t) >= MAX_T) {
    shadedRegionEndPoints.z = Infinity;
    shadedRegionEndPoints.r1x1 = -MAX_T;
    shadedRegionEndPoints.r1x2 = MAX_T;
  } else if (selectedRegion === 'below') {
    shadedRegionEndPoints.t = t;

    shadedRegionEndPoints.r1x1 = -MAX_T;
    shadedRegionEndPoints.r1x2 = t;
  } else if (selectedRegion === 'above') {
    shadedRegionEndPoints.t = t;

    shadedRegionEndPoints.r1x1 = t;
    shadedRegionEndPoints.r1x2 = MAX_T;
  } else if (selectedRegion === 'between') {
    shadedRegionEndPoints.t = t;

    shadedRegionEndPoints.r1x1 = -Math.abs(t);
    shadedRegionEndPoints.r1x2 = Math.abs(t);
  } else if (selectedRegion === 'outside') {
    shadedRegionEndPoints.t = t;

    shadedRegionEndPoints.r1x1 = -MAX_T;
    shadedRegionEndPoints.r1x2 = -Math.abs(t);

    shadedRegionEndPoints.r2x1 = Math.abs(t);
    shadedRegionEndPoints.r2x2 = MAX_T;
  }

  return shadedRegionEndPoints;
};

function PFromTPlot(props) {
  const { hookValues } = props;
  const {
    df,
    area,
    curveRegion,
  } = hookValues;

  const { x, y } = genTCurve(Number(df));

  const {
    r1x1, r1x2, r2x1, r2x2,
  } = defineShadedRegionEndPoints(Number(area), curveRegion);

  // Just data for curve's line, *no fill*
  const plotData = [genCurvePlotData(x, y)];

  // Check if shaded regions are requested
  const plotRegion1 = r1x1 !== null && r1x2 !== null;
  const plotRegion2 = r2x1 !== null && r2x2 !== null;

  if (plotRegion1) {
    const shadedRegionPlotData = genShadedRegionPlotData(x, y, r1x1, r1x2);

    plotData.push(shadedRegionPlotData);
  }

  if (plotRegion2) {
    const shadedRegionPlotData = genShadedRegionPlotData(x, y, r2x1, r2x2);

    plotData.push(shadedRegionPlotData);
  }

  if (!plotRegion1 && !plotRegion2) {
    plotData[0].fill = 'tozeroy';
  }

  return (
    <div>
      <hr />
      <Plot
        data={plotData}
        layout={{
          xaxis: { zeroline: false },
          showlegend: false,
          margin: {
            l: 50,
            r: 40,
            b: 50,
            t: 40,
            pad: 4,
          },
        }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}

export default PFromTPlot;
