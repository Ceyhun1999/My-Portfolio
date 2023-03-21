import { useState } from "react";

import About from "../about/About";
import Header from "../header/Header";
import Skills from "../skills/Skills";
import Sertificates from "../certificates/Certificates";


export default function App() {
    const [navActiveLink, setNavActiveLink] = useState(null);
    const changeNavActiveLink = (x) => setNavActiveLink(x);

    return (
        <>
            <Header navActiveLink={navActiveLink} changeNavActiveLink={changeNavActiveLink} />
            <main>
                <About changeNavActiveLink={changeNavActiveLink} />
                <Sertificates changeNavActiveLink={changeNavActiveLink} />
                <Skills changeNavActiveLink={changeNavActiveLink} />
            </main>
            <div className="hello"></div>
        </>
    );
}
