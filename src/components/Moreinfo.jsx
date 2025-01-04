import React from "react";
import css from "./Moreinfo.module.css";
import img1 from "../images/ezdinner.png";
import img2 from "../images/bookmyshow.png";
import img3 from "../images/Swiggy.png";
import img4 from "../images/zepto.png";
import img5 from "../images/blinkit.png";
import img6 from "../images/coupon1.png";
import img7 from "../images/coupon2.png";
import img8 from "../images/treat.png";


const cardinfo = [
    {
        img: img1,
        head: "30% off on restaurant bills",
        text: "Up to ₹1,000 per transaction. No minimum bill value. Offer available 4 times a month on your debit card."
    },
    {
        img: img2,
        head: "20% off on tickets",
        text: "Up to ₹100 per transaction. No minimum bill value. Offer available 2 times a month on your debit card."
    },
    {
        img: img3,
        head: "15% off on grocery delivery",
        text: "Up to ₹250 per transaction. ₹749 minimum bill value. Offer available 2 times a month on your debit card."
    },
    {
        img: img4,
        head: "15% off on grocery delivery",
        text: "Up to ₹250 per transaction. ₹749 minimum bill value. Offer available 2 times a month on your debit card."
    },
    {
        img: img5,
        head: "15% off on grocery delivery",
        text: "Up to ₹250 per transaction. ₹999 minimum bill value. Offer available 2 times a month on your debit card."
    },
    {
        img: img6,
        head: "₹150 voucher on 50 transactions",
        text: "Complete 50 transactions to earn a voucher worth ₹150, giving you extra rewards for your transactions."
    },
    {
        img: img7,
        head: "₹250 voucher on 100 transactions",
        text: "Complete 100 transactions to earn a voucher worth ₹250, giving you extra rewards for your transactions."
    },
    {
        img: img8,
        head: "₹250 voucher on birthday & anniversary",
        text: "Celebrate with gift vouchers worth ₹250 on your birthday and anniversary with the bank."
    }
];


const Moreinfo = () => {

    return (
        <main className={css.moreinfo}>
            <section className={css.toptext}>
                <h1>Exclusive offers on your Everyday Savings</h1>
                <p>Pay using your Everyday debit card to earn exclusive discounts on below partners. Save up to ₹5,700 every month.</p>
            </section>
            <section className={css.offers}>
                {cardinfo.map((card, index) => {
                    return (
                        <div className={css.offer} key={index}>
                            <div className={css.img}>
                                <img src={card.img} alt= {`offer`+index} />
                            </div>
                            <aside>
                                <h2>{card.head}</h2>
                                <p>{card.text}</p>
                            </aside>
                        </div>
                    )
                })}
            </section>
        </main>
    )
}

export default Moreinfo;