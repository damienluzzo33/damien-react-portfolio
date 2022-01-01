import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Home() {

	const [open, setOpen] = React.useState(
		{
			project1: false,
			project2: false,
			project3: false
		}
	)

	const handleOpen = (event) => {
		let project = event.target.id;
		if (project === "projectPreview1") {
			let openStatus = open.project1;
			setOpen({
				project1: !openStatus,
				project2: false,
				project3: false
			})
		} else if (project === "projectPreview2") {
			let openStatus = open.project2;
			setOpen({
				project1: false,
				project2: !openStatus,
				project3: false
			})
		} else if (project === "projectPreview3") {
			let openStatus = open.project3;
			setOpen({
				project1: false,
				project2: false,
				project3: !openStatus
			})
		}
	}

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
					Interested in UX/UI, artificial intelligence, backend development, and creating applications that deliver convenience, accessibility, and unique experiences to users. Hobbies and prior work experience include physics, filmmaking, environmental activism, project management, teaching, and coding. Passionate about learning, artificial consciousness, combatting climate change, and advocating for social and economic justice.</p>
				</div>
			</div>
			<div id="projectsPreview">
				<div className='previewBox'>
					<h2>My Projects</h2>
				</div>
				<div className='previewBanner'>
					<div className='projectDropdown'>
						<p>Cactus Social</p>
						<button id="projectPreview1" onClick={handleOpen}>v</button>
					</div>
					{ open.project1 ? (
						<div 
						className='projectPicture' 
					>
						<div id="cactusSocial" />
						<p>An intuitive, effective, and elegant social media platform for developers that allows users to build communities, communicate with their connections, and engage in direct messaging with their colleagues and friends.</p>
						</div>
					) : (
						<></>
					)
					}
					<div className='projectDropdown'>
						<p>Grouper</p>
						<button id="projectPreview2" onClick={handleOpen}>v</button>
					</div>
					{ open.project2 ? (
					<div className='projectPicture' >
						<div id="grouperApp" />
						<p>A simple event application that allows users to create and attend events to hang out with friends and to make new ones. App is currently targeting Austin-based users. User’s RSVPs and create events are sustained and saved to a MySQL database.</p>
					</div>
					) : (
						<></>
					)
					}
					<div className='projectDropdown'>
						<p>Git Bloggin</p>
						<button id="projectPreview3" onClick={handleOpen}>v</button>
					</div>
					{ open.project3 ? (
					<div 
						className='projectPicture'
					>
						<div id="gitBloggin" />
						<p>An efficient and simple to use blogging application for developers and students to exchange ideas, share experiences, and create community. This app uses MySQL to store chat histories and allows uses to start new blogs and comment on blogs by others.</p>
					</div>
					) : (
						<></>
					)
					}
				</div>
			</div>
			<div id="recPreview">
				<div className='previewBox'>
					<h2>Recommendations</h2>
				</div>
				<div className='previewBanner'>
					<div id="rec1">
						<div id="recImage1">Image1</div>
						<p className='recPreviewMessage'>"Damien stands out as one of the best students I had in my time as a TA with the Full Stack Coding Bootcamp at UT Austin. Damien not only rose to exceed every challenge but was instrumental in helping other students understand complex subjects. Additionally Damien devoted countless hours to organizing and supporting his fellow students both intellectually and emotionally. On his coding prowess alone, I would recommend Damien. That said Damien brings along many intangibles that make him indispensable."</p>
						<p className='recSig'>- Christian Henry, Software Engineer</p>
					</div>
					<div id="rec2">
						<div id="recImage2">Image2</div>
						<p className='recPreviewMessage'>Damien is a talented full-stack developer with an incredible understanding of coding theory and the ability to translate that into great programs. He is a natural leader and teacher that is willing to take time to help others. He has a patient and humble attitude that inspires those around him. I feel incredibly lucky to have worked with him during my time at the Boot Camp. I know he'll be an asset to any company he works for and look forward to following his career in tech.</p>
						<p className='recSig'>- Chuck Stevens, Full-Stack Web Developer</p>
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
						<ArticleIcon aria-label="resume" className='contactIcons' fontSize="large"/>
					</a>
					<a href="https://github.com/damienluzzo33" target="_blank" rel="noreferrer">
						<GitHubIcon aria-label="github" className='contactIcons' fontSize="large"/>
					</a>
					<a href="https://www.linkedin.com/in/damienluzzo/" target="_blank" rel="noreferrer">
						<LinkedInIcon aria-label="linkedin" className='contactIcons' fontSize="large"/>
					</a>
					<a href="https://twitter.com/DamienLuzzo" target="_blank" rel="noreferrer">
						<TwitterIcon aria-label="twitter" className='contactIcons' fontSize="large"/>
					</a>
				</div>
			</div>
		</section>
        </div>
	);
}
