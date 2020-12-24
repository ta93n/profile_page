import React from 'react';
import { Link } from 'react-scroll'; // ヘッダーのLinkタグを押すと指定の要素までスクロール
import { HamburgerSqueeze } from 'react-animated-burgers'; // ハンバーガーメニューのボタン

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isActive: false};
  }

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render(){

    const nav = (
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
          offset={-130}
          duration= {300}
        >PROFILE</Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-130}
          duration= {300}
        >WORKS</Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-130}
          duration= {300}
        >SKILLS</Link>
        <Link
          activeClass="active"
          to="others"
          spy={true}
          smooth={true}
          offset={-230}
          duration= {300}
        >OTHERS</Link>
      </nav>
    );

    const nav_hamburger = (
      <nav>
        <Link
          activeClass="active" // リンクが押された時(アクティブ時)のクラス定義
          to="top" // top要素にスクロール
          spy={true} // スクロールがターゲット位置にあるときにリンクを選択する
          smooth={true} // スクロールをアニメーションにする
          offset={-120} // スクロール位置の調整
          duration= {300} // スクロールアニメーションの時間
          onClick={this.toggleButton}
        >TOP</Link>
        <Link
          activeClass="active"
          to="profile"
          spy={true}
          smooth={true}
          offset={-130}
          duration= {300}
          onClick={this.toggleButton}
        >PROFILE</Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-130}
          duration= {300}
          onClick={this.toggleButton}
        >WORKS</Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-130}
          duration= {300}
          onClick={this.toggleButton}
        >SKILLS</Link>
        <Link
          activeClass="active"
          to="others"
          spy={true}
          smooth={true}
          offset={-230}
          duration= {300}
          onClick={this.toggleButton}
        >OTHERS</Link>
      </nav>
    );

    let hamburgerMenu;
    if (this.state.isActive) {
      hamburgerMenu = (
        <div className="hamburgerMenu">
          <div className="hamburgerMenu-inner">
            {nav_hamburger}
          </div>
        </div>
      );
    }

    return(
      <header>
        {nav}
        <div className="btn-hamburger">
          <HamburgerSqueeze
            isActive={this.state.isActive}
            toggleButton={this.toggleButton}
            buttonWidth={70}
          />
        </div>
        {hamburgerMenu}
      </header>
    );
  }
}

export default Header;
