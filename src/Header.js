import React from "react";
import "./Header.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { black } from "@mui/material/colors";
import ColorTabs from "./BasicTabs";
import BasicTabs from "./BasicTabs";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {},
}));

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i.pinimg.com/564x/d6/61/9f/d6619ff5fe907f827b488f9e4deea313.jpg"
        />
      </Link>
      <div className="options">
        <BasicTabs />
      </div>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/loginpage">
          <div className="header_option">
            <PermIdentityOutlinedIcon className="header_profile" />
            <span className="header_optionlineone"></span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={basket?.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
