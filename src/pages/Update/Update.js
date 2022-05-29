import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useToolDetail from "../hooks/useToolDetail";

const Update = () => {
  const { toolId } = useParams();
  const [tool] = useToolDetail(toolId);

  const [delevered, setDelevered] = useState();

  const handleDelever = () => {
    const perviousQty = tool.quantity;
    setDelevered(perviousQty - 1);
  };
  console.log(delevered);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
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
      <div className="card lg:max-w-lg  bg-base-100 shadow-xl pl-10">
        <p className="py-4">
          <b>Available Quantity:</b> {delevered}
        </p>
        <p className="py-4">
          <b>Price:</b> ${tool?.price}
        </p>
        <p className="py-4">
          <b>Supplier:</b> {tool?.Supplier}
        </p>
        <button
          onClick={handleDelever}
          className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary mr-10"
        >
          DELIVERED
        </button>
      </div>
    </div>
  );
};

export default Update;
