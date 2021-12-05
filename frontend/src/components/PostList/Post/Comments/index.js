import React from "react";
import Comment from './Comment'
import './styles.css';

const Comments = ({ comments }) => (
    <div className="comments mb-3">
        {comments.map((comment, i) => (
            <Comment comment={comment} key={i} />
        ))}
    </div>
);

export default Comments;