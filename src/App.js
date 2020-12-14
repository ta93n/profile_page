import React from 'react';
import Header from './Components/Header';
import Top from './Components/Top';
import AboutMe from './Components/Profile';
import Works from './Components/Works';
import Skills from './Components/Skills';
import Sns from './Components/Contact';
import ScrollUp from './Components/ScrollUp';
import Footer from './Components/Footer';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main">
          <Top />
          <AboutMe />
          <Works />
          <Skills />
          <Sns />
          <ScrollUp />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
