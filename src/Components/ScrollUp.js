import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

class ScrollUp extends Component {

  scrollToTop = () => {
    scroll.scrollToTop({  // react-scrollの様々なfunctionの一つ。ページトップに戻れるようにする
      duration: 300,
    });
  };

  render() {
    return(
      <div id="scroll-up">
        <div className="scroll-up-btn">
          <i onClick={this.scrollToTop} className="fa fa-chevron-circle-up" />
        </div>
      </div>
    );
  }
}

export default ScrollUp;
