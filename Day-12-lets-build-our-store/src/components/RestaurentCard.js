import { IMG_CDN_URL } from "../constants"
import { useContext } from "react";
import UserContext from '../utils/UserContext';

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  // user
}) => {
  
  const {user} = useContext(UserContext);
  console.log(user);
  
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>    
      {/* <h4>{user.name}</h4>   */}
      <h5 className="font-bold">{user.name}</h5>
      <h5 className="font-bold">{user.email}</h5>
    </div>
    
  );
};

export default RestrauntCard;
