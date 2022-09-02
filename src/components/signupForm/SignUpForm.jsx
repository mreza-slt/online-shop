import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../common/input/Input";
import { useQuery } from "../../hooks/useQuery";
import { setUserData } from "../../redux/user/userActions";
import "./signupForm.css";

const SignUpForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const history = useNavigate();
  const auth = useSelector((state) => state.user.user);

  const query = useQuery();
  const redirect = query.get("redirect");

  useEffect(() => {
    if (auth) {
      redirect === "/" ? history("/") : history(`/${redirect}`);
    }
  }, [auth, redirect]);

  // 1.managing states
  const initialValues = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    passwordConfirm: "",
  };

  // 2.handler submit
  const onSubmit = (values) => {
    const { name, email, phoneNumber, password } = values;
    const userData = { name, email, phoneNumber, password };

    dispatch(setUserData(values));
    // localStorage.setItem("stateAuth", JSON.stringify(data));
    setError(null);
    {
      redirect === "/" ? history("/") : history(`/${redirect}`);
    }
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
    password: Yup.string()
      // .min(8, "پسورد شما حداقل باید 8 کاراکتر باشد")
      .required("Password is required"),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "password not valid"
    // ),
    passwordConfirm: Yup.string()
      .required("password confirmation is required")
      .oneOf([Yup.ref("password"), null], "your password must be match"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="signUpContainer">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} label="Name" name="name" />
        <Input formik={formik} label="Email" name="email" type="email" />
        <Input formik={formik} label="Number" name="phoneNumber" type="tel" />
        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <Input
          formik={formik}
          label="password confirmation"
          name="passwordConfirm"
          type="password"
        />
        <button
          style={{ marginTop: "1rem", width: "100%" }}
          className="btn"
          type="submit"
          disabled={!formik.isValid}
        >
          SignUp
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* <Link to="/login?redirect=checkout"> */}
        <Link to={`/login?redirect=${redirect}`}>
          <p style={{ textAlign: "start", marginTop: "1rem" }}>
            AlReady login ?
          </p>
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
