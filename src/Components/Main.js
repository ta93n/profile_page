import React from 'react';
import Work from './Work';
import ScrollUp from './ScrollUp';

class Main extends React.Component {
  render() {
    const works = [
      {
        name: "Noodles",
        image: "/noodles.png",
        introduction: "ラーメンの情報を友達と共有できるSNSアプリケーションです。自分で作ったものを友達に使ってもらいたいと思い、キャッチーなアプリケーションを意識しました。"
      },
      {
        name: "ProfilePage",
        image: "/logo192.png",
        introduction: "こちらのページです。"
      },
      {
        name: "MemoryGame",
        image: "/MemoryGame.png",
        introduction: "神経衰弱です。"
      }
    ];

    return (
      <div className="main">
        <div id="top">
          <div className="top-left">
            <img src="top.jpg" />
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
            {works.map((work) => {
              return(
                <Work
                  name={work.name}
                  image={work.image}
                  introduction={work.introduction}
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

          </div>
        </div>
        <div id="contact">
          <p>ここはsnsページです</p>
        </div>
        <ScrollUp />
      </div>
    );
  }
}

export default Main;
