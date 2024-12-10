import React from "react";
import Income from "../components/Income";

const Homepage = () => {
  return (
    <>
      <div className="grid grid-cols-2 p-3">
        <Income></Income>
        <div></div>
      </div>
    </>
  );
};

export default Homepage;
