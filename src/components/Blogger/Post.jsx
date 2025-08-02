import React from "react";

const Post = ({ title, content, fecha }) => {
  return (
    <div className="box-post">
      <h4>{title}</h4>
      <h6>{fecha}</h6>
      <p>{content}</p>
    </div>
  );
};

export default Post;
