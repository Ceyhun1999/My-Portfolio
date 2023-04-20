import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Experience.css";

export default function Experience({ changeNavActiveLink }) {
    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView) changeNavActiveLink("experience");
    }, [inView]);

    return (
        <section ref={ref} id="experience">
            <h2 className="experience__title">My Experience</h2>
            <div className="container">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1400"
                    data-aos-easing="ease"
                    className="experience__content">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1400"
                        data-aos-easing="ease"
                        className="experience__content-item2">
                        <h3 className="experience-profession">Frontend Developer Intern</h3>
                        <h4 className="experience-company">OkMedia</h4>
                        <p>- Collaborate with cross-functional teams to develop frontend solutions.</p>
                        <p>
                            - Write clean, efficient, and maintainable code using HTML, CSS, and JavaScript.
                        </p>
                        <p>- Conduct testing and debugging of frontend code.</p>
                        <p>- Stay updated with industry best practices and emerging technologies.</p>
                        <p>- Assist with code reviews and provide constructive feedback.</p>
                        <p>- Participate in team meetings and agile development processes.</p>
                        <div className="experience__dataPlace">
                            <span>01.04.2023</span>
                            <span>Baku</span>
                        </div>
                    </div>
                    <div className="experience__content-item1">
                        <h3 className="experience-profession">Mentor</h3>
                        <h4 className="experience-company">Div Academy</h4>
                        <p>- Designing tasks on topics covered</p>
                        <p>- Explanation and analysis of complex tasks</p>
                        <div className="experience__dataPlace">
                            <span>28.02.2023</span>
                            <span>Baku</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
