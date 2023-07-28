export const sidebar_links = [
  {
    name: "AdminDashboard",
    label: "Dashboard",
    icon: "speedometer2",
  },
  
  {
    name: null,
    label: "Creation",
    icon: "person-fill-add",
    children: [
      {
        name: "ViewAeps",
        label: "Customer Kyc",
        icon: "buildings-fill",
      },

      {
        name: "ViewUserBank",
        label: "Gold  Loan",
        icon: "buildings-fill",
      },
    ],
  },
  {
    name: null,
    label: "Transaction",
    icon: "cash-coin",
    children: [
      {
        name: "CreateAeps",
        label: "Payment",
        icon: "",
      },
      {
        name: "Receipt",
        label: "Receipt ",
        icon: "",
      },
    ],
  },

  
  
  
  {
    name: null,
    label: "Report",
    icon: "gear-fill",
    children: [
      {
        name: "ViewAeps",
        label: "Customer  Detail",
        icon: "gear-fill",
      },
      {
        name: "ViewUserBank",
        label: "Loan Outstanding",
        icon: "gear-fill",
      },
      {
        name: "",
        label: "Loan Schedule",
        icon: "gear-fill",
      },
      {
        name: "",
        label: "Loan Mortgage Report",
        icon: "gear-fill",
      },
      {
        name: "",
        label: "Loan NOC",
        icon: "gear-fill",
      },
      {
        name: "",
        label: "Loan Statement ",
        icon: "gear-fill",
      },
      {
        name: "",
        label: "Loan Deposit Report ",
        icon: "gear-fill",
      },
      
    ],
  },
  
  {
    name: null,
    label: "Parameters",
    icon: "person-fill-add",
    children: [
      // {
      //         name: "CreateState",
      //         label: "State",
      //         icon: "buildings-fill",
      //       },
           
      //       {
      //         name: "CreateCity",
      //         label: "City",
      //         icon: "buildings-fill",
      //       },
      {
        name: "CreateUser",
        label: "User Creation",
        icon: "person-fill-add",
      },
      // {
      //   name: "CreateLedger",
      //   label: "Ledger Creation",
      //   icon: "person-fill-add",
      // },
      // {
      //   name: "CreateGold",
      //   label: "Gold Item Creation",
      //   icon: "person-fill-add",
      // },
    ],
  },
];

// {
  //   name: null,
  //   label: "Admin",
  //   icon: "fan",
  //   children: [
    //     {
      //       name: "CreateAdmin",
      //       label: "Add Admin",
//       icon: "fan",
//     },
//     {
//       name: "ViewAdmin",
//       label: "View Admin",
//       icon: "fan",
//     },
//   ],
// },