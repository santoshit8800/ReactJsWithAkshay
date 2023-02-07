import {useState} from "react";
import { useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurant = (resId) => {
    const [restaurant, setRestauraunt] = useState(null);

    //Get data from API
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
    const data = await fetch(
        FETCH_MENU_URL +
        resId
    );
    const json = await data.json();
    console.log(json.data);
    setRestauraunt(json.data);
    }

    //Return Restaurant data
    return restaurant;

};
export default useRestaurant;