import React from "react";
import PostList from "./components/PostList";

const App = () => {
  return (
    <div>
      <PostList
        posts={posts}
        title={"title"}
        remove={this.remove}
        post={undefined}
        index={undefined}
      />
    </div>
  );
};

export default App;
