import React from "react";
import github from "../../assets/projects_images/COVID.jpg";

const ProjectCard = ({ project: { name, image, deployedUrl, githubUrl } }) => {
    return (
        <div className="project-card col-md-6 col-lg-4 my-2">
            <div className="project-card__wrapper">
                <a href={deployedUrl}>
                    <img src={image} alt={name} className="project-card__image" />
                </a>
                <div className="project-card__title">
                    <a href={githubUrl}>
                        <img src={github} alt="github link" className="project-card__icon" />
                    </a>
                    {name}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;