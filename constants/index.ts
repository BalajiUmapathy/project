export const GenderOptions = ["male", "female", "other"];

export const UserFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  role: "",
  password:"",
  confirmpassword:"",
  
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  
 
};

export const IdentificationTypes = [
    "Aadhaar Card",
    "Voter ID Card",
    "PAN Card",
    "Passport",
    "Driving License",
    "Ration Card",
    "Birth Certificate",
    "Employee ID Card",
    "Student ID Card",
    "Health Insurance Card",
];

export const Role = [
  {
    
    name: "Dr. Devi Shetty -  Cardiology",
  },
  {
    
    name: "Dr. Ranjana Dhanu - Obstetrics and Gynecology",
  },
  {
   
    name: "Dr. Sudhansu Bhattacharyya -Neurology",
  },
  {
    
    name: "Dr. Ravi Sharma - Pediatrics",
  },
  {
    
    name: "Dr. Neha Patil - Dermatology",
  },
  
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};