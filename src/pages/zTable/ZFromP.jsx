import React, { useState } from 'react';
import ZFromPForm from '../../components/forms/ZFromPForm';
import ZFromPPlot from '../../components/plots/z/ZFromPPlot';

function ZFromP() {
  const [area, setArea] = useState(0.05);
  const [mean, setMean] = useState(0);
  const [sd, setSD] = useState(1);

  const [curveRegion, setCurveRegion] = useState('outside');

  const hookValues = {
    area, mean, sd, curveRegion,
  };

  const hookSetters = {
    setArea, setMean, setSD, setCurveRegion,
  };

  return (
    <div className="page">
      <ZFromPForm hookValues={hookValues} hookSetters={hookSetters} />
      <ZFromPPlot hookValues={hookValues} />
    </div>
  );
}

export default ZFromP;
