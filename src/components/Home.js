import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Home() {
	return (<div>
		<section id="home">
			<article>
				<h2>Damien Luzzo</h2>
				<h3>Software Engineer</h3>
			</article>
		</section>
		<section id="preview">
			<div id="aboutPreview">
				<div className='previewBox'>
					<h2>About Me</h2>
				</div>
				<div className='previewBanner'>
					<p>Software engineer and full-stack web developer with bachelor’s degrees in Physics and Philosophy. A natural problem solver, an excellent communicator, and someone who thrives in high-pressure and fast-paced environments. A proven leader and team player who enjoys supporting and mentoring others, who is patient, humble, and open to feedback, and who is always eager to learn more. Equipped with all of the skills necessary to be a productive, proactive, and indispensable asset for whatever company I work for.
					</p>
					<p>
					Interested in UX/UI, artificial intelligence, backend development, and creating applications that deliver convenience, accessibility, and unique experiences to users. Hobbies and prior work experience include physics, filmmaking, environmental activism, project management, teaching, and coding. Passionate about learning, artificial consciousness, climate change, and social justice.</p>
				</div>
			</div>
			<div id="projectsPreview">
				<div className='previewBox'>
					<h2>My Projects</h2>
				</div>
				<div className='previewBanner'>
					<div className='projectDropdown'>
						<p>Cactus Social</p>
						<button>v</button>
					</div>
					<div className='projectPicture'>
						<div id="projectPreview1">Project1</div>
						<p>Some Information About The Project</p>
					</div>
					<div className='projectDropdown'>
						<p>Grouper</p>
						<button>v</button>
					</div>
					<div className='projectPicture'>
						<div id="projectPreview2">Project2</div>
						<p>Some Information About The Project</p>
					</div>
					<div className='projectDropdown'>
						<p>Git Bloggin</p>
						<button>v</button>
					</div>
					<div className='projectPicture'>
						<div id="projectPreview3">Project3</div>
						<p>Some Information About The Project</p>
					</div>
				</div>
			</div>
			<div id="recPreview">
				<div className='previewBox'>
					<h2>Recommendations</h2>
				</div>
				<div className='previewBanner'>
					<div id="rec1">
						<div id="recImage1">Image1</div>
						<p className='recPreviewMessage'>A nice message</p>
					</div>
					<div id="rec2">
						<div id="recImage2">Image2</div>
						<p className='recPreviewMessage'>A nice message</p>
					</div>
				</div>
			</div>
			<div id="contactPreview">
				<div className='previewBox'>
					<h2>Contact Me</h2>
				</div>
				<div className='previewBanner'>
					<a href="mailto:damienluzzo33@gmail.com" target="_blank" rel="noreferrer">
						<EmailIcon aria-label="email" className='contactIcons' fontSize="large"/>
					</a>
					<a href="https://docs.google.com/document/d/1xvewE8IoywnYsMzn7ZHutwNR-oBfAE36FZ0bYNKNujc/edit?usp=sharing" target="_blank" rel="noreferrer">
						<ArticleIcon aria-label="email" className='contactIcons' fontSize="large"/>
					</a>
					<a href="https://github.com/damienluzzo33" target="_blank" rel="noreferrer">
						<GitHubIcon aria-label="email" className='contactIcons' fontSize="large"/>
					</a>
					<a href="https://www.linkedin.com/in/damienluzzo/" target="_blank" rel="noreferrer">
						<LinkedInIcon aria-label="email" className='contactIcons' fontSize="large"/>
					</a>
					<a href="https://twitter.com/DamienLuzzo" target="_blank" rel="noreferrer">
						<TwitterIcon aria-label="email" className='contactIcons' fontSize="large"/>
					</a>
				</div>
			</div>
		</section>
        </div>
	);
}
