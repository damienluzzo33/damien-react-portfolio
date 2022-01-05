import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import projects from "../data/projects.json";
import aboutMe from "../data/aboutMe.json";
import contact from "../data/contact.json";
import RecCarouselSideshow from "./RecCarouselSlideshow"
import "react-responsive-carousel/lib/styles/carousel.min.css"


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
				<h3>{aboutMe.title}</h3>
				<h2>{aboutMe.name}</h2>
				
			</article>
		</section>
		<section id="preview">
			<div id="aboutPreview">
				<div className='previewBox'>
					<h2>About Me</h2>
				</div>
				<div className='about-container'>
					<p>{aboutMe.bio_preview1}</p>
					<div className='about-content'>
						<div className='previewBanner'>
							<p>{aboutMe.bio_preview2}</p>
							<p>{aboutMe.bio_preview3}</p>
							<p>{aboutMe.bio_preview4}</p>
							<button className='lets-talk'>let's talk</button>
						</div>
						<div className='available-for'>
							<div className='hire'></div>
							<div className='teach'></div>
						</div>
					</div>
					
				</div>
				
			</div>
			<div id="projectsPreview">
				<div className='previewBox'>
					<h2>Recent Projects</h2>
				</div>
				<div className='previewBanner'>
					<button className='projectDropdown' id="projectPreview1" onClick={handleOpen}>{projects[0].title}</button>
					{ open.project1 ? (
						<div 
						className='projectPicture' 
					>
						<div id="cactusSocialPreview" />
						<p>{projects[0].text}</p>
						</div>
					) : (
						<></>
					)
					}
					<button className='projectDropdown' id="projectPreview2" onClick={handleOpen}>{projects[1].title}</button>
					{ open.project2 ? (
					<div className='projectPicture' >
						<div id="grouperAppPreview" />
						<p>{projects[1].text}</p>
					</div>
					) : (
						<></>
					)
					}
					<button className='projectDropdown' id="projectPreview3" onClick={handleOpen}>{projects[2].title}</button>
					{ open.project3 ? (
					<div 
						className='projectPicture'
					>
						<div id="gitBlogginPreview" />
						<p>{projects[2].text}</p>
					</div>
					) : (
						<></>
					)
					}
				</div>
			</div>
			<div id="recPreview">
				<div className='previewBox'>
					<h2>Testimonials</h2>
				</div>
				<div className='previewBanner'>
					<div className='recSlideshow'>
						<RecCarouselSideshow />
					</div>
				</div>
			</div>
			<div id="contactPreview">
				<div className='previewBox'>
					<h2>Contact Me</h2>
				</div>
				<div className='previewBanner'>
					<a href={contact.email} target="_blank" rel="noreferrer">
						<EmailIcon aria-label="email" className='contactIcons' fontSize="large"/>
					</a>
					<a href={contact.resume} target="_blank" rel="noreferrer">
						<ArticleIcon aria-label="resume" className='contactIcons' fontSize="large"/>
					</a>
					<a href={contact.github} target="_blank" rel="noreferrer">
						<GitHubIcon aria-label="github" className='contactIcons' fontSize="large"/>
					</a>
					<a href={contact.linkedin} target="_blank" rel="noreferrer">
						<LinkedInIcon aria-label="linkedin" className='contactIcons' fontSize="large"/>
					</a>
					<a href={contact.twitter} target="_blank" rel="noreferrer">
						<TwitterIcon aria-label="twitter" className='contactIcons' fontSize="large"/>
					</a>
				</div>
			</div>
		</section>
        </div>
	);
}
