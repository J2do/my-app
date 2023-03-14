import { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/window/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePost";

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
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sortKey, filter.query);

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post: IPost) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create!
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
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
