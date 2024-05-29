import React from 'react';


const Comment = ({ comment }) => {
  const { author, content, date } = comment;

  return (
    <div className="comment">
      <div className="author">{author}</div>
      <div className="content">{content}</div>
      <div className="date">{date}</div>
    </div>
  );
};

export default Comment;