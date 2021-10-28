import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import Layout from "./common/presentation/pages/Layout";
import { getDbLatestMeasurements } from "./measurements/api/measurementDbApi";
import LatestMeasurementCardCarousel from "./measurements/presentation/components/LatestMeasurementCardCarousel";
import AppStyled from "./styles/App.styled";

function App() {
  const dispatch = useDispatch();
  const [latestMeasurements, setLatestMeasurements] = useState([]);

  useEffect(() => {
    getDbLatestMeasurements()
      .then(({ data }) => setLatestMeasurements(data))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <AppStyled>
      <LatestMeasurementCardCarousel measurements={latestMeasurements} />
      <Layout latestMeasurements={latestMeasurements} />
    </AppStyled>
  );
}

export default App;
