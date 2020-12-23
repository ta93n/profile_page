import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import './App.scss';
import './responsive.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
