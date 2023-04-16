import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./About.css";

export default function About({ changeNavActiveLink }) {
    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView) changeNavActiveLink("about");
    }, [inView]);

    return (
        <section ref={ref} id="about">
            <div className="container">
                <h2 className="about__title">About me</h2>
                <div className="about__content">
                    <div className="about__img"></div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease" className="desc">
                        <p>
                            I have been programming for a year. My main expertise is web development, and I am
                            proficient in technologies such as HTML, CSS, JavaScript, jQuery, React, and
                            Bootstrap, as well as other tools and frameworks.
                        </p>
                        <br />
                        <p>
                            I also have a good command of the Russian language and actively study English, as
                            I aim to expand my opportunities in the international IT industry.
                        </p>
                        <br />
                        <p>
                            Currently, I am focusing on developing in the direction of React and React Native
                            - modern frameworks for building user interfaces and mobile applications. I am
                            passionate about creating interactive and intuitive user interfaces that provide a
                            satisfying user experience.
                        </p>
                        <br />
                        <p>
                            In the future, I aspire not only to create websites but also to develop mobile
                            applications. I strive to constantly improve my skills and learn new technologies
                            to stay up-to-date and achieve my professional goals.
                        </p>
                        <br />
                        <p>
                            I am dedicated to continuous self-improvement, approach problem-solving
                            creatively, and am always ready to embrace new challenges in the IT industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
