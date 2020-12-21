import React from 'react';
import { Link } from 'react-scroll'; // ヘッダーのLinkタグを押すと指定の要素までスクロール

class Header extends React.Component {
  render(){
    return(
      <header>
        <nav>
          <Link
            activeClass="active" // リンクが押された時(アクティブ時)のクラス定義
            to="top" // top要素にスクロール
            spy={true} // スクロールがターゲット位置にあるときにリンクを選択する
            smooth={true} // スクロールをアニメーションにする
            offset={-120} // スクロール位置の調整
            duration= {300} // スクロールアニメーションの時間
          >TOP</Link>
          <Link
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            offset={-250}
            duration= {300}
          >PROFILE</Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-200}
            duration= {300}
          >WORKS</Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-200}
            duration= {300}
          >SKILLS</Link>
          <Link
            activeClass="active"
            to="others"
            spy={true}
            smooth={true}
            offset={-200}
            duration= {300}
          >OTHERS</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
