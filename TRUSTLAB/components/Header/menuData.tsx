import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Packages",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "Blogs",
    newTab: false,
    path: "/docs",
  },
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

  {
    id: 4,
    title: "Careers",
    newTab: false,
    path: "/support",
  },

  // {
  //   id: 5,
  //   title: "Packages",
  //   newTab: false,
  //   path: "/support",
  // },
];

export default menuData;
