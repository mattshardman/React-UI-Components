import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => (
  <header>
    <ImageThumbnail />
    <HeaderTitle />
    <HeaderContent />
  </header>
);

export default HeaderContainer;
