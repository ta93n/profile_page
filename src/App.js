import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
