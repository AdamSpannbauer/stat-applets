import React, { useState } from 'react';
import PFromZForm from '../../components/forms/PFromZForm';
import PFromZPlot from '../../components/plots/z/PFromZPlot';

function PFromZ() {
  const [x, setX] = useState(1.96);
  const [mean, setMean] = useState(0);
  const [sd, setSD] = useState(1);

  const [curveRegion, setCurveRegion] = useState('outside');

  const hookValues = {
    x, mean, sd, curveRegion,
  };

  const hookSetters = {
    setX, setMean, setSD, setCurveRegion,
  };

  return (
    <div className="page">
      <PFromZForm hookValues={hookValues} hookSetters={hookSetters} />
      <PFromZPlot hookValues={hookValues} />
    </div>
  );
}

export default PFromZ;
