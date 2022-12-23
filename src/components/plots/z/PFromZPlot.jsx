/* eslint-disable react/prop-types */
import React from 'react';
import Plot from 'react-plotly.js';

import { MAX_Z } from '../../../statistics/zTable/constants';
import genNormalPts from '../../../statistics/zTable/genNormalCurve';
import { genCurvePlotData, genShadedRegionPlotData } from '../plotlyUtils';

const defineShadedRegionEndPoints = (mean, sd, x, selectedRegion) => {
  const shadedRegionEndPoints = {
    r1x1: null, r1x2: null, r2x1: null, r2x2: null, z: null,
  };

  const z = (x - mean) / sd;

  if (Math.abs(z) >= MAX_Z) {
    shadedRegionEndPoints.z = Infinity;
    shadedRegionEndPoints.r1x1 = mean - MAX_Z * sd;
    shadedRegionEndPoints.r1x2 = mean + MAX_Z * sd;
  } else if (selectedRegion === 'below') {
    shadedRegionEndPoints.z = z;

    shadedRegionEndPoints.r1x1 = mean - MAX_Z * sd;
    shadedRegionEndPoints.r1x2 = mean + z * sd;
  } else if (selectedRegion === 'above') {
    shadedRegionEndPoints.z = z;

    shadedRegionEndPoints.r1x1 = mean + z * sd;
    shadedRegionEndPoints.r1x2 = mean + MAX_Z * sd;
  } else if (selectedRegion === 'between') {
    shadedRegionEndPoints.z = z;

    shadedRegionEndPoints.r1x1 = mean - z * sd;
    shadedRegionEndPoints.r1x2 = mean + z * sd;
  } else if (selectedRegion === 'outside') {
    shadedRegionEndPoints.z = z;

    shadedRegionEndPoints.r1x1 = mean - MAX_Z * sd;
    shadedRegionEndPoints.r1x2 = mean - z * sd;

    shadedRegionEndPoints.r2x1 = mean + z * sd;
    shadedRegionEndPoints.r2x2 = mean + MAX_Z * sd;
  }

  return shadedRegionEndPoints;
};

function PFromZPlot(props) {
  const { hookValues } = props;
  const {
    mean,
    sd,
    x: userX,
    curveRegion,
  } = hookValues;

  const {
    x, y,
  } = genNormalPts(Number(mean), Number(sd));

  const {
    r1x1, r1x2, r2x1, r2x2,
  } = defineShadedRegionEndPoints(Number(mean), Number(sd), Number(userX), curveRegion);

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

export default PFromZPlot;
