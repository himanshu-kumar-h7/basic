// import React, { useEffect, useState } from 'react'

// const Fetch = () => {
//     const [data, setData] = useState([])

//     useEffect( () => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json())
//         .then(json => setData(json))
//         .catch(error => {
//             console.log(error)
//         })    
//     },[])



// return(
//     <>
//     <ul>
//         {data.map(post => (
//             <li key={post.id}>
//             {post.title}
//         </li>
//         )
//         )}
//     </ul>
    
//     </>
// )
// }

// export default Fetch



// import React, { useEffect, useState } from 'react';

// const Fetch = () => {
//   const [data, setData] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(5); // ⬅ Start with 5

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())
//       .then(json => setData(json))
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   // ⬇ Handler to increase visible count
//   const handleLoadMore = () => {
//     setVisibleCount(prev => prev + 10);
//   };

//   return (
//     <>
//       <ul>
//         {data.slice(0, visibleCount).map(post => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>

//       {/* ⬇ Show button only if there are more posts to load */}
//       {visibleCount < data.length && (
//         <button onClick={handleLoadMore}>Load More</button>
//       )}
//     </>
//   );
// };

// export default Fetch;


// 

import React, { useEffect, useState, useRef } from 'react';

const Fetch = () => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setFilteredData(json);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = data.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
      setVisibleCount(5); // Reset to initial count on new search
    }, 300); // debounce delay

    return () => clearTimeout(timer);
  }, [searchQuery, data]);

  const handleToggleShowAll = () => {
    const nextCount = visibleCount === filteredData.length ? 5 : filteredData.length;
    setVisibleCount(nextCount);

    setTimeout(() => {
      listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 100);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{ marginBottom: '1rem', padding: '0.5rem', width: '300px' }}
          />

          <ul>
            {filteredData.slice(0, visibleCount).map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>

          <div ref={listRef} />

          {filteredData.length > 5 && (
            <button onClick={handleToggleShowAll} disabled={isLoading}>
              {visibleCount === filteredData.length ? 'Show Less' : 'Show All'}
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Fetch;
