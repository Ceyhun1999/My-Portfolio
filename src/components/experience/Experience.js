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
                    data-aos-duration="400"
                    data-aos-easing="ease"
                    className="experience__content">
                    <div className="experience__content-item1">
                        <h3 className="experience-profession">Mentor</h3>
                        <h4 className="experience-company">Div Academy</h4>
                        <p>Designing tasks on topics covered</p>
                        <p>Explanation and analysis of complex tasks</p>
                        <p>Explanation and analysis of complex tasks</p>
                        <div className="experience__dataPlace">
                            <span>24234 -23-423</span>
                            <span>Baku</span>
                        </div>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-easing="ease"
                        className="experience__content-item2">
                        <h3 className="experience-profession">Mentor</h3>
                        <h4 className="experience-company">Div Academy</h4>
                        <p>Designing tasks on topics covered</p>
                        <p>Explanation and analysis of complex tasks</p>
                        <p>Explanation and analysis of complex tasks</p>
                        <div className="experience__dataPlace">
                            <span>24234 -23-423</span>
                            <span>Baku</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
