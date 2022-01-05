import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function NavTabs(props) {
	const { currentPage, handlePageChange } = props;

	const [open, setOpen] = React.useState(false);

	const handleSidebarOpen = () => {
		setOpen(true);
	}

	const handleSidebarClose = () => {
		setOpen(false);
	}

	function handleSidebar(event) {
		const clicker = event.target.id;
		console.log(clicker);
		if (clicker === "homePage") {
			handleSidebarClose();
			handlePageChange('Home');
		} else if (clicker === "aboutPage") {
			handleSidebarClose();
			handlePageChange('About');
		} else if (clicker === "contactPage") {
			handleSidebarClose();
			handlePageChange('Contact');
		} else if (clicker === 'projectsPage') {
			handleSidebarClose();
			handlePageChange('Projects');
		// } else if (clicker === "resumePage") {
		// 	handleSidebarClose();
		// 	handlePageChange('Resume');
		} else {
			handleSidebarClose();
		}
	}

	return (
		<React.Fragment>
			<div 
				className="navbar"
				style={{height: open ? "0%" : "80px"}}
			>
				{/* Hamburger Icon */}
				<MenuIcon 
					id="clickedIcon"
					onClick={handleSidebarOpen}
					className="materialMenu" 
					fontSize="large" 
					style={{display: open ? "none" : "block"}}
				/>
				<div className="navbarLogo" />
				<ul className="navbarLinks">
					<li className="navbarItem">
						<a
							href="#Home"
							onClick={() => handlePageChange('Home')}
							className={currentPage === 'Home' ? 'navbarLink active' : 'navbarLink'}
						>
							Home
						</a>
					</li>
					<li className="navbarItem">
						<a
							href="#About"
							onClick={() => handlePageChange('About')}
							className={currentPage === 'About' ? 'navbarLink active' : 'navbarLink'}
						>
							About
						</a>
					</li>
					{/* <li className="navbarItem">
						<a
							href="#Resume"
							onClick={() => handlePageChange('Resume')}
							className={currentPage === 'Resume' ? 'navbarLink active' : 'navbarLink'}
						>
							Resume
						</a>
					</li> */}
					<li className="navbarItem">
						<a
							href="#Projects"
							onClick={() => handlePageChange('Projects')}
							className={currentPage === 'Projects' ? 'navbarLink active' : 'navbarLink'}
						>
							Projects
						</a>
					</li>
					<li className="navbarItem">
						<a
							href="#Contact"
							onClick={() => handlePageChange('Contact')}
							className={currentPage === 'Contact' ? 'navbarLink active' : 'navbarLink'}
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
			<div style={{ width: open ? "100%" : "0%" }} className="sidebar">
				<div className='stickyDiv' style={{ position: open ? "fixed" : "relative", width: open ? "100vw" : "0%" }}>
				<HighlightOffIcon 
					style={{ display: open ? "block" : "none" }}
					onClick={handleSidebarClose}
					className="materialExit" 
					fontSize="large" 
				/>
				<ul style={{ display: open ? "flex" : "none" }} className="sidebarLinks">
					<li className="sidebarItem">
						<a
							href="#Home"
							id="homePage"
							onClick={handleSidebar}
							className={currentPage === 'Home' ? 'sidebarLink active' : 'sidebarLink'}
						>
							Home
						</a>
					</li>
					<li className="sidebarItem">
						<a
							href="#About"
							id="aboutPage"
							onClick={handleSidebar}
							className={currentPage === 'About' ? 'sidebarLink active' : 'sidebarLink'}
						>
							About
						</a>
					</li>
					{/* <li className="sidebarItem">
						<a
							href="#Resume"
							id="resumePage"
							onClick={handleSidebar}
							className={currentPage === 'Resume' ? 'sidebarLink active' : 'sidebarLink'}
						>
							Resume
						</a>
					</li> */}
					<li className="sidebarItem">
						<a
							href="#Projects"
							id="projectsPage"
							onClick={handleSidebar}
							className={currentPage === 'Projects' ? 'sidebarLink active' : 'sidebarLink'}
						>
							Projects
						</a>
					</li>
					<li className="sidebarItem">
						<a
							href="#Contact"
							id="contactPage"
							onClick={handleSidebar}
							className={currentPage === 'Contact' ? 'sidebarLink active' : 'sidebarLink'}
						>
							Contact
						</a>
					</li>
				</ul>
				</div>
			</div>
		</React.Fragment>
	);
}
