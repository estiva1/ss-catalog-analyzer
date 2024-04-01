import vendors from "../assets/vendors-icon.svg";
import profitableSkus from "../assets/profitable-skus-icon.svg";
import profit from "../assets/profit-icon.svg";
import uncheckedVendors from "../assets/uchecked-vendors-icon.svg";

import userOne from "../assets/user-example-1.jpg";
import userTwo from "../assets/user-example-2.jpg";
import userThree from "../assets/user-example-3.jpg";
import userFour from "../assets/user-example-4.jpg";
import userFive from "../assets/user-example-5.jpg";

import vendorKehe from "../assets/kehe-icon.png";

export const topCardsContent = [
  {
    name: "Vendors",
    value: "000",
    image: vendors,
    cardColor: "rgba(21, 101, 216, 0.03)",
    cardBorder: "#1565D8",
  },
  {
    name: "Profitable SKUs",
    value: "0000",
    image: profitableSkus,
    cardColor: "rgba(0, 156, 52, 0.03)",
    cardBorder: "#009C34",
  },
  {
    name: "Profit",
    value: "0000",
    image: profit,
    cardColor: "rgba(143, 90, 255, 0.03)",
    cardBorder: "#8F5AFF",
  },
  {
    name: "Unchecked Vendors",
    value: "0000",
    image: uncheckedVendors,
    cardColor: "rgba(255, 153, 0, 0.05)",
    cardBorder: "#FF9900",
  },
];

export const vendorFolderBarData = [
  {
    option: "Wholesale",
    users: [
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
    vendor: {
      vendorName: "Kehe",
      vendorImage: vendorKehe,
    },
    moneyAmounts: {
      catalog: [
        {
          label: "Potential\nNew Orders:",
          value: 3293,
          tooltipText: "Some text",
        },
        {
          label: "Estimated\nProfit:",
          value: 126,
          tooltipText: "Some text",
        },
      ],
      reorders: [
        {
          label: "Potential\nReorders:",
          value: 687,
          tooltipText: "Some text",
        },
        {
          label: "Estimated\nProfit:",
          value: -2982,
          tooltipText: "Some text",
        },
      ],
      vendorSales: [
        {
          label: "Total\nSales:",
          value: 2982,
          tooltipText: "Some text",
        },
        {
          label: "Actual\nProfit:",
          value: -1980,
          tooltipText: "Some text",
        },
      ],
    },
    tasksAndSkus: {
      openTasks: 25,
      totalSkus: 1222,
      notVerifiedSkus: 120,
      dateUploaded: "04 Jan 2023",
    },
  },
  {
    option: "Retail",
    users: [
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
    vendor: {
      vendorName: "¯\\_(ツ)_/¯",
      vendorImage: null,
    },
    moneyAmounts: {
      catalog: [
        {
          label: "Potential\nNew Orders:",
          value: 4771,
          tooltipText: "Some text",
        },
        {
          label: "Estimated\nProfit:",
          value: -2982,
          tooltipText: "Some text",
        },
      ],
      reorders: [
        {
          label: "Potential\nReorders:",
          value: 29825,
          tooltipText: "Some text",
        },
        {
          label: "Estimated\nProfit:",
          value: -2982.3,
          tooltipText: "Some text",
        },
      ],
      vendorSales: [
        {
          label: "Total\nSales:",
          value: -19.35,
          tooltipText: "Some text",
        },
        {
          label: "Actual\nProfit:",
          value: -2982,
          tooltipText: "Some text",
        },
      ],
    },
    tasksAndSkus: {
      openTasks: 25,
      totalSkus: 560,
      notVerifiedSkus: 153,
      dateUploaded: "04 Jan 2023",
    },
  },
  {
    option: "Wholesale",
    users: [
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
    vendor: {
      vendorName: "ABC",
      vendorImage: null,
    },
    moneyAmounts: {
      catalog: [
        {
          label: "Potential\nNew Orders:",
          value: 3293,
          tooltipText: "Some text",
        },
        {
          label: "Estimated\nProfit:",
          value: -2982,
          tooltipText: "Some text",
        },
      ],
      reorders: [
        {
          label: "Potential\nReorders:",
          value: 29825,
          tooltipText: "Some text",
        },
        {
          label: "Estimated\nProfit:",
          value: -2982,
          tooltipText: "Some text",
        },
      ],
      vendorSales: [
        {
          label: "Total\nSales:",
          value: 2982,
          tooltipText: "Some text",
        },
        {
          label: "Actual\nProfit:",
          value: -2982,
          tooltipText: "Some text",
        },
      ],
    },
    tasksAndSkus: {
      openTasks: 40,
      totalSkus: 100,
      notVerifiedSkus: 47,
      dateUploaded: "04 Jan 2023",
    },
  },
  {
    option: "Wholesale",
    users: null,
    vendor: {
      vendorName: "--",
      vendorImage: null,
    },
    moneyAmounts: {
      catalog: [
        {
          label: "Potential\nNew Orders:",
          value: null,
          tooltipText: "Some text",
        },
        {
          label: "Estimated\nProfit:",
          value: null,
          tooltipText: "Some text",
        },
      ],
      reorders: [
        {
          label: "Potential\nReorders:",
          value: 0.06,
          tooltipText: "Some text",
        },
        {
          label: "Estimated\nProfit:",
          value: null,
          tooltipText: "Some text",
        },
      ],
      vendorSales: [
        {
          label: "Total\nSales:",
          value: null,
          tooltipText: "Some text",
        },
        {
          label: "Actual\nProfit:",
          value: null,
          tooltipText: "Some text",
        },
      ],
    },
    tasksAndSkus: {
      openTasks: 15,
      totalSkus: 430,
      notVerifiedSkus: 300,
      dateUploaded: "04 Jan 2023",
    },
  },
  {
    option: "Retail",
    users: [
      {
        id: 4,
        name: "Agnes Walker",
        avatar: null,
      },
    ],
    vendor: {
      vendorName: "Kehe",
      vendorImage: vendorKehe,
    },
    moneyAmounts: {
      catalog: [
        {
          label: "Potential\nNew Orders:",
          value: 3293,
          tooltipText: "Some text",
        },
        {
          label: "Estimated\nProfit:",
          value: -2982,
          tooltipText: "Some text",
        },
      ],
      reorders: [
        {
          label: "Potential\nReorders:",
          value: 29825,
          tooltipText: "Some text",
        },
        {
          label: "Estimated\nProfit:",
          value: -2982,
          tooltipText: "Some text",
        },
      ],
      vendorSales: [
        {
          label: "Total\nSales:",
          value: 2982,
          tooltipText: "Some text",
        },
        {
          label: "Actual\nProfit:",
          value: -2982,
          tooltipText: "Some text",
        },
      ],
    },
    tasksAndSkus: {
      openTasks: 15,
      totalSkus: 50,
      notVerifiedSkus: 44,
      dateUploaded: "04 Jan 2023",
    },
  },
];
