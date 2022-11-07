import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Howl} from 'howler'
import DiabloTheme from './PageMusic.mp3'

const pageMusic = new Howl ({
    src: DiabloTheme,
    html5: true,
    volume: .2,
    loop: true
  })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
        <>{pageMusic.play()}</>
    </>
);