import Cylinder from "./Cylinder";

const allCylinders = [
  {
    id: 1,
    name: "Laughs Gas",
    size: 12,
    isAvaiable: true,
    picture: "./public/images/laughs",
  },
  {
    id: 2,
    name: "Bashundhara LP Gas",
    size: 12,
    isAvaiable: false,
    picture: "./public/images/bashundhara",
  },
  {
    id: 3,
    name: "Green LP Gas",
    size: 24,
    isAvaiable: true,
    picture: "./public/images/omera",
  },
  {
    id: 4,
    name: "Omera LPG",
    size: 24,
    isAvaiable: false,
    picture: "./public/images/omera",
  },
  {
    id: 5,
    name: "Delta LPG",
    size: 12,
    isAvaiable: true,
    picture: "./public/images/delta",
  },
  {
    id: 6,
    name: "Fresh LP Gas",
    size: 12,
    isAvaiable: true,
    picture: "./public/images/fresh",
  },
  {
    id: 7,
    name: "Jamuna Gas",
    size: 12,
    isAvaiable: true,
    picture: "./public/images/jamuna",
  },
];

export default function CylinderList() {
  return (
    <div>
      <ul>
        {allCylinders.map((cylinder) => (
          <Cylinder cylinder={cylinder} />
        ))}
      </ul>
    </div>
  );
}
