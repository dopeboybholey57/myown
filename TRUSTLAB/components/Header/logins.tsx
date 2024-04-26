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
        path: "/auth/signind",
      },
      {
        id: 3,
        title: "Corporate",
        newTab: false,
        path: "/auth/signinc",
      },
    ],
  },

];

export default loginsData;
