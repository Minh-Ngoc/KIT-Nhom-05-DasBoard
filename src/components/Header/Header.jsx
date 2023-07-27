import { styled } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import cartImg from "assets/images/header/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './Header.scss';
import { Menu, CloseIcon, SearchIcon, Cart } from "components/ImageList";

import Badge from '@mui/material/Badge';

const HeaderStyled = styled.div`
  width: 100%;
  height: 115px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    display: none;
  }
  .logo {
    width: 138px;
    height: 48.457px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    color: #fff;
    border: 3px solid #fff;
  }
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    .nav-item {
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      text-decoration: none;
      padding-left: 30px;
      box-sizing: border-box;
      align-items: center;
    }
    .active {
      text-decoration: underline;
      text-decoration-color: #eb5757;
      text-underline-offset: 4px;
      text-decoration-thickness: 2px;
    }
    .contact {
      img {
        padding-right: 8px;
        width: 16px;
        height: 16px;
      }
    }
    .heart {
      width: 17px;
      height: 15px;
    }
    .shop {
      display: flex;
      align-items: center;
    }
    .cart {
      width: 18px;
      height: 20px;
      padding-right: 8px;
    }
    .cart-info {
      display: flex;
      flex-direction: column;
    }
    .cart-item {
      font-size: 12px;
      text-transform: none;
    }
    .cart-price {
      font-size: 14px;
    }
  }
`;

const USDDollar = (total) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "code",
  }).format(total);
};

export const Header = () => {

  const cart = useSelector((state) => state.cart);
  const [menuList, setMenuList] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch cart data only on the first render
    dispatch.cart.fetchCart();
  }, [dispatch.cart]);

  const handleRedirect = () => setMenuList(false);

  return (
    <>
      <HeaderStyled>
        <div className="logo">lisa</div>
        <div className="navbar">
          <NavLink
            to="/"
            className="nav-item"
            exact="true"
            activeclassname="active"
          >
            home
          </NavLink>
          <NavLink to="/shop" className="nav-item" activeclassname="active">
            shop
          </NavLink>
          <NavLink to="/blog" className="nav-item" activeclassname="active">
            blog
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-item contact"
            activeclassname="active"
          >
            {/* <img src={search} alt="search icon" /> */}
            contact us
          </NavLink>
        </div>
        <div className="navbar">
          <NavLink to="/login" className="nav-item">
            sign in
          </NavLink>
          <NavLink to="/accounts/new" className="nav-item">
            create an account
          </NavLink>
          {/* <NavLink to="/favourite" className="nav-item">
            <img className="heart" src={heart} alt="heart icon" />
          </NavLink> */}

          <Link to="/cart" className="nav-item shop">
            { cart.products?.length > 0 ? (
              <Badge 
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }} 
                badgeContent={cart.products.length} 
                color="error"
              >
                <img className="cart" src={cartImg} alt="cart icon" />
              </Badge>
            ) : ( <img className="cart" src={cartImg} alt="cart icon" /> ) }
            <div className="cart-info">
            <span className="cart-item">Shopping Cart</span>
              <span className="cart-price"> {cart && USDDollar(cart.totalPrice)} </span>
            </div>
          </Link>
        </div>
      </HeaderStyled>
      <div className="responsive__header">
        <div className="header__container">
          <div className="header__menu" onClick={() => setMenuList(!menuList)}>
            { menuList ? <CloseIcon />  : <Menu /> } 
          </div>
          <div className={`header__menu-list${menuList ? " visible" : ""}`}>
            <div className="menu-list__container">
              <NavLink 
              onClick={handleRedirect}
                to="/"
                className="nav-item"
                exact="true"
                activeclassname="active"
              >
                home
              </NavLink>
              <NavLink onClick={handleRedirect} to="/shop" className="nav-item" activeclassname="active">
                shop
              </NavLink>
              <NavLink onClick={handleRedirect} to="/blog" className="nav-item" activeclassname="active">
                blog
              </NavLink>
              <NavLink 
                onClick={handleRedirect}
                to="/contact"
                className="nav-item contact"
                activeclassname="active"
              >
                {/* <img src={search} alt="search icon" /> */}
                contact us
              </NavLink>
            </div>
          </div>
          <div className="header__logo">LISA</div>
          <div className="header__group">
            <SearchIcon />
            <Link to="/cart" className="nav-item shop">
              { cart.products?.length > 0 ? (
                <Badge 
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }} 
                  badgeContent={cart.products.length} 
                  color="error"
                >
                  <Cart/>
                </Badge>
              ) : ( <Cart/> ) }
            </Link>
          </div>
        </div>
        <div className={`header__overlay${menuList ? " opacity" : ""}`}></div>
      </div>
    </>
  );
};
