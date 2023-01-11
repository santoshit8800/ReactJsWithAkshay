import { restaurentList } from "../constants";
import RestrauntCard from "../components/RestaurentCard";
import { useState } from "react";

//what is state?
//what is hook? - functions
//what is useState?

function filterData(searchText, restaurents) {
  const filterdatas = restaurents.filter((restaurant)=>
    restaurant.data.name.includes(searchText)
  );
  return filterdatas;
};

const Body = () => {
    // const searchTxt = "KFC";
    //searchtext is a local variable
    const [restaurents, setRestaurents] = useState(restaurentList);
    const [searchText, setSearchText] =  useState(""); // To create state variable // return = [variable one, function to update the variable]
    //another way
    // const searchvar = useState('KFCf');
    // const [searchInput2, setsearchInput2] = searchvar;
    
    

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            // e.target.value => whatever you wtite in input
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" 
        onClick={() => {
          //Need to filter the data
          const data = filterData(searchText, restaurents);
          //Update the state - restaurents 
          setRestaurents(data);
        }}
        >
          Search
        </button>
      </div>

      <div className="rastaurent-list">
        {/* {restaurentList.map((restaurant) => { */}
        {restaurents.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        }
        )}
      </div>
    </>
  );
};

export default Body;
