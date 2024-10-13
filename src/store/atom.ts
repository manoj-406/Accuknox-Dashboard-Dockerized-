import { atom } from "recoil";

export const widgetsState = atom({
  key: "widgetsState",
  default: [
    {
      id: "1",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "1",
          name: " cloud Accounts",
          text: "Random text for Widget 1",
          image: "/1.png",
          visible: true,
        },
        {
          id: "2",
          name: "Cloud Account Risk Management",
          text: "Random text for Widget 2",
          image: "/2.png",
          visible: true,
        },
      ],
    },
    {
      id: "2",
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "3",
          name: "Top 5 NameSpace Specific Alert",
          text: "Random text for Widget 3",

          visible: true,
        },
        {
          id: "4",
          name: "WorkLoad Alert",
          text: "Random text for Widget 3",

          visible: true,
        },
      ],
    },
    {
      id: "3",
      name: "Registry Scan",
      widgets: [
        {
          id: "5",
          name: "Image Rosk Assesment ",
          text: "Random text for Widget 3",
          image: "/3.png",
          visible: true,
        },
        {
          id: "6",
          name: "Image Secuity Issue",
          text: "Random text for Widget 3",
          image: "/4.png",
          visible: true,
        },
      ],
    },
  ],
});

export const WidgetStatus = atom({
  key: "WidgetStatus",
  default: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
  },
});
