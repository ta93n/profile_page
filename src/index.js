import React from 'react'; // Reactをインポート
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

ReactDOM.render( // ReactDOM.render(<App />, ...と書くことで、App.jsのJSXがHTMLに変換される
  <App />, document.getElementById('root') // ..., document.getElementById('id名'));と書くことで、変換されたHTMLがindex.htmlの指定したid名の要素の中に挿入される
);
