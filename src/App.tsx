import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/window/MyModal";

export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IFilter {
  sortKey?: keyof IPost;
  query: string;
}

function App() {
  const [posts, setPosts] = useState<IPost[]>([
    { id: 1, title: "aaa", body: "zzz" },
    { id: 2, title: "ddd", body: "yyy" },
    { id: 3, title: "vvv", body: "www" },
  ]);

  const [filter, setFilter] = useState<IFilter>({ query: "" });
  const { sortKey } = filter;

  const sortedPosts = useMemo(() => {
    if (sortKey) {
      return [...posts].sort((a, b) =>
        String(a[sortKey]).localeCompare(String(b[sortKey]))
      );
    }
    return posts;
  }, [sortKey, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: IPost) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      {/* <MyModal>{undefined}</MyModal> */}
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
