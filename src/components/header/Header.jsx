import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
        if (window.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    return (
        <header className="header">
            <nav className="nav container">
                <a href="/#" className="nav__logo">
                    <img className="logo" src={logo} alt="logo"/>
                </a>
                <div className={Toggle?"nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="/#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-home nav__icon"/> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"/> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"/> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"/> Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"/> Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}/>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil-apps"/>
                </div>
            </nav>
        </header>
    );
};

export default Header;