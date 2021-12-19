import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import DescriptionModal from './DescriptionModal'

//* potentially turn th tech stack into its own dropdown or separate modal with a stack icon as the button
// import TableRowsIcon from '@mui/icons-material/TableRows';

export default function Projects() {

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

	const handleClose = () => setOpen(false);

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
			<h2 className="projects-title">Projects</h2>
			<figure className="main-project">
				<h3 className="main-project-header">Grouper App</h3>
				<p>
					<div className="project-links">
						<a href="https://github.com/damienluzzo33/Grouper-App" rel="noopener noreferrer" target="_blank">
							<CodeIcon className="material" fontSize="large" />
						</a>
						<a href="https://the-grouper-app.herokuapp.com/" rel="noopener noreferrer" target="_blank">
							<LinkIcon className="material" fontSize="large" />
						</a>
						<div id="grouperApp" onClick={handleOpen}>
							<MoreHorizIcon className="material" fontSize="large" />
						</div>
					</div>
					<ul>
						<li>Javascript</li>
						<li>Node</li>
						<li>Express</li>
					</ul>
				</p>
			</figure>
			<figure className="sub-project">
				<h3 className="project-header">Color Palette Maker</h3>
				<p>
					<div className="project-links">
						<a
							href="https://github.com/damienluzzo33/color-palette-maker"
							rel="noopener noreferrer"
							target="_blank"
						>{' '}
							<CodeIcon className="material" fontSize="large" />
						</a>
						<div id="colorPaletteMaker" onClick={handleOpen}>
							<MoreHorizIcon className="material" fontSize="large" />
						</div>
					</div>
					<ul>
						<li>React</li>
						<li>Node</li>
						<li>Express</li>
						<li>CSS</li>
					</ul>
				</p>
			</figure>
			<figure className="sub-project">
				<h3 className="project-header">Dynamite Recipes</h3>
				<p>
					<div className="project-links">
						<a href="https://github.com/damienluzzo33/Project-1" rel="noopener noreferrer" target="_blank">
							{' '}
							<CodeIcon className="material" fontSize="large" />
						</a>{' '}
						<a href="https://damienluzzo33.github.io/Project-1/" rel="noopener noreferrer" target="_blank">
							<LinkIcon className="material" fontSize="large" />
						</a>
						<div id="dynamiteRecipes" onClick={handleOpen}>
							<MoreHorizIcon className="material" fontSize="large" />
						</div>
					</div>
					<ul>
						<li>Javascript</li>
						<li>Node</li>
						<li>Spoonacular</li>
						<li>Materialize</li>
						<li>CSS</li>
					</ul>
				</p>
			</figure>
			<figure className="sub-project">
				<h3 className="project-header">Git Bloggin</h3>
				<p>
					<div className="project-links">
						<a href="https://github.com/damienluzzo33/Git-Bloggin" rel="noopener noreferrer" target="_blank">
							<CodeIcon className="material" fontSize="large" />
						</a>
						<a href="https://git-bloggin.herokuapp.com/" rel="noopener noreferrer" target="_blank">
							<LinkIcon className="material" fontSize="large" />
						</a>
						<div id="gitBloggin" onClick={handleOpen}>
							<MoreHorizIcon className="material" fontSize="large" />
						</div>
					</div>
					<ul>
						<li>Javascript</li>
						<li>Node</li>
						<li>Handlebars</li>
						<li>Express</li>
						<li>MySQL</li>
						<li>Sequelize</li>
						<li>CSS</li>
					</ul>
				</p>
			</figure>
			<figure className="sub-project">
				<h3 className="project-header">Duly Noted</h3>
				<p>
					<div className="project-links">
						<a href="https://github.com/damienluzzo33/Duly-Noted-App" rel="noopener noreferrer" target="_blank">
							<CodeIcon className="material" fontSize="large" />
						</a>
						<a href="https://duly-noted-application.herokuapp.com/" rel="noopener noreferrer" target="_blank">
							<LinkIcon className="material" fontSize="large" />
						</a>
						<div id="dulyNoted" onClick={handleOpen}>
							<MoreHorizIcon className="material" fontSize="large" />
						</div>
					</div>
					<ul>
						<li>Javascript</li>
						<li>Node</li>
						<li>Express</li>
					</ul>
				</p>
			</figure>
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
