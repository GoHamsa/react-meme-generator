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

  const eventInputName = (event) => {
    setName(event.target.value);
  };

  const openUrl = () => {
    window.open(
      `https://api.memegen.link/images/${name}/${top}/${bottom}.png`,
      '_self',
    );

    // event.target.input
  };

  // export default Url;
  console.log(top);
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
        <label>
          Meme template
          <input value={name} onChange={eventInputName} />
        </label>
        <br />
        <br />
      </form>
      <button onClick={openUrl}>Generate Meme</button>
      <br />
      <div style={{ fontSize: '30px' }}>{meme}</div>
    </div>
  );
}

// eslint-disable-next-line no-lone-blocks

//https://api.memegen.link/images/buzz/memes/memes_everywhere.gif
{
  /*
  const openUrl = () => {
    window.open(
      'https://api.memegen.link/images/ds/small_file/high_quality.png',
      '_self',
    );

    const id = [
      aag,
ackbar,
afraid,
agnes,
    ]

    const memesArray = [
    'doge',
    'Ancient Aliens Guy',
    "It's A Trap!",
    'Afraid to Ask Andy',
    'Agnes Harkness Winking',
    'Sweet Brown',
    'Awkward Moment Seal',
    'Do You Want Ants?',
    'Almost Politically Correct Redneck',
    'Always Has Been',

    const num = Math.floor(Math.random() * 10);
  console.log(num);

  ];*/
}
