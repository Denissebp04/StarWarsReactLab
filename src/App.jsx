import { useState, useEffect } from 'react'
import { getAllStarships } from './services/sw-api'
import StarshipCard from './components/StarshipCard'
import './App.css'

function App() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const ships = await getAllStarships()
      setStarships(ships.results)
    }
    fetchStarships()
  }, [])

  return (
    <>
      <h1>STAR WARS STARSHIPS</h1>
      <div className="starship-container">
        {starships.map((starship) => (
          <StarshipCard 
            key={starship.name}
            name={starship.name}
          />
        ))}
      </div>
    </>
  )
}

export default App
