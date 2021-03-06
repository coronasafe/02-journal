import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

import Input from "Common/Form/Input";
import { LocalBodyForm } from "Common/CustomFields";
import Button from "Common/Button";
import { GenericError, genericErrorMessage } from "Common/Form/ErrorMessage";

const schema = yup.object().shape({
  name: yup.string().required("Please enter name of shop"),
  phone: yup
    .string()
    .trim()
    .required("Please enter mobile number")
    .length(10, "Please enter 10 digit mobile number"),
  address: yup.string().trim().required("Please enter address"),
  local_body: yup.mixed().required("Please enter local body"),
});

function StationForm({ initialValues, loading, onSubmit, apiError }) {
  const form = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, register, errors, setError } = form;

  useEffect(() => {
    if (apiError) {
      const { response } = apiError;
      if (
        response?.status === 422 &&
        response?.data?.name?.[0] === "has already been taken"
      ) {
        setError("name", {
          type: "manual",
          message: "Station by the same name exists. Please add a unique name",
        });
      } else {
        setError("general", {
          type: "manual",
          message: genericErrorMessage,
        });
      }
    }
  }, [apiError]);

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-lg">
      <div className="bg-white py-2 px-4 sm:px-10">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            label="Establishment Name"
            required
            placeholder="Name of the establishment"
            register={register}
            errors={errors}
          />
          <Input
            name="phone"
            label="Mobile number"
            required
            placeholder="10 digit mobile number"
            register={register}
            errors={errors}
          />
          <Input
            as="textarea"
            name="address"
            rows={6}
            label="Address"
            required
            placeholder="Complete address of the establishment"
            register={register}
            errors={errors}
          />
          <LocalBodyForm form={form} />
          <GenericError errors={errors} />
          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <Button
                htmlType="submit"
                colorType="primary"
                sizeType="lg"
                loading={loading}
                block
              >
                Add Station
              </Button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StationForm;
