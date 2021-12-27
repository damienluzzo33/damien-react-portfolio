import RecCarousel from "./recCarousel";

const technicalSkills = [
    "JavaScript", "Python", "TypeScript", "Git", "GitHub", "MongoDB", "Node.js", "Express.js", "Bash", "MySQL", "HTML5", "CSS3", "PostgreSQL", "Bootstrap", "Materialize", "React.js", "WordPress", "Visual Studio", "Google Suite", "API’s", "JSON", "jQuery", "Heroku", "Netlify", "Handlebars", "GraphQL"
]

const hardSkills = [
    "Version Control", "Debugging", "OOP", "UX/UI Design", "Optimization", "Unit Testing", "Algorithms", "Troubleshooting", "Data Structures", "Database Management", "Data Analysis", "Statistics", "Advanced Mathematics", "Business Acumen", "Research", "Problem-Solving", "Project Management", "Agile Development", "Scrum"
]

const softSkills = [
    "Innovative", "Imaginative", "Versatile", "Creative", "Well-Organized", "Proactive", "Articulate", "Accountable", "Collaborative", "Emotionally Intelligent", "Empathetic", "Relationship Builder", "Active Listener", "Excellent Communicator", "Honest", "Transparent", "Open to Feedback", "Conflict Resolution", "Teaching/Tutoring", "Mentoring"
]

const educationMain = [
    {
        institution: "University of Texas - Austin",
        discipline: "Professional Certificate: Full-Stack Web Development",
        graduationDate: "12/2021"
    },
    {
        institution: "University of California - Santa Barbara",
        discipline: "Bachelors Degrees: Physics & Philosophy",
        graduationDate: "08/2011"
    }
]

const selfLearning = {
    bootcamps: [ "Web Development", "Python", "React.js", "MySQL", "Git and GitHub", "UI/UX for AR/VR", "Typescript"
    ],
    courses: [
        "Algorithms and Data Structures", "SQL for Data Science", "Postgresql and Relational Databases"
    ]
}

const workExperience = [
    {
        company: "Live From The Frontlines",
        role: "Director/Producer",
        location: "Los Angeles, CA",
        dates: "06/2018 - 01/2021",
        description: "Performed video-editing software services, web development, UX/UI design, and data analytics."
    },
    {
        company: "Rootskeeper",
        role: "Campaign Manager",
        location: "Los Angeles, CA",
        dates: "11/2016 - 10/2018",
        description: "Maintained four websites for the organization and their campaigns, managed CRM, form creation, and bulk emails."
    },
    {
        company: "SaveWithSunlight",
        role: "President",
        location: "Davis, CA",
        dates: "03/2012 - 01/2017",
        description: "Conducted 3D modeling software services, website development, and financial modeling."
    }
]

function Resume() {

    return (
        <div className="resume-div">
            <h2 className="resume-title">Resume</h2>
            <div className="resume-content">
                <h3 className="name-header">Damien Luzzo</h3>
                <h4 className="title-header">Software Engineer & Full Stack Web Developer</h4>
                <div className="resume-summary">
                    <p>
                        Creative, tech-savvy, and detail-oriented UC Santa Barbara graduate with Bachelors degrees in both Physics and Philosophy and a passion for software engineering. Excellent problem solving, teamwork, and communication skills with the ability to work under pressure and meet aggressive deadlines in a fast-paced environment. Eager to begin a new career in software engineering and further develop my programming skills and computer science knowledge.
                    </p>
                </div>
                <div className="resume-main-container">
                    <div className="resume-education">
                        <h2>Education</h2>
                        <div className="edu-box">
                            <div className="main-edu">
                                {educationMain.map((obj, i) => (
                                    <div key={`education-${i}`} className="education-box">
                                        <h4>{obj.institution}</h4>
                                        <p>{obj.discipline}</p>
                                        <p>{obj.graduationDate}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="secondary-edu">
                                <div className="education-box">
                                    <h4>Online Bootcamps</h4>
                                    {selfLearning.bootcamps.map((bootcamp, i) => (
                                        <button key={`bootcamp-${i}`}>{bootcamp}</button>
                                    ))}
                                </div>
                                <div className="education-box">
                                    <h4>Courses</h4>
                                    {selfLearning.courses.map((course, i) => (
                                        <button key={`course-${i}`}>{course}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resume-skills">
                        <h2>Skills</h2>
                        <div className="skills-tech">
                            <h4>Tech Stack</h4>
                            <div>
                            {technicalSkills.map((skill) => (
                                <button className="skills-button" key={skill}>{skill}</button>
                            ))}
                            </div>
                        </div>
                        <div className="skills-dev">
                        <h4>Hard Skills</h4>
                            <div>
                            {hardSkills.map((skill) => (
                                <button className="skills-button" key={skill}>{skill}</button>
                            ))}
                            </div>
                        </div>
                        <div className="skills-soft">
                            <h4>Soft Skills</h4>
                            <div>
                            {softSkills.map((skill) => (
                                <button className="skills-button" key={skill}>{skill}</button>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className="resume-experience">
                        <h2>Relevant Experience</h2>
                        <div className="job-div">
                            {workExperience.map((job,i) => (
                                <div className="exp-div" key={`job-${i}`}>
                                    <h5>{job.company}</h5>
                                    <span>{job.role}</span>
                                    <span>{job.location}</span>
                                    <span>{job.dates}</span>
                                    <p>{job.description}</p>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                    <RecCarousel />
                </div>
            </div>
        </div>
    )
}

export default Resume;