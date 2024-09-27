"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const Users = () => {
  const [userId, setUserId] = useState("");

  return (
    <div className="userId">
      <label htmlFor="userId">User ID:</label>
      <input
        placeholder="Enter User ID"
        type="number"
        name="userId"
        id="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <Link className="userIdLink" href={`/users/${userId}`}>
        Show Details
      </Link>
    </div>
  );
};

export default Users;
