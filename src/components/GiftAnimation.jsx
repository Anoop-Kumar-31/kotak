import React from "react";
import css from "./GiftAnimation.module.css";
import redGift from "../images/redgift.png";
import goldenGift from "../images/goldengift.png";
import ramen from "../images/ramen.png";
import ticket from "../images/ticket.png";
import popcorn from "../images/popcorn.png";
import offer from "../images/offer.png";
import phone from "../images/phone.png";
import pizza from "../images/pizza.png";

const GiftAnimation = () => {
    return (
        <section className={css.giftAnimation}>
            <img src={offer} alt="offer" id="offer"/>
            <img src={redGift} alt="red gift" id="redGift"/>
            <img src={ramen} alt="ramen" id="ramen"/>
            <img src={goldenGift} alt="golden gift" id="goldenGift"/>
            <img src={popcorn} alt="popcorn" id="popcorn"/>
            <img src={phone} alt="phone" id="phone"/>
            <img src={pizza} alt="pizza" id="pizza"/>
            <img src={ticket} alt="ticket" id="ticket"/>
        </section>
    )
}
export default GiftAnimation;