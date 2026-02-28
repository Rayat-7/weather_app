import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import WeatherBoard from './components/Weather/WeatherBoard'
import { WeatherProvider } from './provider'
import { FavouriteProvider } from './provider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <WeatherProvider>
      <FavouriteProvider> 
    <div className="place-items-center grid h-screen">
    <Header />
    <main>
      <section>
        <WeatherBoard />
      </section>
    </main>
    </div>
    </FavouriteProvider>
    </WeatherProvider>

  )
}

export default App
