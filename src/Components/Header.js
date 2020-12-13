import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <header>
        <nav>
          <button onClick={this.props.scrollIntoView}>TOP</button>
          <button>PROFILE</button>
          <button>WORKS</button>
          <button>SKILLS</button>
          <button>SNS</button>
        </nav>
      </header>
    );
  }
}

export default Header;
