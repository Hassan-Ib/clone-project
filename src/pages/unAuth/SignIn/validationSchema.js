import Yup from "../../../utils/validation";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "it must be 8 characters long")
    .isAlpaNumeric()
    .required("Required"),
});
