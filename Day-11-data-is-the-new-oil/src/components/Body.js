import React from 'react';
import { useEffect, useState, useContext } from "react";
import { restaurentList } from "../constants";
import RestrauntCard from "../components/RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from "../utils/useOnline";
import UserContext from '../utils/UserContext';

//what is state?
//what is hook? - functions
//what is useState?

const Body = () => {
    // const searchTxt = "KFC";
    //searchtext is a local variable
    // const [restaurents, setRestaurents] = useState([]);
    const [restaurents, setRestaurents] = useState([]);
    const [allRestaurents, setAllRestaurents] = useState([]);
    const [filteredRestaurants, SetFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] =  useState(""); // To create state variable // return = [variable one, function to update the variable]
    const {user, setUser} = useContext(UserContext)
    //another way
    // const searchvar = useState('KFCf');
    // const [searchInput2, setsearchInput2] = searchvar;
    
    //empty dependency array => once after render
    //deep array [searchText] => once after initial render + everytime rendered (my search text changes)

    useEffect(()=>{
      //API Call
      getRestaurents();
    }, []);
    
    async function getRestaurents(){
      const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.69730969999999&lng=77.0845064&page_type=DESKTOP_WEB_LISTING");
      const json =  await data.json();
      console.log(json);
      setAllRestaurents(json?.data?.cards[2]?.data?.data?.cards);
      SetFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      console.log(setRestaurents);
    }


    const isOnline = useOnline();

    if(!isOnline){
      return <h1>Offline! Please check your internet connection...</h1>
    }

    // Conditional rendering
    // if restaurent is empty
    if (!allRestaurents) return null;

    return (allRestaurents.length === 0 ) ? (<Shimmer />) : (
      <>
        <div className="search-container p-5 bg-pink-50 my-5">
          <label>Search Products</label>
          <input
            type="text"
            className="search-input focus:bg-green-200 p-2 m-2"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              // e.target.value => whatever you wtite in input
              setSearchText(e.target.value);
            }}
          />
          <button 
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            //Need to filter the data
            const data = filterData(searchText, allRestaurents);
            //Update the state - restaurents 
            SetFilteredRestaurants(data);
          }}
          >
            Search
          </button>
          <input value={user.name} 
          onChange={
            e => setUser(
              {
                ...user,
                name: e.target.value,                
              }
            )
          }
          />

<input value={user.email} 
          onChange={
            e => setUser(
              {
                ...user,
                email: e.target.value,
              }
            )
          }
          />
        </div>

        <div className="flex flex-wrap ">
          {/* {restaurentList.map((restaurant) => { */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
              <RestrauntCard {...restaurant.data} user={user} />
              </Link>              
            );
          }
          )}
        </div>
      </>
    );
};

export default Body;
