import React from 'react';
import aboutMe from "../data/aboutMe.json";
import resume from '../data/resume.json';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArticleIcon from '@mui/icons-material/Article';

export default function About() {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

	return (
		<section id="about" className="about">
			<div className='aboutMeTitle'>
				<h2>About</h2>
			</div>
			<article>
				{/* <div id="profilePic"></div> */}
				<div id='bioText'>
					<p className='profileBio'>
						{aboutMe.bio_part1}
					</p>
					<p className='profileBio'>
						{aboutMe.bio_part2}
					</p>
				</div>
			</article>
			<div className="resume-div">
			<div className="resume-content">
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
                                    <h4>Online Courses and Bootcamps</h4>
                                    {resume.selfLearning.bootcamps.map((bootcamp, i) => (
                                        <button key={`bootcamp-${i}`}>{bootcamp}</button>
                                    ))}
                                    {resume.selfLearning.courses.map((course, i) => (
                                        <button key={`course-${i}`}>{course}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resume-skills">
                        {/* <h2>Skills</h2> */}
                        {/* <div className="skills-tech"> */}
                            <h4>Technologies</h4>
                            <div>
                            {resume.technicalSkills.map((skill) => (
                                <button className="skills-button" key={skill}>{skill}</button>
                            ))}
                            </div>
                        {/* </div> */}
                        {/* <div className="skills-dev">
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
                        </div> */}
                    </div>
                    {/* <div className="resume-experience">
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
                        
                    </div> */}
                </div>
            </div>
            <div className="resumeLinkDiv">
                <div className="resumeLinkBox">
                    <a href="./Damien_Luzzo_Resume_2023_v4.pdf" target="_blank" rel="noreferrer">
                        <FileDownloadIcon aria-label="download resume" className='contactIcons' fontSize="large"/>
                    </a>
                    <p>Download</p>
                </div>
                <div className="resumeLinkBox">
                    <a href="https://docs.google.com/document/d/1QGNptLCUzyTrWvy3IKcSQv7Wl6pKojgsNaepFkPwmOM/edit?usp=sharing" target="_blank" rel="noreferrer">
                        <ArticleIcon aria-label="see resume" className='contactIcons' fontSize="large"/>
                    </a>
                    <p>See More</p>
                </div>
            </div>
			</div>
		</section>
	);
}
