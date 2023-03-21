import {
    AiOutlineArrowUp,
    AiOutlineExperiment,
    AiOutlineHome,
    AiOutlineMessage,
    AiOutlineUser,
} from "react-icons/ai";
import { RiComputerLine, RiServiceLine } from "react-icons/ri";
import { TbSchool } from "react-icons/tb";

import "./NavigationItem.css";

export default function NavigationItem({ href, i, onChangeActiveLink, index, navActiveLink }) {
    return (
        <a
            onClick={() => onChangeActiveLink(i)}
            className={
                navActiveLink === href
                    ? index === i
                        ? "navigation__link activeLink"
                        : "navigation__link noActiveLink" + " " + navActiveLink
                    : index === i
                    ? "navigation__link activeLink"
                    : "navigation__link noActiveLink"
            }
            href={"#" + href}>
            {href === "home" && <AiOutlineHome />}
            {href === "about" && <AiOutlineUser />}
            {href === "education" && <TbSchool />}
            {href === "experience" && <AiOutlineExperiment />}
            {href === "skills" && <RiServiceLine />}
            {href === "portfolio" && <RiComputerLine />}
            {href === "contact" && <AiOutlineMessage />}
        </a>
    );
}
