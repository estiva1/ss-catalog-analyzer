import userOne from "../assets/user-example-1.jpg";
import userTwo from "../assets/user-example-2.jpg";
import userThree from "../assets/user-example-3.jpg";
import userFour from "../assets/user-example-4.jpg";
import userFive from "../assets/user-example-5.jpg";

import vendorKehe from "../assets/kehe-icon.png";

export const tasksTableData = [
  {
    id: 1,
    catalog: "KEHE Catalog",
    fileId: "B00006JPA6",
    vendor: {
      vendorImage: null,
      vendorName: "¯\\_(ツ)_/¯",
    },
    task: "Task Name Description",
    assignee: [
      {
        id: 2,
        name: "Travis Howard",
        avatar: userTwo,
      },
    ],
    dueDate: "13 Dec 2023",
    priority: "High",
  },
  {
    id: 2,
    catalog: "KEHE Catalog",
    fileId: "B00006JPA6",
    vendor: {
      vendorImage: vendorKehe,
      vendorName: "KEHE",
    },
    task: "Task Name Description",
    assignee: [
      {
        id: 1,
        name: "Remy Sharp",
        avatar: null,
      },
      {
        id: 2,
        name: "Travis Howard",
        avatar: userTwo,
      },
    ],
    dueDate: "13 Dec 2023",
    priority: "Normal",
  },
  {
    id: 3,
    catalog: "KEHE Catalog",
    fileId: "B00006JPA6",
    vendor: {
      vendorImage: vendorKehe,
      vendorName: "KEHE",
    },
    task: "Task Name Description",
    assignee: [
      {
        id: 1,
        name: "Remy Sharp",
        avatar: userOne,
      },
      {
        id: 3,
        name: "Cindy Baker",
        avatar: null,
      },
    ],
    dueDate: "13 Dec 2023",
    priority: "Normal",
  },
  {
    id: 4,
    catalog: "KEHE Catalog",
    fileId: "B00006JPA6",
    vendor: {
      vendorImage: vendorKehe,
      vendorName: "KEHE",
    },
    task: "Task Name Description",
    assignee: [
      {
        id: 1,
        name: "Remy Sharp",
        avatar: userOne,
      },
      {
        id: 2,
        name: "Travis Howard",
        avatar: userTwo,
      },
      {
        id: 3,
        name: "Cindy Baker",
        avatar: userThree,
      },
      {
        id: 4,
        name: "Agnes Walker",
        avatar: userFour,
      },
      {
        id: 5,
        name: "Trevor Henderson",
        avatar: userFive,
      },
    ],
    dueDate: "13 Dec 2023",
    priority: "Normal",
  },
  {
    id: 5,
    catalog: "KEHE Catalog",
    fileId: "B00006JPA6",
    vendor: {
      vendorImage: vendorKehe,
      vendorName: "KEHE",
    },
    task: "Task Name Description",
    assignee: [
      {
        id: 4,
        name: "Agnes Walker",
        avatar: null,
      },
    ],
    dueDate: "13 Dec 2023",
    priority: "Normal",
  },
  {
    id: 6,
    catalog: "KEHE Catalog",
    fileId: "B00006JPA6",
    vendor: {
      vendorImage: vendorKehe,
      vendorName: "KEHE",
    },
    task: "Task Name Description",
    assignee: [
      {
        id: 1,
        name: "Remy Sharp",
        avatar: userOne,
      },
      {
        id: 2,
        name: "Travis Howard",
        avatar: null,
      },
      {
        id: 3,
        name: "Cindy Baker",
        avatar: userThree,
      },
    ],
    dueDate: "13 Dec 2023",
    priority: "Normal",
  },
];
