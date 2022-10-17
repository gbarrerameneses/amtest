
import { useState, useEffect } from 'react'
import React from 'react'

const ItemListContainer = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       fetch('http://localhost:5000/characters')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
    
  return (
    <>
      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div className="post-card" key={post.name}>
              <div>
                <div className="post-body">
                  <img src={post.image} />
                </div>
              </div>
              <div>
                <h2 className="post-title">{post.name}</h2>
                <p className="post-body">{post.dateOfBirth}</p>
                <p className="post-body">{post.eyeColour}</p>
                <p className="post-body">{post.hairColour}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ItemListContainer