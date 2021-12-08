import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';


export default function Projects() {
	return (
		<section id="projects" className="projects">
			<h2 className="projects-title">Projects</h2>
			<figure className="main-project">
				<h3 className="main-project-header">Grouper App</h3>
				<p>
					<a href="https://github.com/damienluzzo33/Grouper-App" rel="noopener noreferrer" target="_blank">
						<CodeIcon className="material" fontSize="large" />
					</a>
					<a href="https://the-grouper-app.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                        <LinkIcon className="material" fontSize="large" />
					</a>
				</p>
			</figure>
			<figure className="sub-project">
				<h3 className="project-header">Color Palette Maker</h3>
				<p>
					<a
						href="https://github.com/damienluzzo33/color-palette-maker"
						rel="noopener noreferrer"
						target="_blank"
					>{' '}
						<CodeIcon className="material" fontSize="large" />
					</a>
				</p>
			</figure>
			<figure className="sub-project">
				<h3 className="project-header">Dynamite Recipes</h3>
				<p>
					<a href="https://github.com/damienluzzo33/Project-1" rel="noopener noreferrer" target="_blank">
						{' '}
						<CodeIcon className="material" fontSize="large" />
					</a>{' '}
					<a href="https://damienluzzo33.github.io/Project-1/" rel="noopener noreferrer" target="_blank">
                        <LinkIcon className="material" fontSize="large" />
					</a>
				</p>
			</figure>
			<figure className="sub-project">
				<h3 className="project-header">Git Bloggin</h3>
				<p>
					<a href="https://github.com/damienluzzo33/Git-Bloggin" rel="noopener noreferrer" target="_blank">
						<CodeIcon className="material" fontSize="large" />
					</a>
					<a href="https://git-bloggin.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                        <LinkIcon className="material" fontSize="large" />
					</a>
				</p>
			</figure>
		</section>
	);
}
