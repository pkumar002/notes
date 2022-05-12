import type { NavbarConfig } from "@vuepress/theme-default";
export const navbar: NavbarConfig = [
  {
    text: "Vue",
    link: "/vue/",
    children: [
      {
        text: "pinia",
        link: "/vue/pinia/",
      },
    ],
  },
  {
    text: "React",
    link: "/react/",
  },
  // {
  //   test: "Angular",
  //   link: '/angular/'
  // },
  // {
  //   test: "Node",
  //   link: '/node/'
  // },
  // {
  //   test: "Mongo",
  //   link: '/mongo/'
  // }
];
