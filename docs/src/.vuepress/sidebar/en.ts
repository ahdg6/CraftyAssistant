import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Docs",
      icon: "document",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
