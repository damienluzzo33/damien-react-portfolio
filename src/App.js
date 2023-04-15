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
  const [page, setPage] = useState('Home');

  const render = (page) => {
    switch (page) {
      case 'Home':
        return <Home currentPage={page} handlePageChange={updatePage} />;
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        break;
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
