import { mapRange } from '../mathUtils';
import { MAX_Z } from './constants';
import zPDF from './zPDF';

const genNormalCurve = (mean, sd, nSteps = 512) => {
  const minX = mean - MAX_Z * sd;
  const maxX = mean + MAX_Z * sd;

  const steps = Array.from({ length: nSteps }).map((_, i) => i);
  const x = steps.map((n) => mapRange(n, 0, nSteps - 1, minX, maxX));
  const y = x.map((xi) => zPDF(xi, mean, sd));

  return {
    x, y, minX, maxX, minY: Math.min(...y), maxY: Math.min(...y),
  };
};

export default genNormalCurve;
