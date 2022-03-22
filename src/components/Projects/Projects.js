import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {

    // const [projects, setProjects] = useState(projectsData);
    // const [active, setActive] = useState("All")


    // const handleFilterCategory = (name) => {
    //     const newArray = projectsData.filter(project => project.category.includes(name));
    //     setProjects(newArray);
    //     setActive(name);
    // }

    const projectVariant = {
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

    return (
        <motion.div className="container project"
            variants={projectVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* <div className="projects__navbar">
                <div className={active === "All" && "projects__navbar-active"} onClick={() => { setProjects(projectsData); setActive("All"); }}>All</div>
                <div className={active === "react.js" && "projects__navbar-active"} onClick={() => handleFilterCategory("react.js")}>React</div>
                <div className={active === "node.js" && "projects__navbar-active"} onClick={() => handleFilterCategory("node.js")}>Node</div>
                <div className={active === "fullstack" && "projects__navbar-active"} onClick={() => handleFilterCategory("fullstack")}>Full Stack</div>
            </div>
            <div className="row">
                {
                    projects.map(project => <ProjectCard key={project.name} project={project} />)
                }
            </div> */}
            <div>Coming Soon!</div>
        </motion.div>
    );
};

export default Projects;