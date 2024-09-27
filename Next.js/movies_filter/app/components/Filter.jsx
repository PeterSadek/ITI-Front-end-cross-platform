import React from "react";

const Filter = ({ asc, desc, recent }) => {
  return (
    <div className="flex justify-end mb-3 mr-0 md:mr-12">
      <details className="dropdown align-end">
        <summary className="btn m-1">Filter</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <button onClick={recent}>Most Recent</button>
          </li>
          <li>
            <button onClick={asc}>A to Z</button>
          </li>
          <li>
            <button onClick={desc}>Z to A</button>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default Filter;
