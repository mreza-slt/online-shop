import { useAuth } from "../../providers/AuthProvider";

const Checkout = () => {
  const auth = useAuth() || JSON.parse(localStorage.getItem("stateAuth"));

  return (
    <>
      <p>{auth.name}</p>
      <p>{auth.email}</p>
      <p>{auth.phoneNumber}</p>
    </>
  );
};

export default Checkout;
