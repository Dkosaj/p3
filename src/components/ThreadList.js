import React, { useState } from 'react';
import Thread from './Thread';
import NewThread from './NewThread';
import '../App.css';

const ThreadList = ({ loggedInUser }) => {
  const [threads, setThreads] = useState([
    { id: 1, title: 'Wątek 1', content: 'To jest pierwszy wątek', user: loggedInUser, comments: [] },
    { id: 2, title: 'Wątek 2', content: 'To jest drugi wątek', user: loggedInUser, comments: [] }
  ]);

  const addThread = (title, content) => {
    const newThread = {
      id: threads.length + 1,
      title,
      content,
      user: loggedInUser,
      comments: []
    };
    setThreads([...threads, newThread]);
  };

  const deleteThread = (id) => {
    const updatedThreads = threads.filter(thread => thread.id !== id);
    setThreads(updatedThreads);
  };

  const updateThread = (id, title, content) => {
    const updatedThreads = threads.map(thread =>
      thread.id === id ? { ...thread, title, content } : thread
    );
    setThreads(updatedThreads);
  };

  return (
    <div className="container">
      <h1 className="title">Forum Dyskusyjne</h1>
      <p className="counter">Liczba wątków: {threads.length}</p>
      <NewThread addThread={addThread} />
      {threads.map(thread => (
        <Thread key={thread.id} thread={thread} deleteThread={deleteThread} updateThread={updateThread} />
      ))}
    </div>
  );
};

export default ThreadList;
