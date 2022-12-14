import React from "react";
import { useFormikContext } from "formik";

//import components
import * as Button from "../Blocks/Button";
import color from "../../config/color";

const SubmitBtn = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button.BtnContain
      label={title}
      color={color.darkBrown}
      labelcolor="white"
      onPress={handleSubmit}
    />
  );
};

export default SubmitBtn;
