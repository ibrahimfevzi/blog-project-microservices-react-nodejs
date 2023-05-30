import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 id="title">
        Building an Interactive Application with React and Node.js Using
        Microservices Architecture
      </h1>
      <h2 id="by">İbrahim Fevzi Kayan (ibrahimfevzi@gmail.com)</h2>
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
export default App;
