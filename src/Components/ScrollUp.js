import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

class ScrollUp extends Component {

  scrollToTop = () => {
    scroll.scrollToTop(); // react-scrollの様々なfunctionの一つ。ページトップに戻れるようにする
  };

  render() {
    return(
      <div className="scroll scroll-up">
        {/* JSXにJavaScriptを埋め込むには、JavaScriptの部分を中括弧{ }で囲む */}
        <i onClick={this.scrollToTop} className="fa fa-chevron-circle-up" /> {/* thisとはScrollUpクラスのこと */}
      </div>
    );
  }
}

export default ScrollUp;
