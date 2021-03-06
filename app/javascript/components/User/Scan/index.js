import { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "Common/Button";

import states from "./states.js";
import ComponentByState from "./ComponentByState";

function Scan() {
  const history = useHistory();
  const [state, setState] = useState(states.SCANNING);
  const [data, setData] = useState(null);

  const resetState = () => {
    setState(states.SCANNING);
  };

  const onScanned = async (id) => {
    try {
      if (id) {
        setData({ id });
        setState(states.SUCCESS);
      }
    } catch (e) {
      setState(states.ERROR_MERCHANT);
    }
  };

  const onErrorScanning = () => {
    setState(states.ERROR_QR_READ);
  };

  return (
    <div className="min-h-screen flex flex-col py-12 px-6">
      <div className="flex flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {state != states.SUCCESS && (
            <>
              <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Scan QR Code
              </h2>
              <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
                Hold your device over a QR Code so that it&apos;s clearly
                visible within the red box.
              </p>
            </>
          )}
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white p-6 shadow sm:rounded-lg sm:px-10">
              <ComponentByState
                data={data}
                state={state}
                onScanned={onScanned}
                onError={onErrorScanning}
                resetState={resetState}
              />
            </div>
          </div>
          <Button
            htmlType="button"
            className="mt-4"
            block
            colorType={"default"}
            onClick={() => {
              history.push("/user");
            }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Scan;
