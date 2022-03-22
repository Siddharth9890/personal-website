import React from "react";
import github from "../../assets/icons/github.svg";
import location from "../../assets/icons/location.svg";
import leetcode from "../../assets/icons/leetcode.svg";
import { motion } from "framer-motion";
import "./SideBar.css";

const Sidebar = () => {




    const sidebarVariant = {
        hidden: {
            x: "-20vw"
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.2,
                duration: 0.6,
                type: 'spring'
            }
        }
    }

    // <==================SIDEBAR==============>
    return (
        <motion.div className="sidebar"
            variants={sidebarVariant}
            initial="hidden"
            animate="visible"
        >
            {/* <==================NAME==============> */}
            <div className="sidebar__name">
                Siddharth <span>Singh</span>
            </div>
            {/* <==================TITLE==============> */}
            <div className="sidebar__item sidebar__title">Web developer</div>
            
            {/* <==================SOCIAL ICONS==============> */}
            <div className="sidebar__social-icon my-2">
                <a href="https://github.com/Siddharth9890" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github" className="sidebar__icon mr-3" />
                </a>
                <a href="https://leetcode.com/siddharth9890/" target="_blank" rel="noopener noreferrer">
                    <img src={leetcode} alt="leetcode" className="sidebar__icon" />
                </a>
            </div>
            {/* <==================CONTACT==============> */}
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/Siddharth9890" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github" className="sidebar__icon mr-3" />Github
                    </a>
                </div>
                <div className="sidebar__location"><img src={location} alt="location" className="sidebar__icon" /> Pune,India</div>
                <div className="sidebar__item">siddharth.a9890@gmail.com</div>
            </div>
            
        </motion.div>
    );
};

export default Sidebar;
