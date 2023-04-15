import { useEffect, useState } from "react";
import { navBarData } from "../../data/Data";
import NavigationItem from "../navigationItem/NavigationItem";
import "./Navigation.css";

export default function Navigation({ navActiveLink }) {
    const [index, setIndex] = useState(10);
    const onChangeActiveLink = (x) => setIndex(x);
    
    useEffect(() => setIndex(10), [navActiveLink]);
    return (
        <div className="navigation">
            {navBarData.data.map((item, i) => (
                <NavigationItem
                    index={index}
                    onChangeActiveLink={onChangeActiveLink}
                    key={i}
                    href={item.href}
                    i={i}
                    navActiveLink={navActiveLink}
                />
            ))}
        </div>
    );
}
