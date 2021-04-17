import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'; // importするrechartsコンポーネントの指定

class Skill extends React.Component {
  render() {
    const data = [
  {
    "name": "HTML&CSS",
    "習熟度": 55
  },
  {
    "name": "JavaScript",
    "習熟度": 30
  },
  {
    "name": "TypeScript",
    "習熟度": 10
  },
  {
    "name": "React",
    "習熟度": 15
  },
  {
    "name": "Vue",
    "習熟度": 20
  },
  {
    "name": "Ruby(Rails)",
    "習熟度": 50
  },
  {
    "name": "Python(Django)",
    "習熟度": 40
  },
  {
    "name": "AWS",
    "習熟度": 10
  },
  {
    "name": "Git",
    "習熟度": 40
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
          margin={{top: 20, right: 30, left: 30, bottom: 20}}
        >
          {/* X軸の設定 */}
          <XAxis
            type="number" // データタイプをnumberに変更
            tickCount={3} // 軸の値の数を指定
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
