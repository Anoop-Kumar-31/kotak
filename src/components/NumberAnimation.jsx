import React from "react";
import css from "./NumberAnimation.module.css";
// import css from "./GiftAnimation.module.css";
import pic1 from "../images/1.png";

const NumberAnimation = () => {
    return (
        <section className={css.numberAnimation}>
            <aside>
                <img src={pic1} alt="1" id="1"/>
                <img src={pic1} alt="2" id="2"/>
                <img src={pic1} alt="3" id="3"/>
                <img src={pic1} alt="4" id="4"/>
                <img src={pic1} alt="5" id="5"/>
                <img src={pic1} alt="6" id="6"/>
                <img src={pic1} alt="7" id="7"/>
            </aside>
        </section>
    )
}
export default NumberAnimation;