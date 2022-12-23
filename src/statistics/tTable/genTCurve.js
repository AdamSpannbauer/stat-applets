import { mapRange } from '../mathUtils';
import { MAX_T } from './constants';
import tPDF from './tPDF';

const genTCurve = (df, nSteps = 512) => {
  const minX = -MAX_T;
  const maxX = MAX_T;

  const steps = Array.from({ length: nSteps }).map((_, i) => i);
  const x = steps.map((n) => mapRange(n, 0, nSteps - 1, minX, maxX));
  const y = x.map((xi) => tPDF(xi, df));

  return {
    x, y, minX, maxX, minY: Math.min(...y), maxY: Math.min(...y),
  };
};

export default genTCurve;
