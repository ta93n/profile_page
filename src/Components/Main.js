import React from 'react';
import ScrollUp from './ScrollUp';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div id="top">
          <div className="top_left">
            <img src="top.jpg" />
          </div>
          <div className="top_right">
            <h3>TAKUMI NOMURA</h3>
          </div>
        </div>
        <div id="profile">
          <div className="profile_title">
            <h3>PROFILE</h3>
          </div>
          <div className="profile_contents">
            <p>
              日本大学文理学部体育学科を卒業後、都内の建設関連会社で5年間勤務したのち2019年7月末に退職。<br />
              その後は地元八王子のカラオケ店でアルバイトをしながら、コンピュータサイエンス・プログラミング学習を独学で行い、<br />
              業務未経験からwebエンジニアとしての転職を目指しています。<br />
              趣味は「beatmaniaIIDX（音楽ゲーム）」「カラオケ」「陸上競技」「ファッション」「ラジオを聴くこと」。<br />
            </p>
          </div>
        </div>
        <div id="works">
          <p>ここはworksページです</p>
        </div>
        <div id="skills">
          <p>ここはskillsページです</p>
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
