import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'; // importするrechartsコンポーネントの指定

class Skill extends React.Component {
  render() {
    const data = [
  {
    "name": "HTML&CSS",
    "習熟度": 60
  },
  {
    "name": "JavaScript",
    "習熟度": 20
  },
  {
    "name": "Ruby",
    "習熟度": 50
  },
  {
    "name": "Rails",
    "習熟度": 50
  },
  {
    "name": "React",
    "習熟度": 10
  },
  {
    "name": "AWS",
    "習熟度": 20
  },
  {
    "name": "Git",
    "習熟度": 50
  },
  {
    "name": "Docker",
    "習熟度": 10
  },
  {
    "name": "CircleCI",
    "習熟度": 10
  }
]
    return(
        // グラフのサイズ・データ指定
      <ResponsiveContainer>
        <BarChart
          width={1000}
          height={500}
          layout="vertical" //グラフのX軸とY軸を入れ替え
          data={data}
          margin={{top: 30, right: 80, left: 80, bottom: 30}}
        >
          {/* X軸の設定 */}
          <XAxis
            type="number" // データタイプをnumberに変更
            tickCount={2} // 軸の値の数を指定
            domain={[0, 100]} // 0~100の範囲で表示させる
            unit="%" // 単位を指定
            tickLine={false} // 軸目盛りの有無を指定
          />
          {/* Y軸の設定 */}
          <YAxis
            type="category" // データタイプをcategoryに変更
            dataKey="name"
            tickLine={false} // 軸目盛りの有無を指定
            mirror={true} // trueにするとラベルをグラフ内側に表示
          />
          <Bar
            dataKey="習熟度"
            fill="#52de86" // バーの色指定
            barSize={30} // バーの大きさ指定
            fillOpacity={0.4}　// バーの透過性指定
            animationDuration={2000} // バーのアニメーション時間の指定
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default Skill;
