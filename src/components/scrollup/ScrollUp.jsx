import React from 'react';
import "./scrollup.css";
const ScrollUp = () => {

    window.addEventListener("scroll", () => {
        const scrollUp = document.querySelector(".scrollup");
        if (window.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });

    return (
        <div className="scrollup" onClick={() => window.scrollTo(0, 0)}>
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </div>
    )
}

export default ScrollUp;