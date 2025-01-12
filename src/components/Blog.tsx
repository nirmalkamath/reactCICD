// Parent Component
import React from "react";
import Header from "./Header";
import Post from "./Post";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Blog: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "220px", width: "100%" }}>
      <Header title="My Blog" />
      <Post title="Post 1" content="This is the first post content." />
      <Post title="Post 2" content="This is the second post content." />
       <Post title="Post 3" content="This is the third post content." />
      <Footer />
      </div>
    </div>
  );
};

export default Blog;
