import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavTabs(props) {
	const { currentPage, handlePageChange } = props;

	//* set up ability to run an onClick event when menuIcon is clicked so that we can pop the sidebar in and out (need exit button or added logic in listener for that)

	return (
		<React.Fragment>
		<div className="navbar">
			{/* Hamburger Icon */}
			<MenuIcon 
				className="materialMenu" 
				fontSize="large" 
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
		<div className="sidebar">
			<ul className="sidebarLinks">
				<li className="sidebarItem">
					<a
						href="#Home"
						onClick={() => handlePageChange('Home')}
						className={currentPage === 'Home' ? 'sidebarLink active' : 'sidebarLink'}
					>
						Home
					</a>
				</li>
				<li className="sidebarItem">
					<a
						href="#About"
						onClick={() => handlePageChange('About')}
						className={currentPage === 'About' ? 'sidebarLink active' : 'sidebarLink'}
					>
						About
					</a>
				</li>
				<li className="sidebarItem">
					<a
						href="#Projects"
						onClick={() => handlePageChange('Projects')}
						className={currentPage === 'Projects' ? 'sidebarLink active' : 'sidebarLink'}
					>
						Projects
					</a>
				</li>
				<li className="sidebarItem">
					<a
						href="#Contact"
						onClick={() => handlePageChange('Contact')}
						className={currentPage === 'Contact' ? 'sidebarLink active' : 'sidebarLink'}
					>
						Contact
					</a>
				</li>
			</ul>
		</div>
		</React.Fragment>
	);
}
