import { restaurentList } from "../constants";
import RestrauntCard from "../components/RestaurentCard";
import { useState } from "react";

//what is state?
//what is hook? - functions
//what is useState?

const Body = () => {
    // const searchTxt = "KFC";
    //searchtext is a local variable
    const [searchInput, setsearchInput] =  useState("KFC"); // To create state variable // return = [variable one, function to update the variable]
    //another way
    const searchvar = useState('KFCf');
    const [searchInput2, setsearchInput2] = searchvar;

    

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput2}
          onChange={(e) => {
            // e.target.value => whatever you wtite in input
            setsearchInput2(e.target.value);
          }}
        />
        <button className="search-btn">Search{searchInput}</button>
      </div>

      <div className="rastaurent-list">
        {restaurentList.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
