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
        path: "/for-children",
        newTab: false,
      },
      {
        id: 42,
        title: "For Teenagers",
        path: "/for-teenagers",
        newTab: false,
      },
      {
        id: 43,
        title: "For Adults",
        path: "/for-adults",
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
