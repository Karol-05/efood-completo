import Footer from '../../components/Footer'
import HeaderBar from '../../components/HeaderBar'
import RestaurantCard from '../../components/RestaurantCard'
import restaurants from '../../data/restaurants'
import { ListSection, RestaurantList } from './styles'

function Home() {
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