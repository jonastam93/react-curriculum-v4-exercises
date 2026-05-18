import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);

  async function handleGetPost() {
    const data = await getSinglePost(1);
    setPost(data);
  }
  return (
    <div>
      <button onClick={handleGetPost}>Get Post</button>

      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}
