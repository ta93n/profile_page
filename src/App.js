import React from 'react';
import Header from './Components/Header';
import Top from './Components/Top';
import AboutMe from './Components/AboutMe';
import Works from './Components/Works';
import Skills from './Components/Skills';
import Sns from './Components/Sns';
import ScrollUp from './Components/ScrollUp';
import Footer from './Components/Footer';
import './App.scss';

class App extends React.Component {

  scrollIntoView() {
    document.getElementById("top").scrollIntoView({ // elementまでページをスクロール
      behavior: 'smooth', // スクロールの動作を指定
      block: 'center', // 垂直方向のスクロール位置を指定
      inline: 'nearest', // 水平方向のスクロール位置を指定
    });
  }

  render() {
    return (
      <div className="app">
        <Header
          scrollIntoView={() => this.scrollIntoView()}
        />
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
