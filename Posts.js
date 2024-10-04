import { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handlePost = () => {
    if (inputValue.trim() !== "") {
      setPosts([...posts, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escreva algo..."
      />
      <button onClick={handlePost}>Postar</button>

      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
