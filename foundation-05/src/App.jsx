import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [seconds, setSeconds] = useState(10);

  // Countdown timer
  useEffect(() => {
    if (seconds <= 0) return;
    const timerId = setTimeout(() => {
      setSeconds((current) => Math.max(current - 1, 0));
    }, 1000);
    return () => {
      clearTimeout(timerId); 
    };
  }, [seconds]); 

  // Fetch posts
  useEffect(() => {
    const controller = new AbortController();

    async function loadPost() {
      try {
        setStatus("loading");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5", 
          { signal: controller.signal }
        );
        const data = await response.json(); 
        setPosts(data);
        setStatus("success");
      } catch (error) {
        setStatus(error,"error"); 
      }
    }

    loadPost();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <div>UseEffect</div>
      <h1>{seconds}</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>Something went wrong.</p>}
      {status === "success" && posts.map((post) => (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
               <p key={post.id}>{post.title}{post.userId}{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;