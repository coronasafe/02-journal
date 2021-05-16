import RadioButtonGroup, { RadioButton } from "Common/Form/RadioButton";

function CylinderCapacity({
  errors,
  register,
  name = "capacity",
  label = "Capacity",
}) {
  return (
    <RadioButtonGroup label={label} name={name} errors={errors}>
      <RadioButton value="d" defaultChecked register={register}>
        D
      </RadioButton>
      <RadioButton value="b" register={register}>
        B
      </RadioButton>
      <RadioButton value="c" register={register}>
        C
      </RadioButton>
      <RadioButton value="h" register={register}>
        H
      </RadioButton>
    </RadioButtonGroup>
  );
}

export default CylinderCapacity;
