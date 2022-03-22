import React from "react";
import Bar from "./Bar.js";
import { motion } from "framer-motion";
import {tools,languages} from "../data/resume-data";
import "./Resume.css";

const resumeVariant = {
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
    exit: {
        opacity: 0,
        transition: {
            ease: "easeInOut"
        }
    }
}

const Resume = () => {
    return (
        <motion.div className="container resume"
            variants={resumeVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        Bachelors of Computer Science (2019-Present)
                        </h5>
                        <p className="resume-card__name">
                        Pune University (Nowrosjee Wadia College) 
                        </p>
                        <p className="resume-card__details">I am currently pursing Bachelors in Computer Science from Nowrosjee Wadia College. CGPA(till 2 sem):9.4</p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        12th -Science (2017 - 2019)
                        </h5>
                        <p className="resume-card__name">
                        Nowrosjee Wadia College 
                        </p>
                        <p className="resume-card__details"> Completed 12th class exams with a score: 79.4 %.</p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        10th - Boards(2017)
                        </h5>
                        <p className="resume-card__name">
                        J.N.Petit Technical High School 
                        </p>
                        <p className="resume-card__details">Completed 10th class exams with a score: 79.5 %. <br></br> Perused Technical Education along with regular board exams and scored 80 % in Technical section.</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Freelancer
                        </h5>
                        <p className="resume-card__name">
                            
                        </p>
                        <p className="resume-card__details">I’m  currently looking for any new opportunities, my inbox is always open.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language => <Bar value={language} />)
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default Resume;