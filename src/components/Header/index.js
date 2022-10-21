import {Link} from 'react-router-dom'
import './index.css'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'

const overlayStyles = {
  backgroundColor: '#ffffff',
}

const Header = () => (
  <nav className="nav">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo-image"
      />
    </Link>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            <GiHamburgerMenu className="menu-icon" />
          </button>
        }
        overlayStyle={overlayStyles}
      >
        {close => (
          <>
            <div>
              <div className="button-container">
                <button
                  className="close-icon-btn"
                  type="button"
                  onClick={() => close()}
                >
                  <IoMdClose className="icons" />
                </button>
              </div>

              <ul className="pop-card">
                <li className="tag-items">
                  <Link to="/" className="link-elements">
                    <AiFillHome className="icons" />
                    <h1 className="tags">Home</h1>
                  </Link>
                </li>
                <li className="tag-items">
                  <Link to="/about" className="link-elements">
                    <BsInfoCircleFill className="icons" />
                    <h1 className="tags">About</h1>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
