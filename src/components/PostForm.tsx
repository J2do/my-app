import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

interface FormProps {
  create: any;
}

const PostForm: React.FC<FormProps> = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = ({ e }: any) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form>
      <MyInput
        value={post.title}
        onChange={({ e }: any) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="poster"
      />
      <MyInput
        value={post.body}
        onChange={({ e }: any) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="roadster"
      />
      <MyButton onClick={addNewPost}>Add</MyButton>
    </form>
  );
};
export default PostForm;
