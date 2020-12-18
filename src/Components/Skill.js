import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';


class Skill extends React.Component {
  render() {

    const data = [
  {
    "name": "HTML&CSS",
    "uv": 4000
  },
  {
    "name": "JavaScript",
    "uv": 3000
  },
  {
    "name": "Ruby",
    "uv": 2000
  },
  {
    "name": "Ruby on Rails",
    "uv": 2780
  },
  {
    "name": "React",
    "uv": 1890
  },
  {
    "name": "AWS",
    "uv": 2390
  },
  {
    "name": "Git",
    "uv": 3490
  },
  {
    "name": "Docker",
    "uv": 2390
  },
  {
    "name": "CircleCI",
    "uv": 2390
  }
]

    return(
      // グラフのサイズ・データ指定
      <BarChart
        width={1000}
        height={500}
        layout="vertical" //グラフのX軸とY軸を入れ替え
        data={data}
        margin={{top: 0, right: 0, left: 0, bottom: 0}}
      >
        // X軸の設定
        <XAxis
          type="number"
        />
        // Y軸の設定
        <YAxis
          type="category" //データタイプをcategoryに変更
          dataKey="name"
        />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    );
  }
}

export default Skill;
