import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

const Header = () => {
  
  const user = useSelector((state) => state.auth);

  // console.log(user)

  return (
    <div className="header">
      <div className="header__left">
        <img
          style={{ height: "40px" }}
          src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.jpg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__icon header__icon--active">
          <HomeIcon fontSize='large' />
        </div>
        <div className="header__icon">
          <OndemandVideoIcon fontSize='large' />
        </div>
        <div className="header__icon">
          <FlagIcon fontSize='large' />
        </div>
        <div className="header__icon">
          <BusinessCenterIcon  fontSize='large'/>
        </div>
      </div>
      <div className="header__right">
        <Avatar src={ user.user.photo} />
        <h6 className='ml-2'>{user.user.name}</h6>
      </div>
    </div>
  );
};

export default Header;
