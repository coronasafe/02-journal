import React from "react";
import Spinner from "Common/Spinner";

import QrScanner from "./QrScanner";
import Success from "./Success";
import Error from "./Error";
import states from "./states.js";

const ComponentByState = ({ state, onScanned, onError, resetState }) => {
  switch (state) {
    case states.SCANNING:
      return <QrScanner onScanned={onScanned} onError={onError} />;
    case states.SUCCESS:
      return <Success resetState={resetState} />;
    case states.ERROR_QR_READ:
      return <Error state={state} resetState={resetState} />;
    case states.ERROR_MERCHANT:
      return <Error state={state} resetState={resetState} />;
    case states.LOADING:
      return <Spinner className="w-6 m-auto" />;
  }
};

export default ComponentByState;
