import React from "react";
import './styles.css';

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <p className="comment-username">{comment?.username}</p>
            <p className="comment-text">{comment?.text}</p>
        </div>
    );
};

export default Comment;