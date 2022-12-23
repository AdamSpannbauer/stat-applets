/* eslint-disable react/prop-types */
import React from 'react';
import Plot from 'react-plotly.js';
import genNormalCurve from '../../../statistics/zTable/genNormalCurve';

import {
  zFromAreaBelow, zFromAreaAbove, zFromAreaBetween, zFromAreaOutside,
} from '../../../statistics/zTable/zInvCDF/zFromArea';
import ZFromPPlotTitle from './ZFromPPlotTitle';

const defineShadedRegionEndPoints = (mean, sd, area, selectedRegion) => {
  const shadedRegionEndPoints = {
    r1x1: null, r1x2: null, r2x1: null, r2x2: null, z: null,
  };

  const maxZ = 5;
  let z;

  if (area >= 1) {
    shadedRegionEndPoints.z = Infinity;
    shadedRegionEndPoints.r1x1 = mean - maxZ * sd;
    shadedRegionEndPoints.r1x2 = mean + maxZ * sd;
  } else if (selectedRegion === 'below') {
    z = zFromAreaBelow(area);
    shadedRegionEndPoints.z = z;

    shadedRegionEndPoints.r1x1 = mean - maxZ * sd;
    shadedRegionEndPoints.r1x2 = mean + z * sd;
  } else if (selectedRegion === 'above') {
    z = zFromAreaAbove(area);
    shadedRegionEndPoints.z = z;

    shadedRegionEndPoints.r1x1 = mean + z * sd;
    shadedRegionEndPoints.r1x2 = mean + maxZ * sd;
  } else if (selectedRegion === 'between') {
    z = zFromAreaBetween(area);
    shadedRegionEndPoints.z = z;

    shadedRegionEndPoints.r1x1 = mean - z * sd;
    shadedRegionEndPoints.r1x2 = mean + z * sd;
  } else if (selectedRegion === 'outside') {
    z = zFromAreaOutside(area);
    shadedRegionEndPoints.z = z;

    shadedRegionEndPoints.r1x1 = mean - maxZ * sd;
    shadedRegionEndPoints.r1x2 = mean - z * sd;

    shadedRegionEndPoints.r2x1 = mean + z * sd;
    shadedRegionEndPoints.r2x2 = mean + maxZ * sd;
  }

  return shadedRegionEndPoints;
};

const genNormalCurvePlotData = (x, y) => {
  const plotData = {
    x,
    y,
    type: 'scatter',
    mode: 'lines',
    hovertemplate: '(%{x:.2f}, %{y:.2f})<extra></extra>',
    line: { color: '#f77f00' },
  };

  return plotData;
};

const genShadedRegionPlotData = (x, y, x1, x2) => {
  let minX = Number(x1);
  let maxX = Number(x2);

  if (minX > maxX) {
    [minX, maxX] = [maxX, minX];
  }

  const rx = [];
  const ry = [];

  for (let i = 0; i < x.length - 1; i += 1) {
    if (x[i] >= minX && x[i] <= maxX) {
      rx.push(x[i]);
      ry.push(y[i]);
    }
  }

  return {
    x: rx,
    y: ry,
    type: 'scatter',
    mode: 'lines',
    fill: 'tozeroy',
    hoverinfo: 'skip',
    line: { color: '#f77f00' },
  };
};

function ZFromPPlot(props) {
  const { hookValues } = props;
  const {
    mean,
    sd,
    area,
    curveRegion,
  } = hookValues;

  const {
    x, y,
  } = genNormalCurve(Number(mean), Number(sd));

  const {
    r1x1, r1x2, r2x1, r2x2, z,
  } = defineShadedRegionEndPoints(Number(mean), Number(sd), Number(area), curveRegion);

  // Just data for curve's line, *no fill*
  const plotData = [genNormalCurvePlotData(x, y)];

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
      <ZFromPPlotTitle
        mean={mean}
        sd={sd}
        area={area}
        curveRegion={curveRegion}
        z={z}
      />
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

export default ZFromPPlot;
