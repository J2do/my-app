import React, { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts(...posts, newPost);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="POST R" />
    </div>
  );
}

export default App;