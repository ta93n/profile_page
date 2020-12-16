import React from 'react';

class Profile extends React.Component {

  render(){

    return(
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
    );
  }
}

export default Profile;
