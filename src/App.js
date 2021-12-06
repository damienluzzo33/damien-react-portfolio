import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
	const [ page, setPage ] = useState('home');

	const render = (page) => {
		if (page === 'Home') {
			return <Home />;
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
			{() => render()}
			<Footer />
		</main>
	);
}

export default App;
