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
                            I have been in the field of programming for more than 2 years. From the moment I started in
                            this field, I constantly worked on myself, constantly developed my knowledge and skills and
                            applied them in practice.
                        </p>
                        <br />
                        <p>
                            Based on my advantages noted in the DIV Academy center, which is the course where I started
                            programming, I received a mentorship offer and, evaluating this offer, I continued my
                            mentoring activity in the practical lessons of the course for a period of about 1 year.
                        </p>
                        <br />
                        <p>
                            In parallel, I worked on several freelance projects and successfully delivered them all.
                            After completing my mentoring activity with a lot of practical and theoretical knowledge, I
                            worked as a Frontend Instructor in the course created as a result of my activity.
                        </p>
                        <br />
                        <p>
                            I continued my career at Okmedia MMC. Currently, I work as a Junior Frontend Developer at
                            Okmedia.
                        </p>
                        <br />
                        <p>
                            I have more than 15 real projects. At the same time, I worked as a frontend developer in a
                            startup under Sahab.hub
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
