import * as Yup from "yup";

function isAlpaNumeric() {
  return this.test(
    "test-alpha-numeric",
    "It password must have 1 uppercase, 1 numeric, and 1 alphanumeric.",
    function (value, _) {
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const conditions = [hasLowerCase, hasUpperCase, hasNumber];
      return conditions.every((condition) => condition === true);
    }
  );
}

Yup.addMethod(Yup.string, "isAlpaNumeric", isAlpaNumeric);

const FormValidator = Yup;

export default FormValidator;
