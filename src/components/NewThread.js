import React, { useState } from 'react';
import '../App.css';

const NewThread = ({ addThread }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addThread(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-thread">
      <div>
        <label>Tytuł:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div> <br></br>
      <div>
        <label>Opis:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">Dodaj Wątek</button>
    </form>
  );
};

export default NewThread;

