import { Menu } from "@/types/menu";

const loginsData: Menu[] = [

{
    id: 3,
    title: "Departments",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Clinical Pathology",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Clinical Microbiology",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Clinical Biochemistry",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Molecular Biology",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Serology",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "Haematology",
        newTab: false,
        path: "/error",
      },
    ],
  },

];

export default loginsData;