import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => (
  <header className="header-container">
    <ImageThumbnail />
    <div className="content">
        <HeaderTitle />
        <HeaderContent />
    </div>
  </header>
);

export default HeaderContainer;
