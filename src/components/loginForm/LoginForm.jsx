import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../common/input/Input";
import { useQuery } from "../../hooks/useQuery";
import { setUserData } from "../../redux/user/userActions";
import { loginUser } from "../../services/loginUser";
import "./loginForm.css";

// 1.managing states
const initialValues = {
  email: "",
  password: "",
};

// 2.handler submit

//3.validation state
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const [error, setError] = useState(null);
  const history = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();
  const redirect = query.get("redirect") || "/";

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      dispatch(setUserData(data));
      // localStorage.setItem("stateAuthLogin", JSON.stringify(data));
      setError(null);

      {
        redirect === "/" ? history("/") : history(`/${redirect}`);
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="signUpContainer">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} label="Email" name="email" type="email" />
        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <button
          style={{ marginTop: "1rem", width: "100%" }}
          className="btn"
          type="submit"
          disabled={!formik.isValid}
        >
          Login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* <Link to="/signup?redirect=checkout"> */}
        <Link to={`/signup?redirect=${redirect}`}>
          <p style={{ textAlign: "start", marginTop: "1rem" }}>
            Not signup yet ?
          </p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
