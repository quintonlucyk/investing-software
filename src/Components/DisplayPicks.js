import * as React from "react";
import { API_LIMIT_KEY } from "../constants";
// import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const DisplayPicks = () => {
  const pickData = useSelector((state) => state.fetchedPickData);
  const { pickError, pickLoading, symbolList } = pickData;

  if (pickLoading) {
    return <FontAwesomeIcon className="fa-spin" size="lg" icon="spinner" />;
  }

  if (pickError) {
    return <div>We encountered an error along the way...</div>;
  }

  if (symbolList && symbolList[API_LIMIT_KEY]) {
    return <div>{symbolList[API_LIMIT_KEY]}</div>;
  }
  return null;
};

export default DisplayPicks;
