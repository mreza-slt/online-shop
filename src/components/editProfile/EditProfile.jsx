import { useAuth, useAuthDispatch } from "../../providers/AuthProvider";
import "./editProfile.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Input from "../../common/input/Input";

const EditProfileComponent = () => {
  const user = useAuth() || JSON.parse(localStorage.getItem("stateAuth"));
  const setAuth = useAuthDispatch();

  // 1.managing states
  const initialValues = {
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
  };
  // 2.handler submit
  const history = useNavigate();
  const onSubmit = (values) => {
    history("/profile");
    setAuth(values);
  };

  //3.validation state
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .required("phoneNumber is required")
      .matches(/^[0-9]{11}$/, "Invalid phoneNumber"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="edit">
      <form onSubmit={formik.handleSubmit}>
        <h2>Edit account details</h2>
        <div>
          <Input formik={formik} label="Name" name="name" />
        </div>
        <div>
          <Input formik={formik} label="Email" name="email" type="email" />
        </div>
        <div>
          <Input formik={formik} label="Number" name="phoneNumber" type="tel" />
        </div>
        <button disabled={!formik.isValid} className="btn">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditProfileComponent;
