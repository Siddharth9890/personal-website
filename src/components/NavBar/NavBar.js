import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NavBar.css";


const Navbar = () => {

    const [active, setActive] = useState("");

    useEffect(() => {
        let currentUrl = window.location.href;
        if (currentUrl.endsWith("/"))
            setActive("About");
        else if (currentUrl.endsWith("/project"))
            setActive("Projects");
        else if (currentUrl.endsWith("/resume"))
            setActive("Resume");
    }, [active])

    const navbarVariant = {
        hidden: {
            y: '-30vh',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition:{
                delay:0.2,
                duration:0.6,
                type:'spring'
            }
        }
    }

    return (
        <motion.div className="navbar"
            variants={navbarVariant}
            initial='hidden'
            animate='visible'
        >
            <div className="navbar__active">
                {active}
            </div>
            <a href="https://siddharth9890.pages.dev/" className="navbar__message" target={"_blank"} rel="noreferrer">This website is deprecated and not being maintained.Click here to view the updated website</a>
            <div className="navbar__items">
                {active !== "About" && <Link to="/"> <div className="navbar__item" onClick={() => setActive("About")}>About</div></Link>
                }
                {active !== "Resume" && <Link to="/resume"> <div className="navbar__item" onClick={() => setActive("Resume")}>Resume</div></Link>
                }
                {active !== "Projects" && <Link to="/project"> <div className="navbar__item" onClick={() => setActive("Projects")}>Projects</div></Link>
                }
            </div>
        </motion.div>
    );
}

export default Navbar;