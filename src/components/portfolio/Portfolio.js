import "./Portfolio.css";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { portfolioData } from "../../data/Data";
import a from "../../img/portfolio/Access.png";
import b from "../../img/portfolio/Pizza.png";
import c from "../../img/portfolio/Cocktail.png";
import d from "../../img/portfolio/Game-Puzzle.png";
import e from "../../img/portfolio/Game-Find-Tree.png";
import f from "../../img/portfolio/game-memory-card.png";
import g from "../../img/portfolio/game-15-puzzle.png";
import h from "../../img/portfolio/To-Do-List.png";
import j from "../../img/portfolio/calc.png";
import k from "../../img/portfolio/website1.png";
import l from "../../img/portfolio/website2.png";
import m from "../../img/portfolio/website3.png";
import n from "../../img/portfolio/website4.png";
import o from "../../img/portfolio/website5.png";
import p from "../../img/portfolio/website6.png";
import q from "../../img/portfolio/website7.png";

export default function Portfolio({ changeNavActiveLink }) {
    const { ref, inView } = useInView({ threshold: 0.1 });
    const [type, setType] = useState(null);

    const onChangeType = (x) => setType(x);

    useEffect(() => {
        if (inView) changeNavActiveLink("portfolio");
    }, [inView]);

    return (
        <section ref={ref} id="portfolio">
            <h2 className="portfolio__title">My Portfolio</h2>
            <div className="portfolio__filter container">
                <label onClick={() => onChangeType(null)}>
                    All
                    <input type="radio" name="x" defaultChecked={true} />
                </label>

                <label onClick={() => onChangeType("react")}>
                    React
                    <input type="radio" name="x" />
                </label>

                <label onClick={() => onChangeType("js")}>
                    JavaScript
                    <input type="radio" name="x" />
                </label>

                <label onClick={() => onChangeType("jQuery")}>
                    jQuery
                    <input type="radio" name="x" />
                </label>

                <label onClick={() => onChangeType("website")}>
                    Real projects
                    <input type="radio" name="x" />
                </label>
            </div>
            <div className="container">
                <div className="portfolio__content">
                    {portfolioData.data.map((item, i) => {
                        if (item.type === type) {
                            return (
                                <div key={i} className="portfolio-item">
                                    <img src={item.img} alt="idx" />
                                    <div className="portfolio-item__text">
                                        <h3 className="portfolio-item__title">{item.title}</h3>
                                        <div>
                                            <span>
                                                <a target="_blank" href={item.demo}>
                                                    Demo
                                                </a>
                                            </span>
                                            <span>
                                                <a target="_blank" href={item.github}>
                                                    GitHub
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else if (type === null) {
                            return (
                                <div key={i} className="portfolio-item">
                                    <img src={item.img} alt="idx" />
                                    <div className="portfolio-item__text">
                                        <h3 className="portfolio-item__title">{item.title}</h3>
                                        <div>
                                            <span>
                                                <a target="_blank" href={item.demo}>
                                                    Demo
                                                </a>
                                            </span>
                                            {item.github ? (
                                                <span>
                                                    <a target="_blank" href={item.github}>
                                                        GitHub
                                                    </a>
                                                </span>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}
