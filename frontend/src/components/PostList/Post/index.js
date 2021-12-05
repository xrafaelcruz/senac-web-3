import React, { useState } from "react";
import Comments from './Comments'
import FormComment from './FormComment'
import './styles.css';

const Post = ({ post }) => {
    const [comments, setComments] = useState(post.comments || [])

    return (
        <article className="post mb-3">
            <h2>{post.title}</h2>
            <p>{post.text}</p>
        
            <Comments comments={comments} />
            <FormComment post={post} setComments={setComments} />
        </article>
    );
};

export default Post;