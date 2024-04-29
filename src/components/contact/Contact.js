import { contactData } from "../../data/Data";
import "./Contact.css";

import { SiGmail} from "react-icons/si";
import { BsTelegram, BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { GoMarkGithub } from "react-icons/go";
import {AiFillTwitterCircle} from "react-icons/ai"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Contact({ changeNavActiveLink }) {
    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView) changeNavActiveLink("contact");
    }, [inView]);

    return (
        <section ref={ref} id="contact">
            <div className="container">
                <div className="contact__inner">
                    <h2 className="contact__title">Contact me</h2>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-easing="ease"
                        className="contact__inner-item1">
                        {contactData.data[0].data1.map((item, idx) => {
                            return (
                                <div key={idx} className="contact__item contact__gmail">
                                    <a target="_blank" href={item.href}>
                                        {item.title === "Gmail" ? <SiGmail /> : ""}
                                        {item.title === "Telegram" ? <BsTelegram /> : ""}
                                        {item.title === "Linked In" ? <BsLinkedin /> : ""}
                                        <h4>{item.title}</h4>
                                        <h5>{item.text}</h5>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-easing="ease"
                        className="contact__inner-item2">
                        {contactData.data[1].data2.map((item, idx) => {
                            return (
                                <div key={idx} className="contact__item contact__gmail">
                                    <a target="_blank" href={item.href}>
                                        {item.title === "WhatsApp" ? <IoLogoWhatsapp /> : ""}
                                        {item.title === "GitHub" ? <GoMarkGithub /> : ""}
                                        {item.title === "Twitter" ? <AiFillTwitterCircle /> : ""}
                                        <h4>{item.title}</h4>
                                        <h5>{item.text}</h5>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
