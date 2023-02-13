import { useEffect } from "react";
import TagCloud from "TagCloud";
import "./Skills.css";

export default function Skills() {
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
            const imgs = [
                `<img alt="react" src="./assets/img/skillsLogo/react.svg">`,
                `<img alt="html" src="./assets/img/skillsLogo/html.svg">`,
                `<img alt="adobe-photoshop" src="./assets/img/skillsLogo/adobe-photoshop.svg">`,
                `<img alt="bootstrap" src="./assets/img/skillsLogo/bootstrap.svg">`,
                `<img alt="css" src="./assets/img/skillsLogo/css.svg">`,
                `<img alt="figma" src="./assets/img/skillsLogo/figma.svg">`,
                `<img alt="github" src="./assets/img/skillsLogo/github.png">`,
                `<img style="width: 80px;" alt="jquery" src="./assets/img/skillsLogo/jquery.svg">`,
                `<div class="logo"><span>Photopea</span><img alt="photopea" src="./assets/img/skillsLogo/photopea.svg"></div>`,
                `<img alt="redux" src="./assets/img/skillsLogo/redux.svg">`,
                `<img alt="sass" src="./assets/img/skillsLogo/sass.svg">`,
                `<div class="logo"><span>BEM</span><img alt="bem" src="./assets/img/skillsLogo/bem.svg"></div>`,
                `<img alt="javaScript" src="./assets/img/skillsLogo/js.svg">`,
            ];

            let radius = 270;

            let body = document.querySelector("body");

            if (body.offsetWidth < 530) {
                radius = 150;
            }

            const options = {
                radius: radius,
                maxSpeed: "fast",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(container, texts, options);
            const spans = document.getElementsByClassName("tagcloud--item");
            const spansArr = Array.from(spans);
            spansArr.forEach((item, index) => (item.innerHTML = imgs[index]));
        };
    }, []);

    return (
        <section className="skills">
            <h2 className="skills__title">TECHNICAL SKILLS</h2>
            <div className="skills__content">
                <span className="tagcloud"></span>
            </div>
        </section>
    );
}
