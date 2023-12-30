import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './NavBar.css';
import { useState } from 'react';
import { logo } from '../../constants/DataContents';

const NavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [fix, setFix] = useState(false);
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const setFixed = () => {
    if (window.scrollY >= 5) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);

  return (
    <div className="wrap-navbar">
      <div className={fix ? "fixed" : ""}>
        <div className="logo">
          <img src={logo.logoImg} style={{ width: "40px" }} alt="" />
        </div>
        <div className="navbarMenu">
          <div className={menuOpen ? "open" : "topMenu"}>
            <div className="nav-menu">
              <ul className="nav-list">
                <li className="nav-list-item"><NavLink to="/" className={splitLocation[1] === "" ? "active" : ""}>INDIVIDUALS</NavLink></li>
                <li className="nav-list-item"><NavLink to="/business" activeclassname="active">BUSINESS</NavLink></li>
                <li className="nav-list-item"><NavLink to="/premium" activeclassname="active">PREMIUM</NavLink></li>
              </ul>
            </div>
            <div className="nav-menu kkk">
              <div className="icon-buttons">
                <div className="circle">
                  <i className="fa fa-search"></i>
                </div>
                <div className="three-circle">
                  <div className="circle-phone">
                    <span><i className="fa fa-phone"></i></span>
                    <span>24/7</span>
                  </div>
                  <div className="circle-question">
                    <span><i className="fa fa-question-circle"></i></span>
                    <span>FAQ</span>
                  </div>
                  <div className="circle-marker">
                    <span><i className="fa fa-map-marker"></i></span>
                    <span> Map</span>
                  </div>
                </div>
                <div className="circle-globe">
                  <span><i className="fa fa-globe"></i></span>
                  <span>lan</span>
                </div>
              </div>
            </div>
          </div>
          <div className={menuOpen ? "open" : "bottomMenu"}>
            <div className="nav-menu" >
              <ul className="ul">
                <li><NavLink activeclassname="active" to="/inecoIcon">
                  <img src={logo.logoImg} style={{ width: "40px" }} alt="" />
                </NavLink></li>
                <li><NavLink activeclassname="active" to="/accounts">Accounts</NavLink></li>
                <li><NavLink activeclassname="active" to="/savings">Savings</NavLink></li>
                <li><NavLink activeclassname="active" to="/loans">Loans</NavLink></li>
                <li><NavLink activeclassname="active" to="/cards">Cards</NavLink></li>
                <li><NavLink activeclassname="active" to="/mortgage">Mortgage</NavLink></li>
                <li><NavLink activeclassname="active" to="/digital">Digital Banking </NavLink></li>
                <li><NavLink activeclassname="active" to="/other">Other</NavLink></li>
              </ul>
            </div>
            <div className="nav-menu kkk">
              <div className="sign-signup">
                <div className="sign-in">
                  <span>
                    <NavLink to="/login">Sign In</NavLink>
                  </span>
                </div>
                <div className="sign-up">
                  <span>
                    <NavLink to="/reg">Sign up</NavLink>
                  </span>
                </div>
                <div className="wrap-review">
                  <div className="btn-review">
                    <span>WRITEA REVIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="burger-btn" onClick={() => { setMenuOpen(!menuOpen); }} >
          <i className="fa fa-bars"></i>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
