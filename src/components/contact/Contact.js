import "./Contact.css";

import { SiGmail, SiWhatsapp } from "react-icons/si";
import { BsTelegram, BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { GoMarkGithub } from "react-icons/go";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Contact() {
    return (
        <div id="contact">
            <div className="container">
                <div className="contact__inner">
                    <h2 className="contact__title">Contact me</h2>
                    <div className="contact__inner-item1">
                        <div className="contact__item contact__gmail">
                            <a target="_blank" href="mailto:ceyhun.rzayeev@gmail.com">
                                <SiGmail />
                                <h4>Gmail</h4>
                                <h5>ceyhun.rzayeev@gmail.com</h5>
                            </a>
                        </div>
                        <div className="contact__item contact__telegram">
                            <a target="_blank" href="https://t.me/Jeyhun_Rzayev">
                                <BsTelegram />
                                <h4>Telegram</h4>
                                <h5>@Jeyhun_Rzayev</h5>
                            </a>
                        </div>
                        <div className="contact__item contact__linkedin">
                            <a target="_blank" href="https://www.linkedin.com/in/ceyhun-rzayev/">
                                <BsLinkedin />
                                <h4>Linked In</h4>
                                <h5>@Jeyhun-Rzayev</h5>
                            </a>
                        </div>
                    </div>
                    <div className="contact__inner-item2">
                        <div className="contact__item contact__whatsapp">
                            <a target="_blank" href="https://wa.me/944519993348">
                                <IoLogoWhatsapp />
                                <h4>WhatsApp</h4>
                                <h5>+994 (51) 999 33 48</h5>
                            </a>
                        </div>
                        <div className="contact__item contact__github">
                            <a target="_blank" href="https://github.com/Ceyhun1999">
                                <GoMarkGithub />
                                <h4>GitHub</h4>
                                <h5>Ceyhun1999</h5>
                            </a>
                        </div>
                        <div className="contact__item contact__github">
                            <a href="">
                                <GoMarkGithub />
                                <h4>GitHub</h4>
                                <h5>Ceyhun1999</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
