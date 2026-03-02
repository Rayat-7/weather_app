import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { WeatherProvider } from './provider'
import { FavouriteProvider } from './provider'
import { LocationProvider } from './provider'
import Page from './page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LocationProvider>
    <WeatherProvider>
      <FavouriteProvider> 
    <Page/>
    </FavouriteProvider>
    </WeatherProvider>
    </LocationProvider>
  )
}

export default App
