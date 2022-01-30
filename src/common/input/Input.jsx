import "./input.css";

const Input = ({ formik, label, type = "text", name }) => {
  return (
    <div className="formControl">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        {...formik.getFieldProps(name)}
        name={name}
      />
      {formik.errors[name] && formik.touched[name] ? (
        <div className="text-danger">{formik.errors[name]}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
