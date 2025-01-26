const publicUrl = process.env.PUBLIC_URL;

const allCylinders = [
  {
    id: 1,
    name: "Laughs Gas",
    size: 12,
    isAvaiable: true,
    picture: `${publicUrl}/images/laughs.jpg`,
  },
  {
    id: 2,
    name: "Bashundhara LP Gas",
    size: 12,
    isAvaiable: false,
    picture: `${publicUrl}/images/bashundhara.png`,
  },
  {
    id: 3,
    name: "Green LP Gas",
    size: 24,
    isAvaiable: true,
    picture: `${publicUrl}/images/laughs.jpg`,
  },
  {
    id: 4,
    name: "Omera LPG",
    size: 24,
    isAvaiable: false,
    picture: `${publicUrl}/images/omera.png`,
  },
  {
    id: 5,
    name: "Delta LPG",
    size: 12,
    isAvaiable: true,
    picture: `${publicUrl}/images/delta.png`,
  },
  {
    id: 6,
    name: "Fresh LP Gas",
    size: 12,
    isAvaiable: true,
    picture: `${publicUrl}/images/fresh.jpg`,
  },
  {
    id: 7,
    name: "Jamuna Gas",
    size: 12,
    isAvaiable: true,
    picture: `${publicUrl}/images/jamuna.jpg`,
  },
];

export default allCylinders;
