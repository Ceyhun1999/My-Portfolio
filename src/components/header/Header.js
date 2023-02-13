import BtnKaiAnimation from "../buttons/Buttons";
import   "./Header.css";


export default function Header() {
    return (
        <header>
          <div className="container">
                <div className="header__content">
                    <div className="header__contentText">
                        <span>Hello</span>
                        <h1>I'm Jeyhun</h1>
                        <p>FrontEnd Developer</p>
                    </div>
                    <div className="header__img"></div>
                    <div className="header__buttons">
                        <BtnKaiAnimation>
                            <a href="./assets/Jeyhun Rzayev CV.pdf" download="CV Jeyhun Rzayev.pdf">
                                Download CV
                            </a>
                        </BtnKaiAnimation>
                        <BtnKaiAnimation>Contact Me</BtnKaiAnimation>
                    </div>
                </div>
            </div>
        </header>
    );
}
