import React from "react";
import Link from "next/link";

const UserDetails = ({ params }) => {
  return (
    <>
      <h1>User Details</h1>
      <h3>User ID: {params.userId}</h3>

      <Link className="userPostsLink" href={`/users/${params.userId}/posts`}>
        Show User Posts
      </Link>
    </>
  );
};

export default UserDetails;
