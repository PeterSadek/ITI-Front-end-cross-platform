"use client";

import React, { useState } from "react";
import Link from "next/link";

const Electronics = () => {
  const [firstDevice, setFirstDevice] = useState("");
  const [secondDevice, setSecondDevice] = useState("");
  const [thirdDevice, setThirdDevice] = useState("");
  return (
    <div className="elec">
      <h3>Enter Device Types:</h3>
      <div className="userId userElec">
        <label htmlFor="userId">Device 1:</label>
        <input
          placeholder="Enter Device Name"
          type="text"
          name="userId"
          id="userId"
          value={firstDevice}
          onChange={(e) => setFirstDevice(e.target.value)}
        />
      </div>

      <div className="userId userElec">
        <label htmlFor="userId">Device 2:</label>
        <input
          placeholder="Enter Device Name"
          type="text"
          name="userId"
          id="userId"
          value={secondDevice}
          onChange={(e) => setSecondDevice(e.target.value)}
        />
      </div>

      <div className="userId userElec">
        <label htmlFor="userId">Device 3:</label>
        <input
          placeholder="Enter Device Name"
          type="text"
          name="userId"
          id="userId"
          value={thirdDevice}
          onChange={(e) => setThirdDevice(e.target.value)}
        />
        <div className="userElec">
          <Link
            className="userIdLink link1"
            href={`/products/electronics/${firstDevice}/${secondDevice}/${thirdDevice}`}
          >
            Show Devices
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Electronics;
