import React, { useState } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Resume from './components/Resume';

function App() {
	const [ page, setPage ] = useState('Home');

	const render = (page) => {
		if (page === 'Home') {
			return <Home />;
		} else if (page === 'About') {
			return <About />;
		} else if (page === 'Projects') {
			return <Projects />;
		} else if (page === 'Contact') {
			return <Contact />;
		} else if (page === 'Resume') {
			return <Resume />;
		}
	};

	const updatePage = (page) => setPage(page);

	return (
		<main>
			<Navbar currentPage={page} handlePageChange={updatePage} />
			{render(page)}
			<Footer />
		</main>
	);
}

export default App;
