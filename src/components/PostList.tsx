import React from "react";
import { IPost } from "../App";
import PostItem from "./PostItem";

interface ListProps {
  remove: Function;
  posts: IPost[];
  title: string;
}
const PostList: React.FC<ListProps> = (props) => {
  const { title, remove, posts } = props;

  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Not Found!!!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "5%" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
