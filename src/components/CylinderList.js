import Cylinder from "./Cylinder";
import allCylinders from "../data/demo-cylinders.js";

export default function CylinderList() {
  return (
    <div className="list-container">
      <ul className="product-list">
        {allCylinders.map((cylinder) => (
          <Cylinder cylinder={cylinder} />
        ))}
      </ul>
    </div>
  );
}
