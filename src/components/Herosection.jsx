import React from "react";
import css from "./Herosection.module.css";
import GiftAnimation from "./GiftAnimation";
import image from "../images/card.png";
import NumberAnimation from "./NumberAnimation";
const Herosection = () => {
    return (
        <main className={css.herosection}>
            <div className={css.topmiddle}>
                <GiftAnimation/>
                <div className={css.herotext}>
                    <h1 className={css.h1}>Get monthly discount deals of up to ₹5,700</h1>
                    <div className={css.divLine}>&nbsp;</div>
                    <p className={css.p}>Enjoy exclusive offers and discounts on popular brands like Zepto, Blinkit, Swiggy Instamart, BookMyShow, and EazyDiner.</p>
                </div>
            </div>
            <div className={css.bottomleft}>
                <div className={css.herotext}>
                    <h1 className={css.h1}>Pay using your Everyday debit card</h1>
                    <div className={css.divLine}>&nbsp;</div>
                    <p className={css.p}>Say goodbye to annual maintenance fees with your Everyday Debit Card. Enjoy amazing discounts on your favourite brands.</p>
                </div>
                <section className={css.section}>
                    <img src={image} alt="" />
                </section>
            </div>
            <div className={css.bottomright}>
                <div className={css.herotext}>
                    <h1 className={css.h1}>Earn up to 7%* interest p.a. with ActivMoney</h1>
                    <div className={css.divLine}>&nbsp;</div>
                    <p className={css.p}>Enjoy FD-like interest in your Savings Account with the ActivMoney facility. Access your money anytime with no penalty.</p>
                </div>
                <NumberAnimation/>
            </div>
        </main>
    )
}
export default Herosection;