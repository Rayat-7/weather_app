import React, { useState,useEffect } from "react";
import heart from "../../assets/heart.svg";
import { useContext } from "react";
import { FavouriteContext ,WeatherContext } from "../../context";

import RedHeartIcon from "../../assets/heart-red.svg";

const AddToFavourite = () => {
  const {addToFavourites,favourites, removeFromFavourites} = useContext(FavouriteContext);
  const {weatherData} = useContext(WeatherContext);
  const {latitude ,longitude ,location} =weatherData;
  useEffect(() => {
const found = favourites.find((fav) => fav.location === location);
toggleFavourite(found);
  },[])
  const [isFavourite, toggleFavourite] = useState(false);


   function handleFavourites() {
        const found = favourites.find((fav) => fav.location === location);

        if (!found) {
            addToFavourites(latitude, longitude, location);
        } else {
            removeFromFavourites(location);
        }
        toggleFavourite(!isFavourite);
    }

  return (
   
          <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
              <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
              onClick= {handleFavourites}>
                <span>Add to Favourite</span>
                <img src={isFavourite ? RedHeartIcon :  heart} alt="" />
              </button>
            </div>
          </div>
        
  );
};

export default AddToFavourite;
