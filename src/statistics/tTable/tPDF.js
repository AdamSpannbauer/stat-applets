import { gamma } from '../mathUtils';

function tPDF(t, df) {
  // Compute the PDF of the Student's t distribution with `df` degrees of freedom
  // at value `t`.

  // Special case: df = 1 is the Cauchy distribution
  if (df === 1) {
    return 1 / (Math.PI * (1 + t * t));
  }

  // General case
  const n = df;
  const gammaTerm = gamma((n + 1) / 2) / (Math.sqrt(n * Math.PI) * gamma(n / 2));
  // eslint-disable-next-line no-bitwise
  return gammaTerm * (1 + (t * t) / n) ** (-(n + 1) / 2);
}

export default tPDF;
