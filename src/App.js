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
		if (page === 'home') {
			return <Home />;
		} else if (page === 'about') {
			return <About />;
		} else if (page === 'projects') {
			return <Projects />;
		} else if (page === 'contact') {
			return <Contact />;
		}
	};

	const updatePage = (page) => setPage(page);

	return (
		<div className="App">
			<Navbar currentPage={page} handlePageChange={updatePage} />
			{() => render()}
			<Footer />
		</div>
	);
}

export default App;
