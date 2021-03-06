import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://glacial-hamlet-68823.herokuapp.com/tool")
      .then(res => res.json())
      .then(data => setTools(data));
  }, []);

  return (
    <div className="my-20">
      <div className="text-center">
        <h2 className="text-primary text-3xl font-bold uppercase">
          Equipment for Body
        </h2>
        <h1 className="text-xl">NEW ARRIVALS</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map(tool => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
