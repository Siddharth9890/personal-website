import api from "../../assets/icons/api.svg";
import backend from "../../assets/icons/backend.svg";
import algo from "../../assets/icons/algo.svg";
import React from "react";

const skills = [
    {
        icon: backend,
        title: "Backend Development",
        about: "Creating Databases,server using Express and Node"
    }, {
        icon: api,
        title: "API Development",
        about: "Develop Robust REST API using Node"
    }, {
        icon: algo,
        title: "Data Structures and Algorithms",
        about: ["A Daily Problem solver on ", <a href="https://leetcode.com/siddharth9890/" target="_blank" rel="noopener noreferrer">Leetcode</a>]
    },
];

export default skills;