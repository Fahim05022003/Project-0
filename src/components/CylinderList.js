import Cylinder from "./Cylinder";
import allCylinders from "../data/demo-cylinders.js";
import { useState } from "react";

export default function CylinderList() {
  const [Cylinders, setCylinders] = useState(allCylinders);

  function handleCount(id, newcount) {
    setCylinders((allCylinders) =>
      allCylinders.map((cylinder) =>
        cylinder.id === id ? { ...cylinder, count: newcount } : cylinder
      )
    );
  }
  return (
    <div className="list-container">
      <ul className="product-list">
        {
          //passing the cylinders from state, not allCylinders
          Cylinders.map((cylinder) => (
            <Cylinder cylinder={cylinder} handleCount={handleCount} />
          ))
        }
      </ul>
    </div>
  );
}
