import React from "react";

const SkillCard = (props) => <div className="col-lg-6">
    <div className="skill-card">
        <img src={props.skill.icon} alt="icon" className="skill-card__icon" />
        <div className="skill-card__body">
            <h6 className="skill-card__title">{props.skill.title}</h6>
            <p className="skill-card__content">{props.skill.about}</p>
        </div>
    </div>
</div>

export default SkillCard;