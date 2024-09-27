import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="navigation">
      <Link href="/">Home</Link>
      <Link href="/contactus">Contact Us</Link>
      <Link href="/aboutus">About</Link>
      <Link href="/products">Products</Link>
      <Link href="/users">Users</Link>
    </ul>
  );
};

export default Navbar;
