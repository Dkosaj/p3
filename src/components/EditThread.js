import React, { useState } from 'react';
import '../App.css';

const EditThread = ({ thread, updateThread, cancelEdit }) => {
  const [title, setTitle] = useState(thread.title);
  const [content, setContent] = useState(thread.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      updateThread(thread.id, title, content);
      cancelEdit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-thread">
      <div className="input-group">
        <label>Tytuł:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Opis:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">Zapisz zmiany</button>
      <button type="button" onClick={cancelEdit}>Anuluj</button>
    </form>
  );
};

export default EditThread;