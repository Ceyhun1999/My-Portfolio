import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import photopea from "../../img/skillsLogo/photopea.svg";
import react from "../../img/skillsLogo/react.svg";
import html from "../../img/skillsLogo/html.svg";
import adobePhotoshop from "../../img/skillsLogo/adobe-photoshop.svg";
import bootstrap from "../../img/skillsLogo/bootstrap.svg";
import css from "../../img/skillsLogo/css.svg";
import figma from "../../img/skillsLogo/figma.svg";
import github from "../../img/skillsLogo/github.png";
import jquery from "../../img/skillsLogo/jquery.svg";
import redux from "../../img/skillsLogo/redux.svg";
import sass from "../../img/skillsLogo/sass.svg";
import bem from "../../img/skillsLogo/bem.svg";
import javaScript from "../../img/skillsLogo/js.svg";
import ts from "../../img/skillsLogo/ts.png";

import TagCloud from "TagCloud";
import "./Skills.css";

export default function Skills({ changeNavActiveLink }) {
    const isFirstRender = useRef(true);
    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView) changeNavActiveLink("skills");
    }, [inView]);

    useEffect(() => {
        if (!isFirstRender.current) return;
        isFirstRender.current = false;

        const container = ".tagcloud";
        const texts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
        const imgs = [
            `<img className="react" alt="react" src=${react}>`,
            `<img alt="html" src=${html}>`,
            `<img alt="adobe-photoshop" src=${adobePhotoshop}>`,
            `<img alt="bootstrap" src=${bootstrap}>`,
            `<img alt="css" src=${css}>`,
            `<img alt="figma" src=${figma}>`,
            `<img alt="github" src=${github}>`,
            `<img style="width: 80px;" alt="jquery" src=${jquery}>`,
            `<div class="logo"><span>Photopea</span><img alt="photopea" src=${photopea}></div>`,
            `<img alt="redux" src=${redux}>`,
            `<img alt="sass" src=${sass}>`,
            `<div class="logo"><span>BEM</span><img alt="bem" src=${bem}></div>`,
            `<img alt="javaScript" src=${javaScript}>`,
            `<img  alt="ts" src=${ts}>`,
        ];

        const options = {
            radius: 270,
            maxSpeed: "fast",
            initSpeed: "normal",
            keep: true,
        };

        TagCloud(container, texts, options);
        const spans = document.getElementsByClassName("tagcloud--item");
        const spansArr = Array.from(spans);
        spansArr.forEach((item, index) => (item.innerHTML = imgs[index]));
    }, []);

    return (
        <section ref={ref} id="skills">
            <div className="container">
                <div className="skills__content">
                    <h2 className="skills__title">Technical Skills</h2>
                    <span
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-easing="ease"
                        className="tagcloud"
                    ></span>
                </div>
            </div>
        </section>
    );
}
