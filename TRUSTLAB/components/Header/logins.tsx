import { Menu } from "@/types/menu";

const loginsData: Menu[] = [
  {
    id: 1,
    title: "Login",
    newTab: false,
    submenu: [
      {
        id: 1,
        title: "Patients & Individuals",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 2,
        title: "Healthcare Professionals",
        newTab: false,
        path: "/doctor",
      },
      {
        id: 3,
        title: "Clinical Pathology",
        newTab: false,
        path: "/blog",
      },
    ],
  },

];

export default loginsData;
