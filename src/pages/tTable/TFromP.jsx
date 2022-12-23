import React, { useState } from 'react';
import TFromPForm from '../../components/forms/TFromPForm';
import TFromPPlot from '../../components/plots/t/TFromPPlot';

function TFromP() {
  const [area, setArea] = useState(0.05);
  const [df, setDF] = useState(2);

  const [curveRegion, setCurveRegion] = useState('outside');

  const hookValues = {
    area, df, curveRegion,
  };

  const hookSetters = {
    setArea, setDF, setCurveRegion,
  };

  return (
    <div className="page">
      <TFromPForm hookValues={hookValues} hookSetters={hookSetters} />
      <TFromPPlot hookValues={hookValues} />
    </div>
  );
}

export default TFromP;
