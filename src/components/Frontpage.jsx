import React from "react";
import Header from "./Header";
import css from "./Frontpage.module.css";
import Herosection from "./Herosection";
import Moreinfo from "./Moreinfo";
const Frontpage = () => {
    return (
        <main className={css.frontpage}>
            <Header/>
            <Herosection/>
            <Moreinfo/>
        </main>
    )
}
export default Frontpage;