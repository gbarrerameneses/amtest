
import { useState, useEffect } from 'react'
import React from 'react'

const ItemListContainer = () => {
    const [chars, setChars] = useState([]);

    useEffect(() => {
       fetch('http://localhost:5000/characters')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setChars(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
    
  return (
    <>
      <div className="container">
        {chars.map((post) => {
          return (
            <div className="card" key={post.name}>
              <div className="chars-card">
                <div className="chars-body-img">
                  <img src={post.image} />
                </div>
              </div>
              <div className="chars-body-info">
                <h2 className="chars-title">{post.name}</h2>
                <p className="chars-body">Cumpleaños: {post.dateOfBirth}</p>
                <p className="chars-body">Color de ojos: {post.eyeColour}</p>
                <p className="chars-body">Color de pelo: {post.hairColour}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ItemListContainer