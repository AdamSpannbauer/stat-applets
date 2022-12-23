export const genCurvePlotData = (x, y) => {
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

export const genShadedRegionPlotData = (x, y, x1, x2) => {
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
