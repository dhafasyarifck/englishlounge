import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "Program",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "For Children",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "For Teenagers",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "TOEFL Preparation",
        path: "/",
        newTab: false,
      },
      {
        id: 44,
        title: "IELTS Preparation",
        path: "/",
        newTab: false,
      },
      {
        id: 45,
        title: "TOEIC Preparation",
        path: "/",
        newTab: false,
      },
      {
        id: 46,
        title: "Duolingo Preparation",
        path: "/",
        newTab: false,
      },
      {
        id: 47,
        title: "Cambridge Preparation",
        path: "/signup",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Test English Language",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Test Consultation",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "TOEFL Official",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "TOEFL (GE-EPT)",
        path: "/",
        newTab: false,
      },
      {
        id: 44,
        title: "IELTS Prediction",
        path: "/",
        newTab: false,
      },
      {
        id: 45,
        title: "IELTS Official",
        path: "/",
        newTab: false,
      },
      {
        id: 46,
        title: "TOEIC Prediction",
        path: "/signup",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "About Me",
    path: "/about",
    newTab: false,
  },
];
export default menuData;
