import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./cartPage.css";

const ProfilePage = () => {
  const user =
    useSelector((state) => state.user.user) ||
    JSON.parse(localStorage.getItem("stateAuth"));

  return (
    <section className="summery" style={{ margin: "2rem auto" }}>
      <div>
        <h1>Your acont</h1>
      </div>
      <div className="item-1">
        <div>name</div>
        <div>{user.name} </div>
      </div>
      <div className="item-2">
        <div>email</div>
        <div>{user.email} </div>
      </div>
      <div className="item-3">
        <div>phoneNumber</div>
        <div>{user.phoneNumber}</div>
      </div>
      <Link to="/profile/edit">
        <button className="btn btn-summery">Edit</button>
      </Link>
    </section>
  );
};

export default ProfilePage;
