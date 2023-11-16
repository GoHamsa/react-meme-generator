import React, { useRef, useState } from 'react';

export default function App() {
  const [meme, setMeme] = useState('a meme will appear here');
  const [name, setName] = useState('doge');
  const [top, setTop] = useState('such_meme');
  const [bottom, setBottom] = useState('very_skill');

  const imageUrl = `https://api.memegen.link/images/${name}/${top}/${bottom}.png`;

  const downloadRef = useRef(null);

  const eventInputTop = (event) => {
    setTop(event.target.value);
  };

  const eventInputBottom = (event) => {
    setBottom(event.target.value);
  };

  const openUrl = () => {
    if (downloadRef.current) {
      downloadRef.current.href = imageUrl;
      downloadRef.current.download = 'meme.png'; // name the file to be downloaded
      downloadRef.current.click();
    }
  };

  return (
    <div>
      <img src={imageUrl} alt="Meme" data-test-id="meme-image" />
      <br />
      <form id="memeWords">
        <label>
          Top text
          <input value={top} onChange={eventInputTop} />
        </label>
        <br />
        <label>
          Bottom text
          <input value={bottom} onChange={eventInputBottom} />
        </label>
        <br />
        <br />
      </form>
      <button onClick={openUrl}>Download Meme</button>
      <br />
      <div style={{ fontSize: '30px' }}>{meme}</div>

      {/* Invisible anchor element for initiating download */}
      <a ref={downloadRef} href="#" style={{ display: 'none' }}>
        Download
      </a>
    </div>
  );
}
