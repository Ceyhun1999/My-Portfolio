import { useState } from "react";

import About from "../about/About";
import Header from "../header/Header";
import Skills from "../skills/Skills";
import Sertificates from "../certificates/Certificates";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import Portfolio from "../portfolio/Portfolio";

export default function App() {
    const [navActiveLink, setNavActiveLink] = useState(null);
    const changeNavActiveLink = (x) => setNavActiveLink(x);

    return (
        <>
            <Header navActiveLink={navActiveLink} changeNavActiveLink={changeNavActiveLink} />
            <main>
                <Portfolio changeNavActiveLink={changeNavActiveLink} />
                <Skills changeNavActiveLink={changeNavActiveLink} />
                <About changeNavActiveLink={changeNavActiveLink} />
                <Sertificates changeNavActiveLink={changeNavActiveLink} />
                {/* <Experience changeNavActiveLink={changeNavActiveLink} />*/}
            </main>
            <footer>
                <Contact changeNavActiveLink={changeNavActiveLink} />
            </footer>
        </>
    );
}
