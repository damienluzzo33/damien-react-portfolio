import React from 'react';
import projects from "../data/projects.json";
import aboutMe from "../data/aboutMe.json";
import RecCarouselSideshow from "./RecCarouselSlideshow"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Home(props) {

	React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

	const { handlePageChange } = props;

	const [open, setOpen] = React.useState(
		{
			project1: false,
			project2: false,
			project3: false
		}
	)

	function handleNavigation(event) {
		const clicker = event.target.id;
		console.log(clicker);
		if (clicker === "homePage") {
			handlePageChange('Home');
		} else if (clicker === "aboutPage") {
			handlePageChange('About');
		} else if (clicker === "contactPage") {
			handlePageChange('Contact');
		} else if (clicker === 'projectsPage') {
			handlePageChange('Projects');
		}
	}

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
					<h2>About</h2>
				</div>
				<div className='about-container'>
					<p>{aboutMe.bio_preview1}</p>
					<div className='about-content'>
						<div className='previewBanner'>
							<p>{aboutMe.bio_preview2}</p>
							<p>{aboutMe.bio_preview3}</p>
							<a
								className='moreAboutMe'
								id='aboutPage'
								href="#About"
								onClick={handleNavigation}
							>
								More About Me
							</a>
							<p>{aboutMe.bio_preview4}</p>
							<button 
								className='lets-talk'
								id="contactPage"
								href="#Contact"
								onClick={handleNavigation}
							>
								let's talk 
								<ArrowForwardIcon id="arrowForward"/>
							</button>
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
				<div className='seeMoreProjects'>
					<a 
						href="#Projects"
					>
						See More
					</a>
				</div>
			</div>
			<div id="recPreview">
				<div className='previewBox previewRec'>
					<h2>Testimonials</h2>
				</div>
				<div className='previewBanner'>
					<div className='recSlideshow'>
						<RecCarouselSideshow />
					</div>
				</div>
			</div>
		</section>
        </div>
	);
}
