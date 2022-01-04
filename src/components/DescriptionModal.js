import React from 'react';
import projects from "../data/projects.json";

function DescriptionModal(props) {

    let selectedProject;
    const {projectName} = props;
    if (projectName === "cactusSocial") {
        // selectedProject = projectInfo.grouperApp
        selectedProject = projects[0];
    } else if (projectName === "grouperApp") {
        selectedProject = projects[1];
    } else if (projectName === "gitBloggin") {
        selectedProject = projects[2];
    } else if (projectName === "dynamiteRecipes") {
        selectedProject = projects[3];
    } else if (projectName === "colorPaletteMaker") {
        selectedProject = projects[4];
    } else if (projectName === "dulyNoted") {
        selectedProject = projects[5];
    } else if (projectName === "dsaBootcamp") {
        selectedProject = projects[6];
    }

    return ( 
        <div className="modalDiv">
            <h2 className="modalTitle">
                {selectedProject.title}
            </h2>
            <p className="modalText">
                {selectedProject.text}
            </p>
        </div>
    )
}

export default DescriptionModal;