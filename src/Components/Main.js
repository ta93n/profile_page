import React from 'react';
import Top from './Top';
import AboutMe from './AboutMe';
import Works from './Works';
import Skills from './Skills';
import Sns from './Sns';
import ScrollUp from './ScrollUp';

class Main extends React.Component {
  render(){
    return(
      <div className="main">
        <Top />
        <AboutMe />
        <Works />
        <Skills />
        <Sns />
        <ScrollUp />
      </div>
    );
  }
}

export default Main;
