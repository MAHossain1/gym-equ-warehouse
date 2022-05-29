import React from "react";
import { useParams } from "react-router-dom";
import useToolDetail from "../hooks/useToolDetail";

const Update = () => {
  const { toolId } = useParams();
  const [tool] = useToolDetail(toolId);
  return (
    <div className="card lg:max-w-lg  bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-3xl font-bold text-primary">
          Product Details
        </h2>
        <h2 className="card-title">Item Name: {tool?.name}</h2>
        <p className="py-4">
          <b>Description:</b> {tool?.description}
        </p>
      </div>
      <figure>
        <img src={tool?.image} alt="" />
      </figure>
    </div>
  );
};

export default Update;
