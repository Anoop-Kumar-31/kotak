import React from "react";
import image from "../images/Logo.png";
import css from "./Header.module.css";
const Header = () => {
    return (
        <div className={css.header}>
            <img src={image} alt="Kotak" />
            <button>Open now</button>
        </div>
    )
}
export default Header;