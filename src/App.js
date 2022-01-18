import React, { useState } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Aside from './components/Aside';

function App() {
	const [ page, setPage ] = useState('Home');

	const render = (page) => {
		if (page === 'Home') {
			return <Home currentPage={page} handlePageChange={updatePage} />;
		} else if (page === 'About') {
			return <About />;
		} else if (page === 'Projects') {
			return <Projects />;
		} else if (page === 'Contact') {
			return <Contact />;
		}
	};

	const updatePage = (page) => setPage(page);

	return (
		<main>
			<Navbar currentPage={page} handlePageChange={updatePage} />
			{render(page)}
			<Aside />
			<Footer />
		</main>
	);
}

export default App;
