import Posts from "@/app/components/Posts";
import React from "react";

const AllPosts = ({ params }) => {
  return (
    <>
      <h1>Posts</h1>
      <Posts userId={params.userId} />
    </>
  );
};

export default AllPosts;
