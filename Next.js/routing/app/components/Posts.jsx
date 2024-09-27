"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const Posts = ({ userId }) => {
  const [postId, setPostId] = useState("");
  return (
    <div className="userId">
      <label htmlFor="postId">User ID:</label>
      <input
        placeholder="Enter Post ID"
        type="number"
        name="postId"
        id="postId"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />

      <Link className="userIdLink" href={`/users/${userId}/posts/${postId}`}>
        Show Details
      </Link>
    </div>
  );
};

export default Posts;
