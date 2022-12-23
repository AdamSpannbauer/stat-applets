/* eslint-disable react/prop-types */
import React from 'react';
import Plot from 'react-plotly.js';

import { MAX_T } from '../../../statistics/tTable/constants';

import genTCurve from '../../../statistics/tTable/genTCurve';
import {
  tFromAreaAbove, tFromAreaBelow, tFromAreaBetween, tFromAreaOutside,
} from '../../../statistics/tTable/tInvCDF/tFromArea';

import { genCurvePlotData, genShadedRegionPlotData } from '../plotlyUtils';
import TFromPPlotTitle from './TFromPPlotTitle';

const defineShadedRegionEndPoints = (df, area, selectedRegion) => {
  const shadedRegionEndPoints = {
    r1x1: null, r1x2: null, r2x1: null, r2x2: null, z: null,
  };

  let t;

  if (area >= 1) {
    shadedRegionEndPoints.z = Infinity;
    shadedRegionEndPoints.r1x1 = -MAX_T;
    shadedRegionEndPoints.r1x2 = MAX_T;
  } else if (selectedRegion === 'below') {
    t = tFromAreaBelow(area, df);
    shadedRegionEndPoints.t = t;

    shadedRegionEndPoints.r1x1 = -MAX_T;
    shadedRegionEndPoints.r1x2 = t;
  } else if (selectedRegion === 'above') {
    t = tFromAreaAbove(area, df);
    shadedRegionEndPoints.t = t;

    shadedRegionEndPoints.r1x1 = t;
    shadedRegionEndPoints.r1x2 = MAX_T;
  } else if (selectedRegion === 'between') {
    t = tFromAreaBetween(area, df);
    shadedRegionEndPoints.t = t;

    shadedRegionEndPoints.r1x1 = -t;
    shadedRegionEndPoints.r1x2 = t;
  } else if (selectedRegion === 'outside') {
    t = tFromAreaOutside(area, df);
    shadedRegionEndPoints.t = t;

    shadedRegionEndPoints.r1x1 = -MAX_T;
    shadedRegionEndPoints.r1x2 = -t;

    shadedRegionEndPoints.r2x1 = t;
    shadedRegionEndPoints.r2x2 = MAX_T;
  }

  return shadedRegionEndPoints;
};

function TFromPPlot(props) {
  const { hookValues } = props;
  const {
    df,
    area,
    curveRegion,
  } = hookValues;

  const {
    x, y,
  } = genTCurve(Number(df));

  const {
    r1x1, r1x2, r2x1, r2x2, t,
  } = defineShadedRegionEndPoints(Number(df), Number(area), curveRegion);

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
      <TFromPPlotTitle
        df={df}
        area={area}
        curveRegion={curveRegion}
        t={t}
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

export default TFromPPlot;
