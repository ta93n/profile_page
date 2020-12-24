import React from 'react';
import Work from './Work';
import Skill from './Skill';
import Other from './Other';
import ScrollUp from './ScrollUp';
import * as FadeIn from './fadeIn';

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
        introduction: "ご覧いただいているこちらのサイトです。\nWeb開発のフロントにReactを用いるという昨今のトレンドにキャッチアップする為、学習の一環として製作しました。\nAWS S3でホスティングされています。",
        skill: "React",
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

    const others = [
      {
        name: "twitter",
        icon: "/twitter.png",
        url: "https://twitter.com/takuminsan_03"
      },
      {
        name: "github",
        icon: "/github.png",
        url: "https://github.com/ta93n"
      },
      {
        name: "qiita",
        icon: "/qiita.png",
        url: "https://qiita.com/nideratakumin"
      }
    ];

    return (

      <div className="main">
        <div id="top">
          <FadeIn.In>
            <div className="top-left">
              <img src="top.jpg" alt="top" />
            </div>
          </FadeIn.In>
          <FadeIn.In>
            <div className="top-right">
              <h3>TAKUMI NOMURA</h3>
            </div>
          </FadeIn.In>
        </div>
        <div id="profile">
          <FadeIn.Up>
            <div className="profile-header">
              <h3>PROFILE</h3>
            </div>
          </FadeIn.Up>
          <FadeIn.Up>
            <div className="profile-contents">
              <p>
                日本大学文理学部体育学科を卒業後、都内の建設関連会社で5年間勤務したのち2019年7月末に退職。<br />
                その後は地元八王子のカラオケ店でアルバイトをしながら、コンピュータサイエンス・プログラミング学習を独学で行い、<br />
                業務未経験からwebエンジニアとしての転職を目指しています。<br />
                趣味は「beatmaniaIIDX（音楽ゲーム）」「カラオケ」「陸上競技」「ファッション」「ラジオを聴くこと」。<br />
              </p>
            </div>
          </FadeIn.Up>
        </div>
        <div id="works">
          <FadeIn.Up>
            <div className="works-header">
              <h3>WORKS</h3>
            </div>
          </FadeIn.Up>
          <div className="works-contents"> {/* FadeInがモーダル部分と干渉してバグるのでここだけFadeIn無し… */}
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
          <FadeIn.Up>
            <div className="skills-header">
              <h3>SKILLS</h3>
            </div>
          </FadeIn.Up>
          <FadeIn.Up>
            <div className="skills-contents" style={{ width: '100%' }}>
              <Skill />
            </div>
          </FadeIn.Up>
        </div>
        <div id="others">
          <FadeIn.Up>
            <div className="others-header">
              <h3>OTHERS</h3>
            </div>
          </FadeIn.Up>
          <FadeIn.Up>
            <div className="others-contents">
              {others.map((other) => { // keyに関する警告が出るがうまく解決できない…
                return(
                  <Other
                    url={other.url}
                    icon={other.icon}
                    name={other.name}
                  />
                )
              })}
            </div>
          </FadeIn.Up>
        </div>
        <ScrollUp />
      </div>
    );
  }
}

export default Main;
