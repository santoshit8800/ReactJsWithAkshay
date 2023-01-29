export function filterData(searchText, restaurents) {
    const filterdatas = restaurents.filter((restaurant)=>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterdatas;
  };
  