import { createContext } from "react";

// Contexts default to basic object shapes so consumers can destructure
// without crashing before providers are mounted.  Providers will supply
// the real values.

const WeatherContext = createContext({
  weatherData: {},
  loading: {},
  error: null,
});

const FavouriteContext = createContext({
  favourites: [],
  addFavourite: () => {},
  removeFavourite: () => {},
});

const LocationContext = createContext({
  selectedLocation: { location: "", latitude: 0, longitude: 0 },
  setSelectedLocation: () => {},
});

export { WeatherContext, FavouriteContext, LocationContext };