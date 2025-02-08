import Logo from '../assets/images/logo/logo.svg'
import FooterLogo from '../assets/images/logo/logo-icon-big.svg'
import { Link } from 'react-router-dom';

const SideBar = ()=>{
    return(
        <>
        <aside className="sidebar-nav-wrapper">
      <div className="navbar-logo">
        <a href="index.html">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <nav className="sidebar-nav">
      <ul  className=" dropdown-nav">
              <li>
                <Link to="/products"> Products </Link>
              </li>
              <li>
                <a href="blank-page.html"> Blank Page </a>
              </li>
            </ul>
      </nav>
      <div className="promo-box">
        <div className="promo-icon">
          <img className="mx-auto" src={FooterLogo} alt="Logo"/>
        </div>
        <h3>Upgrade to PRO</h3>
        <p>Improve your development process and start doing more with PlainAdmin PRO!</p>
        <a href="https://plainadmin.com/pro" target="_blank" rel="nofollow" className="main-btn primary-btn btn-hover">
          Upgrade to PRO
        </a>
      </div>
    </aside>
        </>
    )
}

export default SideBar;