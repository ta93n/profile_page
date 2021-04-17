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
          "ラーメン屋さんの情報を友達と共有できるSNSです。\n基本的なSNS機能に加え、投稿内容から自動でラーメン屋さんの位置情報を取得し地図上での投稿検索が行えるほか、ラーメンのジャンルから投稿を検索したりすること等もできます。\nAWS, Docker, CircleCI を開発に取り入れ、Web業界のトレンドにキャッチアップできるように努めました。\n※公開終了しました。",
        skill: "Rails + AWS",
        home: "",
        github: "https://github.com/ta93n/Noodles_App#readme"
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
        url: "https://twitter.com/takuminsan_com"
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
      },
      {
        name: "note",
        icon: "/note.png",
        url: "https://note.com/takuminsan"
      },
      {
        name: "youtube",
        icon: "/youtube_social_circle_red.png",
        url: "https://www.youtube.com/channel/UCkJXkijFl3yjcJT5oxOeWGA/videos"
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
                1991年生まれ。<br />
                2014年3月に都内某大学の体育系学部を卒業後、建設関連企業に就職し営業職などを経験したのち、<br />
                以前から興味を抱いていたIT業界への転職を決意し、2019年7月に退職。<br />
                その後はコンピューターやプログラミングの学習を独学で行いながら、就職活動用のポートフォリオとしてWebアプリケーションを開発。<br />
                2021年3月に自社でシステム開発を行う不動産会社に就職し、社内システムの開発業務などを行っている。<br />
                使用技術は「Django」「Vue.js」。<br />
                好きなことは「beatmaniaIIDX」「カラオケ」「陸上競技」「ファッション」「ラジオを聴くこと」。<br />
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
            <div className="skills-attention">
              <pre>
                <li className="skills-0">0%   何も知らない</li>
                <li className="skills-50">50%  その技術を使うことに抵抗が無い</li>
                <li className="skills-100">100% 業務にてその技術を使いこなす自信がある</li>
              </pre>
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
