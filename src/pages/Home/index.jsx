import { useEffect, useState } from 'react'

import HeaderBar from '../../components/HeaderBar'
import Footer from '../../components/Footer'
import RestaurantCard from '../../components/RestaurantCard'

import API_URL from '../../services/api'

import {
  ListSection,
  RestaurantList
} from './styles'

function Home() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/restaurantes`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data)
      })
  }, [])

  return (
    <>
      <HeaderBar home />

      <ListSection>
        <div className="container">
          <RestaurantList>
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))}
          </RestaurantList>
        </div>
      </ListSection>

      <Footer />
    </>
  )
}

export default Home