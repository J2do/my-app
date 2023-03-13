import React from "react";
import MyButton from "./UI/button/MyButton";

interface ItemProps {
  props?: any;
  remove: any;
  number: number;
  post: any;
  key: number;
}

const PostItem: React.FC<ItemProps> = ({ props }) => {
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div>
        <MyButton onClick={() => props.remove(props.post)}>DELETE</MyButton>
      </div>
    </div>
  );
};
export default PostItem;
