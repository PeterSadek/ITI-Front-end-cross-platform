import React from "react";

const PostDetails = ({ params }) => {
  return (
    <>
      <h3>Post ID: {params.postId}</h3>
      <h3>User ID: {params.userId}</h3>
    </>
  );
};

export default PostDetails;
