// You will add code in this file
import React from 'react';
import Post from './Post';
import './Posts.css';

// pass props and map through the dummy data to display your posts
const PostsContainer = props => {
  return (
    <div className='posts-container-wrapper'>
      {props.postData.map(post => (
        <Post key={post.timestamp} post={post} />
      ))}
    </div>
  );
};

export default PostsContainer;
