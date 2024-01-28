import React from "react";

import "./Header.scss";
import logoIcon from "../../images/logoIcon.svg";
import logoText from "../../images/logoText.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__first-block">
          <a href="/" className="logo__link">
            <img className={"logoIcon"} src={logoIcon} alt="logoIcon" />
          </a>
          <a href="/" className="logo__text--link">
            <img
              className={"logoText logoText__left"}
              src={logoText}
              alt="logoText"
            />
          </a>
        </div>
        <nav className="menu__nav">
          <ul className="menu__nav--list list ul">
            <li className="menu__nav--item list">
              <a href="/" className="menu__nav--link link">
                Home
              </a>
            </li>
            <li className="menu__nav--item list">
              <a href="/" className="menu__nav--link link">
                About Us
              </a>
            </li>
            <li className="menu__nav--item list">
              <a href="" className="menu__nav--link link">
                How to use
              </a>
            </li>
          </ul>
        </nav>

        <div className="log__in">
          <ul className="log__in--list ul">
            <li className="log__in--item list">
              <a href="/" className="log__nav--link link">
                English
              </a>
            </li>
            <li className="log__in--item list">
              <a href="/" className="log__nav--link link">
                Sign in
              </a>
            </li>
            <li className="log__in--item  list">
              <a
                href="/"
                className="log__nav--link log__in--item-register  link"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
