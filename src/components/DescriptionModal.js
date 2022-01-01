import React from 'react';
import projects from "../data/projects.json";

const projectInfo = {
    grouperApp: {
        title: "Grouper App",
        text: "Allows Austin-based users to create and attend events to hang out with friends and to make new ones. User’s RSVPs and create events are sustained and saved to a MySQL database."
    },
    dynamiteRecipes: {
        title: "Dynamite Recipes",
        text: "An easy-to-use application that presents users with suggested recipes that they can cook or prepare based on the food ingredients that the user provides. User-selected ingredients are saved so their ingredients are sustained."
    },
    colorPaletteMaker: {
        title: "Color Palette Maker",
        text: "An elegant color palette application that allows users to create their own color palettes or utilize up to nine provided palettes. When the user creates a palette, their created palettes are saved for future app usage."
    },
    gitBloggin: {
        title: "Git Bloggin",
        text: "An efficient and simple to use blogging application for developers and students to exchange ideas, share experiences, and create community. This app uses MySQL to store chat histories and allows uses to start new blogs and comment on blogs by others."
    },
    dulyNoted: {
        title: "Duly Noted",
        text: "A simple note taking application to keep track of your day, take notes, and set reminders. Duly Noted was created to make the process of making, tracking, and completing notes and tasks seamless, uncomplicated, and fun."
    },
    error: {
        title: "Whoops!",
        text: "No Description Available"
    }
}

function DescriptionModal(props) {

    console.log(projects);

    let selectedProject;
    const {projectName} = props;
    if (projectName === "grouperApp") {
        selectedProject = projectInfo.grouperApp
    } else if (projectName === "colorPaletteMaker") {
        selectedProject = projectInfo.colorPaletteMaker
    } else if (projectName === "dynamiteRecipes") {
        selectedProject = projectInfo.dynamiteRecipes
    } else if (projectName === "dulyNoted") {
        selectedProject = projectInfo.dulyNoted
    } else if (projectName === "gitBloggin") {
        selectedProject = projectInfo.gitBloggin
    } else {
        selectedProject = projectInfo.error
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