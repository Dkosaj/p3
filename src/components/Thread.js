import React, { useState } from 'react';
import '../App.css';
import EditThread from './EditThread';
import Comment from './Comment';
import CommentForm from './CommentForm';

const Thread = ({ thread, deleteThread, updateThread }) => {
  const { id, title, content, comments: initialComments, user } = thread;
  const [comments, setComments] = useState(initialComments || []);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleDelete = () => {
    deleteThread(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="thread">
      {isEditing ? (
        <EditThread thread={thread} updateThread={updateThread} cancelEdit={cancelEdit} />
      ) : (
        <>
          <h2>{title}</h2>
          <p>{content}</p>
          <div className="user-info">
            {user.avatar && <img src={user.avatar} alt="User Avatar" width="50" />}
            <span>{user.username}</span>
          </div>
          <div className="comments">
            <h3>Komentarze:</h3>
            {comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
            <CommentForm onSubmit={handleAddComment} />
          </div>
          <button onClick={handleEdit}>Edytuj</button>
          <button onClick={handleDelete} style={{ marginLeft: '3px' }}>Usuń</button>
        </>
      )}
    </div>
  );
};

export default Thread;
