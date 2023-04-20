import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Navigation from "../navigation/Navigation";
import BtnKaiAnimation from "../buttons/Buttons";
import "./Header.css";
import "animate.css";

export default function Header({ navActiveLink, changeNavActiveLink }) {
    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView) changeNavActiveLink("home");
    }, [inView]);

    return (
        <header ref={ref} id="home">
            <div className="container">
                <div
                    data-aos="fade-up"
                    data-aos-duration="400"
                    data-aos-easing="ease"
                    className="header__content">
                    <div className="header__contentText">
                        <span>Hello</span>
                        <h1>I'm Jeyhun</h1>
                        <p>FrontEnd Developer</p>
                    </div>
                    <div className="header__img"></div>
                    <div className="header__buttons">
                        <BtnKaiAnimation>
                            <a
                                className="btn-cv"
                                href="./assets/Jeyhun Rzayev CV.pdf"
                                download="CV Jeyhun Rzayev.pdf">
                                Download CV
                            </a>
                        </BtnKaiAnimation>
                        <BtnKaiAnimation>
                            <a className="btn-contact" href="#contact">
                                Contact Me
                            </a>
                        </BtnKaiAnimation>
                    </div>
                </div>
            </div>
            <Navigation navActiveLink={navActiveLink} />
        </header>
    );
}
