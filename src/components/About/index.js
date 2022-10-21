import './index.css'
import Header from '../Header'

const About = () => (
  <div>
    <Header />
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png "
        alt="about"
        className="about-mobile-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png "
        alt="about"
        className="about-desktop-image"
      />
    </div>
  </div>
)

export default About
