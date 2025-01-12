import React from "react";

interface PostProps {
  title: string;
  content: string;
}

const Post: React.FC<PostProps> = ({ title, content }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default Post;
