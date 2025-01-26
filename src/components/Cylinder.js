export default function Cylinder({ cylinder }) {
  return (
    <div>
      <li className="product-item">
        <img
          src={cylinder.picture}
          alt={cylinder.name}
          className="product-image"
        />
        <span className="product-name">{cylinder.name}</span>
        <span className="product-quantity">size: {cylinder.size}</span>{" "}
      </li>
    </div>
  );
}
