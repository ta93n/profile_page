import React from 'react';
import Work from './Work';
import Skill from './Skill';
import ScrollUp from './ScrollUp';

class Main extends React.Component {

  render() {

    const works = [
      {
        name: "Noodles",
        image: "/noodles.png",
        introduction:
          "ラーメン屋の情報を友達と共有できるSNSアプリケーションです。\n基本的なSNS機能のほか、地図上からお店に関する投稿を検索したり、ジャンルから検索したりすることができます。\nGitによるバージョン管理やテストフレームワーク(RSpec)を使用して現場開発を意識しました。\nまた AWS, Docker, CircleCI を開発に取り入れ、Web業界のトレンドにキャッチアップできるように努めました。",
        skill: "Rails + AWS",
        home: "https://noodles-app.com/",
        github: "https://github.com/ta93n/Noodles_App"
      },
      {
        name: "ProfilePage",
        image: "/logo192.png",
        introduction: "ご覧いただいているこちらのサイトです。\nWeb開発のフロントにReactを用いるという昨今のトレンドにキャッチアップする為、学習の一環として製作しました。",
        skill: "React + Heroku",
        home: "",
        github: "https://github.com/ta93n/profile_page"
      },
      {
        name: "MemoryGame",
        image: "/MemoryGame.png",
        introduction: "神経衰弱です。\nJavaScriptの学習の一環として、ライブラリ等は使用せず素のJSのみで実装しました。\nGitHub Pagesでホスティングされています。",
        skill: "JavaScript",
        home: "https://ta93n.github.io/Memory-game/",
        github: "https://github.com/ta93n/Memory-game"
      }
    ];

    return (

      <div className="main">
        <div id="top">
          <div className="top-left">
            <img src="top.jpg" alt="top" />
          </div>
          <div className="top-right">
            <h3>TAKUMI NOMURA</h3>
          </div>
        </div>
        <div id="profile">
          <div className="profile-header">
            <h3>PROFILE</h3>
          </div>
          <div className="profile-contents">
            <p>
              日本大学文理学部体育学科を卒業後、都内の建設関連会社で5年間勤務したのち2019年7月末に退職。<br />
              その後は地元八王子のカラオケ店でアルバイトをしながら、コンピュータサイエンス・プログラミング学習を独学で行い、<br />
              業務未経験からwebエンジニアとしての転職を目指しています。<br />
              趣味は「beatmaniaIIDX（音楽ゲーム）」「カラオケ」「陸上競技」「ファッション」「ラジオを聴くこと」。<br />
            </p>
          </div>
        </div>
        <div id="works">
          <div className="works-header">
            <h3>WORKS</h3>
          </div>
          <div className="works-contents">
            {works.map((work) => { // keyに関する警告が出るがうまく解決できない…
              return(
                <Work
                  name={work.name}
                  image={work.image}
                  introduction={work.introduction}
                  skill={work.skill}
                  home={work.home}
                  github={work.github}
                />
              )
            })}
          </div>
        </div>
        <div id="skills">
          <div className="skills-header">
            <h3>SKILLS</h3>
          </div>
          <div className="skills-contents">
            <Skill />
          </div>
        </div>
        <div id="contact">
          <div className="contact-header">
            <h3>CONTACT</h3>
          </div>
        </div>
        <ScrollUp />
      </div>
    );
  }
}

export default Main;
