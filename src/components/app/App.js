import { useState } from "react";

import About from "../about/About";
import Header from "../header/Header";
import Skills from "../skills/Skills";
import Sertificates from "../certificates/Certificates";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";

export default function App() {
    const [navActiveLink, setNavActiveLink] = useState(null);
    const changeNavActiveLink = (x) => setNavActiveLink(x);

    return (
        <>
            <Header navActiveLink={navActiveLink} changeNavActiveLink={changeNavActiveLink} />
            <main>
                <About changeNavActiveLink={changeNavActiveLink} />
                <Sertificates changeNavActiveLink={changeNavActiveLink} />
                <Experience changeNavActiveLink={changeNavActiveLink} />
                <Skills changeNavActiveLink={changeNavActiveLink} />
            </main>
            <footer>
                <Contact changeNavActiveLink={changeNavActiveLink} />
            </footer>
        </>
    );
}
