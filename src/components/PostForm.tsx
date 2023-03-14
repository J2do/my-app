import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { IPost } from "../App";

export interface FormProps {
  create(post: IPost): void;
}

const PostForm: React.FC<FormProps> = ({ create }) => {
  const [postDraft, setPostDraft] = useState<Omit<IPost, "id">>(() => ({
    title: "",
    body: "",
  }));

  const addNewPost = (e: any) => {
    e.preventDefault();
    create({ ...postDraft, id: Date.now() });
    setPostDraft({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={postDraft.title}
        onChange={(e: any) =>
          setPostDraft({ ...postDraft, title: e.target.value })
        }
        type="text"
        placeholder="poster"
      />
      <MyInput
        value={postDraft.body}
        onChange={(e: any) =>
          setPostDraft({ ...postDraft, body: e.target.value })
        }
        type="text"
        placeholder="roadster"
      />
      <MyButton onClick={addNewPost}>Add</MyButton>
    </form>
  );
};
export default PostForm;
