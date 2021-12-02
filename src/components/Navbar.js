import React from 'react';

export default function NavTabs({ currentPage, handlePageChange }) {
	return (
		<div className="navbar">
			<div className="navbar-logo" />
			<ul className="navigation">
				<li className="navbar-item">
					<a
						href="#Home"
						onClick={() => handlePageChange('Home')}
						className={currentPage === 'Home' ? 'navbar-link active' : 'navbar-link'}
					>
						Home
					</a>
				</li>
				<li className="navbar-item">
					<a
						href="#About"
						onClick={() => handlePageChange('About')}
						className={currentPage === 'About' ? 'navbar-link active' : 'navbar-link'}
					>
						About
					</a>
				</li>
				<li className="navbar-item">
					<a
						href="#Projects"
						onClick={() => handlePageChange('Projects')}
						className={currentPage === 'Projects' ? 'navbar-link active' : 'navbar-link'}
					>
						Projects
					</a>
				</li>
				<li className="navbar-item">
					<a
						href="#Contact"
						onClick={() => handlePageChange('Contact')}
						className={currentPage === 'Contact' ? 'navbar-link active' : 'navbar-link'}
					>
						Contact
					</a>
				</li>
			</ul>
		</div>
	);
}
