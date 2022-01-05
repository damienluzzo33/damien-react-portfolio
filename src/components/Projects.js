import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import DescriptionModal from './DescriptionModal'
import projects from "../data/projects.json";

export default function Projects() {

	const mainProject = projects[0];
	const subProjects = projects.filter((project) => (
		project.key !== "cactusSocial"
	));

	const [chosenProject, setChosenProject] = React.useState("")

	const [open, setOpen] = React.useState(false);
	const handleOpen = (event) => {
		const projectId = event.target.parentElement.id;
		console.log(projectId)
		setChosenProject(projectId);
		openModal()
	}

	const openModal = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false)
	};

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};
	
	return (
		<section id="projects" className="projects">
			<div className='projectTitleDiv'>
				<h2 className="projects-title">Projects</h2>
			</div>
			<figure className="main-project">
				<h3 className="main-project-header">{mainProject.title}</h3>
				<div>
					<div className="project-links">
						<a href={mainProject.github} rel="noopener noreferrer" target="_blank">
							<CodeIcon className="material" fontSize="large" />
						</a>
						<a href={mainProject.deploy} rel="noopener noreferrer" target="_blank">
							<LinkIcon className="material" fontSize="large" />
						</a>
						<div id={mainProject.key} onClick={handleOpen}>
							<MoreHorizIcon className="material" fontSize="large" />
						</div>
					</div>
					<ul className='project-techstack'>
						{mainProject.techStack.map((tech) => (
							<li>{tech}</li>
						))}
					</ul>
				</div>
			</figure>
			{subProjects.map((project) => (
				<figure className={`sub-project ${project.key}`} key={project.key}>
					<h3 className="project-header">{project.title}</h3>
					<div>
						<div className="project-links">
							<a href={project.github} rel="noopener noreferrer" target="_blank">
								<CodeIcon className="material" fontSize="large" />
							</a>
							{project.deploy
							? (
								<a href={project.deploy} rel="noopener noreferrer" target="_blank">
								<LinkIcon className="material" fontSize="large" />
								</a>
							) : (
								<></>
							)
							}
							<div id={project.key} onClick={handleOpen}>
								<MoreHorizIcon className="material" fontSize="large" />
							</div>
						</div>
						<ul className='project-techstack'>
							{project.techStack.map((tech) => (
								<li>{tech}</li>
							))}
						</ul>
					</div>
				</figure>
			))}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<DescriptionModal projectName={chosenProject} />
				</Box>
			</Modal>
		</section>
	);
}
