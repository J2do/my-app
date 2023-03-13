import React from "react";
import PostItem from "./PostItem";

interface ListProps {
  posts: any;
  title: string;
  remove: any;
  post: any;
  index: any;
}
const PostList: React.FC<ListProps> = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Not Found!!!</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "5%" }}>{title}</h1>
      {posts.map(({ post, index }: ListProps) => (
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
