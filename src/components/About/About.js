import React from "react";
import SkillCard from "./SkillCard";
import {motion} from "framer-motion";
import skills from "../data/about-data";
import "./About.css";


const aboutVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.6,
        }
    },
    exit:{
        opacity:0,
        transition:{
            ease:"easeInOut"
        }
    }
}

const About = () => {
    return (
        <motion.div className="about"
            variants={aboutVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h6 className="about__intro">Pursuing Graduation in Computer Science & interested in Full-Stack Software Development, AI .I build things for the web.</h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <SkillCard skill={skill} />
                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;