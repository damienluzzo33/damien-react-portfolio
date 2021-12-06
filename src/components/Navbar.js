import React from 'react';

export default function NavTabs(props) {
	const { currentPage, handlePageChange } = props;
	return (
		<div className="navbar">
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
	);
}
