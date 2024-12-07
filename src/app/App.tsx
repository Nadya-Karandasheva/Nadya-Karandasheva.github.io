import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Каких целей хотите достичь: повысить свою квалификацию
        </p>
        <p>
          Какими технологиями хотите овладеть: работа с исображениями, применение шаблонов проектирования
        </p>
        <p>
          Какими технологиями уже владеете: HTML, CSS, JS, TS, React
        </p>
        <p>
          Расскажите о себе и своем опыте: учусь в магистратуре по направлению веб-технологии, работаю frontend-разработчиком 2,5 года
        </p>
      </header>
    </div>
  );
}

export default App;
