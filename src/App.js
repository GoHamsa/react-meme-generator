import './CSS.css';
import { saveAs } from 'file-saver';
import React, { useState } from 'react';

export default function App() {
  const [meme, setMeme] = useState('a meme will appear here');
  const [name, setName] = useState('doge');
  const [top, setTop] = useState('text');
  const [bottom, setBottom] = useState('bottom text');

  const imageUrl = `https://api.memegen.link/images/${name}/${top}/${bottom}.png`;

  const eventInputTop = (event) => {
    setTop(event.target.value);
  };

  const eventInputBottom = (event) => {
    setBottom(event.target.value);
  };

  const eventInputName = (event) => {
    setName(event.target.value);
  };

  const openUrl = () => {
    saveAs(imageUrl, `${name}.jpg`);
  };

  return (
    <div className="frame">
      <img src={imageUrl} alt="Meme" data-test-id="meme-image" />
      <br />
      <form id="memeWords">
        <label>
          text Top text scheiße shit
          <input value={top} onChange={eventInputTop} />
        </label>
        <br />

        <label>
          Bottom text
          <input value={bottom} onChange={eventInputBottom} />
        </label>
        <br />

        <label>
          Meme template
          <input value={name} onChange={eventInputName} />
        </label>

        <br />
      </form>
      <button onClick={openUrl}>Download Meme</button>
      <br />
      <div style={{ fontSize: '30px' }}>{meme}</div>
    </div>
  );
}
