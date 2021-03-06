import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import useRequest from "@ahooksjs/use-request";
import * as yup from "yup";
import { pick } from "lodash";
import { useHistory, useRouteMatch, Link } from "react-router-dom";
import { isLoggedIn } from "Apis/authentication";

import Input from "Common/Form/Input";
import Button from "Common/Button";
import SelectStation from "Common/CustomFields/SelectStation";
import { login } from "Apis/authentication";
import SignUpThumb from "./SignUpThumb";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  phone: yup
    .string()
    .trim()
    .required("Please enter mobile number")
    .length(10, "Please enter 10 digit mobile number"),
  station: yup.mixed().required("Please select station"),
});

function SignUp() {
  const [verifyingLogin, setVerifyingLogin] = useState(false);
  const match = useRouteMatch();
  const history = useHistory();

  const { loading, run: loginUser } = useRequest(login, {
    manual: true,
  });

  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function userLoggedIn() {
      setVerifyingLogin(true);
      const loginStatus = await isLoggedIn();
      if (loginStatus) {
        history.push("/user");
      }
      setVerifyingLogin(false);
    }
    userLoggedIn();
  }, []);

  const onSubmit = async (payload) => {
    const response = await loginUser({
      ...pick(payload, ["name", "phone"]),
      station_id: payload.station.id,
    });
    const userId = response.data?.id;
    if (userId) {
      history.push(`${match.url}user`);
    }
  };

  if (verifyingLogin) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center md:py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white shadow-sm">
        <img className="w-full px-6" src={SignUpThumb} alt="Sign up Thumb" />
        <div className="px-6 py-4">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
            Enter your details
          </h2>
          <div className="mt-6">
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                label="Full Name"
                required
                placeholder="John Doe"
                register={register}
                errors={errors}
                autoComplete="name"
                autoFocus
              />
              <Input
                name="phone"
                type="tel"
                label="Mobile Number"
                required
                placeholder="10 digit mobile number"
                register={register}
                errors={errors}
                autoComplete="tel"
              />
              <SelectStation control={control} errors={errors} />
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <Button
                    htmlType="submit"
                    colorType="primary"
                    sizeType="lg"
                    block
                    loading={loading}
                  >
                    Register
                  </Button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Link to="/admin/suppliers">
        <p className="mt-2 mb-4 text-gray-600 text-center">
          Are you looking for the Supplier Page?
        </p>
      </Link>
    </div>
  );
}

export default SignUp;
