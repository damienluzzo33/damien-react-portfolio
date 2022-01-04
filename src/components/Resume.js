import RecCarousel from "./recCarousel";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArticleIcon from '@mui/icons-material/Article';
import resume from "../data/resume.json";
import aboutMe from "../data/aboutMe.json";

function Resume() {

    return (
        <div className="resume-div">
            <h2 className="resume-title">Resume</h2>
            <div className="resume-content">
                <h3 className="name-header">{aboutMe.name}</h3>
                <h4 className="title-header">{aboutMe.title}</h4>
                <div className="resume-summary">
                    <p>{aboutMe.bio_part1}</p>
                    <p>{aboutMe.bio_part2}</p>
                </div>
                <div className="resume-main-container">
                    <div className="resume-education">
                        <h2>Education</h2>
                        <div className="edu-box">
                            <div className="main-edu">
                                {resume.education.map((obj, i) => (
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
                                    {resume.selfLearning.bootcamps.map((bootcamp, i) => (
                                        <button key={`bootcamp-${i}`}>{bootcamp}</button>
                                    ))}
                                </div>
                                <div className="education-box">
                                    <h4>Courses</h4>
                                    {resume.selfLearning.courses.map((course, i) => (
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
                            {resume.technicalSkills.map((skill) => (
                                <button className="skills-button" key={skill}>{skill}</button>
                            ))}
                            </div>
                        </div>
                        <div className="skills-dev">
                        <h4>Hard Skills</h4>
                            <div>
                            {resume.hardSkills.map((skill) => (
                                <button className="skills-button" key={skill}>{skill}</button>
                            ))}
                            </div>
                        </div>
                        <div className="skills-soft">
                            <h4>Soft Skills</h4>
                            <div>
                            {resume.softSkills.map((skill) => (
                                <button className="skills-button" key={skill}>{skill}</button>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className="resume-experience">
                        <h2>Relevant Experience</h2>
                        <div className="job-div">
                            {resume.workExperience.map((job,i) => (
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
            <div className="resumeLinkDiv">
                <div className="resumeLinkBox">
                    <a href="./assets/images/Damien-Luzzo-Full-Stack-Developer-Resume.pdf" target="_blank" rel="noreferrer">
                        <FileDownloadIcon aria-label="download" className='contactIcons' fontSize="large"/>
                    </a>
                    <p>Download</p>
                </div>
                <div className="resumeLinkBox">
                    <a href="https://docs.google.com/document/d/1xvewE8IoywnYsMzn7ZHutwNR-oBfAE36FZ0bYNKNujc/edit?usp=sharing" target="_blank" rel="noreferrer">
                        <ArticleIcon aria-label="email" className='contactIcons' fontSize="large"/>
                    </a>
                    <p>See More</p>
                </div>
            </div>
        </div>
    )
}

export default Resume;