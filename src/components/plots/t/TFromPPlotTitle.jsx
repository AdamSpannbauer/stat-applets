/* eslint-disable react/prop-types */
import React from 'react';

function titleStr(df, area, curveRegion, t) {
  let scaledZStr = +t.toFixed(3);
  const areaPercentStr = +(100 * area).toFixed(2);

  let scaledZ2Str = null;
  if (['outside', 'between'].includes(curveRegion)) {
    // eslint-disable-next-line no-param-reassign
    t = Math.abs(t);

    scaledZStr = +t.toFixed(3);

    scaledZ2Str = +t.toFixed(3);
  }

  let res = '';
  if (curveRegion === 'below') {
    if (area === 0) {
      scaledZStr = `-${Infinity}`;
    }
    res = `${areaPercentStr}% of the data is below ${scaledZStr}`;
  } else if (curveRegion === 'above') {
    if (t === Infinity) {
      scaledZStr = `-${scaledZStr}`;
    } else if (area === 0) {
      scaledZStr = `${Infinity}`;
    }
    res = `${areaPercentStr}% of the data is above ${scaledZStr}`;
  } else if (curveRegion === 'between') {
    res = `${areaPercentStr}% of the data is between ${scaledZStr} & ${scaledZ2Str}`;
  } else if (curveRegion === 'outside') {
    if (t === Infinity) {
      scaledZStr = '0';
    } else if (area === 0) {
      scaledZStr = `${Infinity}`;
    }
    res = `${areaPercentStr}% of the data is outside ${scaledZStr} & ${scaledZ2Str}`;
  }

  return res;
}

function TFromPPlotTitle(props) {
  const {
    df, area, curveRegion, t,
  } = props;

  const title = titleStr(Number(df), Number(area), curveRegion, Number(t));
  return <h1 className="plot-title">{title}</h1>;
}

export default TFromPPlotTitle;
