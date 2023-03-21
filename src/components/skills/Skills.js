import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import TagCloud from "TagCloud";
import "./Skills.css";

export default function Skills({changeNavActiveLink}) {
    const [state, setState] = useState(null);
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) changeNavActiveLink("skills");
    }, [inView]);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (document.documentElement.clientWidth < 560) setState(true);
            else if (document.documentElement.clientWidth > 560) setState(false);
        });

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

            if (document.documentElement.clientWidth < 560) {
                let first = document.querySelector(".tagcloud > .tagcloud");
                first?.remove();
                radius = 160;
            } else if (document.documentElement.clientWidth > 560) {
                let first = document.querySelector(".tagcloud > .tagcloud");
                first?.remove();
                radius = 270;
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
    }, [state]);

    return (
        <section
            ref={ref}
            id="skills"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease">
            <div className="container">
                <h2 className="skills__title">Technical Skills</h2>
                <div className="skills__content">
                    <span className="tagcloud"></span>
                </div>
            </div>
        </section>
    );
}
