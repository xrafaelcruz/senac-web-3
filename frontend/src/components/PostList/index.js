import React, { useState, useEffect, useCallback } from 'react';
import Post from './Post';

const PostList = ({ postList, filter }) => {
    const [list, setList] = useState(postList)
    const [notFound, setNotFound] = useState(false);

    const filterPosts = useCallback(() => {
        const filterLowerCase = filter.toLowerCase();

        const filtereds = postList.filter(post => 
            post.title.toLowerCase().includes(filterLowerCase) || 
            post.text.toLowerCase().includes(filterLowerCase)
        );

        if (filtereds.length) {
            setNotFound(false);
        } else {
            setNotFound(true);
        }

        return filtereds; 
    }, [postList, filter])

    useEffect(() => {
        if (filter) {
            setList(filterPosts());
        } else {
            setList(postList)
            setNotFound(false);
        }
    }, [filter, postList, filterPosts]);

    return (
        <>
            {list?.map((post, i) => (<Post post={post} key={i} />))}
            {notFound && <div>Nenhum resultado foi encontrado</div>}
        </>
    );
};

export default PostList;