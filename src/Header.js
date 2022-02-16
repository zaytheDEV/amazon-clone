import "./Header.css";
import logo from "./amazon-logo-white-png-transparent-3.png";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="header_mainContainer">
        <Link to="/">
          <div className="header_logo">
          <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="header_option">
          <span className="header__optionLineOne">Hello</span>
          <div className="header_addressHolder">
            <div className="header_locationIconHolder">
              <LocationOnOutlinedIcon style={{ fontSize: 20 }} />
            </div>
            <span className="header__optionLineTwo">select your address</span>
          </div>
        </div>
        <div className="header_search">
          <input className="header_searchInput" type="text" />
          <div className="header_searchIconHolder">
            <SearchIcon className="header_searchIcon" />
          </div>
        </div>
        <div className="header_nav">
          <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
            <div className="header_option" onClick={handleAuthentication}>
              <span className="header__optionLineOne">
                Hello, {user ? "Sign Out" : "Sign In"}
              </span>
              <span className="header__optionLineTwo">accounts and lists</span>
            </div>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <div className="header_option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& orders</span>
            </div>
          </Link>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <div className="header_optionBasket">
              <ShoppingCartRoundedIcon style={{ fontSize: 30 }} />
              <div className="header_basketInfoHolder">
                <span className="header__optionLineTwo header__basketCount">
                  {basket?.length}
                </span>
                <span className="header_basketTitle header__optionLineTwo">
                  cart
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="header_lowerNav">
        <ul>
          <li>best sellers</li>
          <li>customer service</li>
          <li>prime</li>
          <li>new releases</li>
          <li>pharmacy</li>
          <li>books</li>
          <li>fashion</li>
          <li>toys & games</li>
          <li>kindle books</li>
          <li>gift cards</li>
          <li>amazon home</li>
          <li>registry</li>
          <li>sell</li>
          <li>computers</li>
          <li>video games</li>
          <li>automotive</li>
          <li>coupons</li>
        </ul>
        <span>shop low prices for school</span>
      </div>
    </div>
  );
}

export default Header;
