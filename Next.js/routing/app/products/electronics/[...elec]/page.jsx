import React from "react";

const ElectronicsList = ({ params }) => {
  return (
    // <>
    //   <h3>Electronics List:</h3>
    //   <ul>
    //     {params.elec.map((item) => {
    //       <li key={item}>{item}</li>;
    //     })}
    //   </ul>
    // </>
    <>
      <div>
        <div className="elecList">
          <h3>Electronics List:</h3>
          {params.elec.map((device) => (
            <h4 key={device}>{device}</h4>
          ))}
        </div>
      </div>
    </>
  );
};

export default ElectronicsList;
