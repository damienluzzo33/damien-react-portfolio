import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
import projects from "../data/projects.json";

export default function Projects() {

	React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

	const mainProject = projects[0];
	const subProjects = projects.filter((project) => (
		project.key !== "cactusSocial"
	));
	
	return (
		<section id="projects" className="projects">
			<div className='projectTitleDiv'>
				<h2 className="projects-title">Projects</h2>
			</div>
			<figure className="main-project">
				<h2>{mainProject.title}</h2>
				<div className='main-project-img-div'>
					<div className='main-project-img' />
				</div>
				<div className='main-project-details'>
					<h3 className="main-project-header">{mainProject.title}</h3>
					<div className='main-project-info'>
						<div className='project-description'>
							<p>{mainProject.text}</p>
						</div>
						<div>
							<ul className='project-techstack'>
							{mainProject.techStack.map((tech) => (
								<li>{tech}</li>
							))}
							</ul>
						</div>
						
						<div className="project-links">
							<a href={mainProject.github} rel="noopener noreferrer" target="_blank">
								<span>
									visit repo
								</span>
								<CodeIcon className="material" fontSize="large" />
							</a>
							<a href={mainProject.deploy} rel="noopener noreferrer" target="_blank">
								<span>
									visit app
								</span>
								<LinkIcon className="material" fontSize="large" />
							</a>
						</div>
					</div>
				</div>
			</figure>
			{subProjects.map((project) => (
				<figure className={`sub-project ${project.key}`} key={project.key}>
					<h2 className="project-header">{project.title}</h2>
					<div className='sub-project-img-div'>
						<div className='sub-project-img' id={project.key}/>
					</div>
					<div className='sub-project-details'>
						<h3 className="sub-project-header">{project.title}</h3>
						<div className='sub-project-info'>
							<div className='project-description'>
								<p>{project.text}</p>
							</div>
							<div>
								<ul className='project-techstack'>
									{project.techStack.map((tech) => (
									<li>{tech}</li>
									))}
								</ul>
							</div>
							<div className="project-links">
								<a href={project.github} rel="noopener noreferrer" target="_blank">
									<span>
									visit repo
									</span>
									<CodeIcon className="material" fontSize="large" />
								</a>
								{project.deploy
								? (
									<a href={project.deploy} rel="noopener noreferrer" target="_blank">
										<span>
											visit app
										</span>
										<LinkIcon className="material" fontSize="large" />
									</a>
							) : (
								<></>
							)
							}
						</div>
						</div>
					</div>
				</figure>
			))}
		</section>
	);
}
