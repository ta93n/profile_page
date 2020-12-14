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
      <div id="scroll_up">
        {/* JSXにJavaScriptを埋め込むには、JavaScriptの部分を中括弧{ }で囲む */}
        <i onClick={this.scrollToTop} className="fa fa-chevron-circle-up" /> {/* thisとはScrollUpクラスのこと */}
      </div>
    );
  }
}

export default ScrollUp;
