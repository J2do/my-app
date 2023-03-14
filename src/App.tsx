import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/window/MyModal";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "aaa", body: "zzz" },
    { id: 2, title: "ddd", body: "yyy" },
    { id: 3, title: "vvv", body: "www" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("work");
    if (filter.sort) {
      return [...posts].sort(({ a, b }: any) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = ({ newPost }: any) => {
    setPosts([...posts, newPost]);
  };

  const removePost = ({ post }: any) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyModal children={undefined}></MyModal>
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchPosts}
        title="POST R"
      />
    </div>
  );
}

export default App;
