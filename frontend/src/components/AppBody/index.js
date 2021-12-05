import React, { useState, useEffect } from 'react'
import Resume from 'components/Resume';
import Search from 'components/Search';
import PostList from 'components/PostList';

import { getPosts } from 'API/posts';

import './styles.css'

const AppBody = () => {
  const [postList, setPostList] = useState([]);
  const [filter, setFilter] = useState();

  const loadList = async () => {
    const posts =  await getPosts();
    setPostList(posts);
  }

  useEffect(() => {
    loadList();    
  }, []);

  return (
    <div className="row app-body">
        <div className="col-md-12 mt-2 d-flex justify-content-start align-items-start flex-column">
          <div className="container">
            <Resume postList={postList} />
            <Search setFilter={setFilter} />
            <PostList postList={postList} filter={filter} />
          </div>
        </div>
    </div>
  )
}

export default AppBody;