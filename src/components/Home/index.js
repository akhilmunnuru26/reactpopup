import './index.css'
import Header from '../Header'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="home-mobile-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-desktop-image"
      />
    </div>
  </div>
)

export default Home
