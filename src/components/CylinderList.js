const allCylinders = [
  { id: 1, name: "Laughs Gas", size: 12, avaiable: true },
  { id: 2, name: "Bashundhara LP Gas", size: 12, avaiable: false },
  { id: 3, name: "Green LP Gas", size: 24, avaiable: true },
  { id: 4, name: "Omera LPG", size: 24, avaiable: false },
  { id: 5, name: "Delta LPG", size: 12, avaiable: true },
  { id: 6, name: "Fresh LP Gas", size: 12, avaiable: true },
  { id: 7, name: "Jamuna Gas", size: 12, avaiable: true },
];

export default function CylinderList() {
  return (
    <div>
      <ul>{allCylinders.map((cylinder) => cylinder.name + " ")}</ul>
    </div>
  );
}
