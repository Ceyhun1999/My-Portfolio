import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./About.css";

export default function About({ changeNavActiveLink }) {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) changeNavActiveLink("about");
    }, [inView]);

    return (
        <section ref={ref} id="about">
            <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
                <h2 className="about__title">About me</h2>
                <div className="about__content">
                    <div className="about__img"></div>
                    <div className="desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem minus
                            accusamus explicabo dolor cum aspernatur itaque quibusdam distinctio qui
                            architecto, veritatis facilis quasi iusto! Nesciunt, laborum et. Laudantium ullam,
                            incidunt neque alias aliquid rem maxime facilis sed perspiciatis ipsam labore,
                            nulla repellendus non esse explicabo pariatur. Labore corporis obcaecati
                            cupiditate!
                        </p>
                        <br />
                        <br />
                        <p>
                            Impedit, eos. Illo sunt dicta et odio temporibus sed. Animi quis ut consectetur
                            hic nemo. Consectetur quisquam sit veniam aliquid iusto doloribus? Atque porro
                            illum ut accusamus explicabo dolor cum aspernatur itaque quibusdam distinctio qui
                            architecto, veritatis facilis quasi iusto! Nesciunt, laborum et. Laudantium ullam,
                            incidunt neque alias aliquid rem maxime facilis sed perspiciatis ipsam labore,
                            nulla repellendus non esse explicabo pariatur. Labore corporis obcaecati
                            cupiditate!
                        </p>
                        <br />
                        <br />
                        <p>
                            Impedit, eos. Illo sunt dicta et odio temporibus sed. Animi quis ut consectetur
                            hic nemo. Consectetur quisquam sit veniam aliquid iusto doloribus? Atque porro
                            illum ut accusamus explicabo dolor cum aspernatur itaque quibusdam distinctio qui
                            architecto, veritatis facilis quasi iusto! Nesciunt, laborum et. Laudantium ullam,
                            incidunt neque alias aliquid rem maxime facilis sed perspiciatis ipsam labore,
                            nulla repellendus non esse explicabo pariatur. Labore corporis obcaecati
                            cupiditate!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
