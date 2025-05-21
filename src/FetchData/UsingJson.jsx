import React, { useEffect, useState } from "react";
import db from '../../src/Utils/Utils.json';

const UsingJson = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Set authors from JSON
    setPosts(db.authors);
    console.log(db.authors.length)
  }, []);

  return (
    <>
    <ol>
        {posts.map((post) => (
            <li key={post.id}>
                {post.firstName}
            </li>
        ))}
        <p>{posts.length}</p>
        
        
     </ol>
    </>
  );
};

export default UsingJson;
