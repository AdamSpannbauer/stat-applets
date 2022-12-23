/* eslint-disable react/prop-types */
import React from 'react';

function titleStr(mean, sd, area, curveRegion, z) {
  let zStr = +z.toFixed(3);
  let scaledZStr = +((z * sd) + mean).toFixed(3);
  const areaPercentStr = +(100 * area).toFixed(2);

  let z2Str = null;
  let scaledZ2Str = null;
  if (['outside', 'between'].includes(curveRegion)) {
    // eslint-disable-next-line no-param-reassign
    z = Math.abs(z);

    zStr = -z.toFixed(3);
    scaledZStr = +((-z * sd) + mean).toFixed(3);

    z2Str = +z.toFixed(3);
    scaledZ2Str = +((z * sd) + mean).toFixed(3);
  }

  let res = '';
  if (curveRegion === 'below') {
    if (area === 0) {
      zStr = `-${Infinity}`;
      scaledZStr = `-${Infinity}`;
    }
    res = `${areaPercentStr}% of the data is below ${scaledZStr} (z = ${zStr})`;
  } else if (curveRegion === 'above') {
    if (z === Infinity) {
      zStr = `-${zStr}`;
      scaledZStr = `-${scaledZStr}`;
    } else if (area === 0) {
      zStr = `${Infinity}`;
      scaledZStr = `${Infinity}`;
    }
    res = `${areaPercentStr}% of the data is above ${scaledZStr} (z = ${zStr})`;
  } else if (curveRegion === 'between') {
    res = `${areaPercentStr}% of the data is between ${scaledZStr} (z = ${zStr}) & ${scaledZ2Str} (z = ${z2Str})`;
  } else if (curveRegion === 'outside') {
    if (z === Infinity) {
      zStr = '0';
      scaledZStr = '0';
    } else if (area === 0) {
      zStr = `${Infinity}`;
      scaledZStr = `${Infinity}`;
    }
    res = `${areaPercentStr}% of the data is outside ${scaledZStr} (z = ${zStr}) & ${scaledZ2Str} (z = ${z2Str})`;
  }

  return res;
}

function ZFromPPlotTitle(props) {
  const {
    mean, sd, area, curveRegion, z,
  } = props;

  const title = titleStr(Number(mean), Number(sd), Number(area), curveRegion, Number(z));
  return <h1 className="plot-title">{title}</h1>;
}

export default ZFromPPlotTitle;
