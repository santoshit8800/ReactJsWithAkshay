import {useContext} from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const {user} = useContext(UserContext);
  return (
    <div className="footer">
      <p className="p-10 m-5">This is develop by {user.name}, {user.email}</p>
    </div>
  )
};

export default Footer;