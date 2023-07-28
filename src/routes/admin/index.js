export const admin_routes = [
  {
    name: "AdminLogin",
    path: "/admin-xpanel/login",
    component: () => import("@/views/admin/pages/Login"),
  },
  
  {
    path: "/admin-xpanel",
    component: () => import("@/views/admin/Layout"),
    // meta: {
    //   middleware: "auth"
    // },
    children: [{
        path: "",
        name: "AdminDashboard",
        component: () => import("@/views/admin/pages/Dashboard"),
      },
      {
      path: "changepassword",
      name: "ChangePassword",
      component: () => import("@/views/admin/pages/ChangePassword/Create"),
      },

      {
        path: "user",
        name: "ViewUser",
        component: () => import("@/views/admin/pages/Parameters/AddUser/Index"),
      },
      {
        path: "user/create",
        name: "CreateUser",
        component: () => import("@/views/admin/pages/Parameters/AddUser/Create"),
      },
      {
        path: "user/edit/:id",
        name: "EditUser",
        component: () => import("@/views/admin/pages/Parameters/AddUser/Edit"),
      },

      // {
      //   path: "admin",
      //   name: "ViewAdmin",
      //   component: () => import("@/views/admin/pages/Admin/Index"),
      // },
      // {
      //   path: "admin/create",
      //   name: "CreateAdmin",
      //   component: () => import("@/views/admin/pages/Admin/Create"),
      // },
      // {
      //   path: "marchantservice/create",
      //   name: "CreateUserBank",
      //   component: () => import("@/views/admin/pages/MarchantService/Create"),
      // },
     
      // {
      //   path: "marchantservice/edit/:id",
      //   name: "EditMarchantService",
      //   component: () => import("@/views/admin/pages/MarchantService/Edit"),
      // },
      {
        path: "kyc",
        name: "CreateBank",
        component: () => import("@/views/admin/pages/Kyc/Create"),
      },
      {
        path: "kycindex",
        name: "ViewAeps",
        component: () => import("@/views/admin/pages/Kyc/Index"),
      },
      {
        path: "kycedit/Edit/:id",
        name: "EditKyc",
        component: () => import("@/views/admin/pages/Kyc/Edit"),
      },
      {
        path: "goldloan/create",
        name: "ViewBank",
        component: () => import("@/views/admin/pages/GoldLoan/Create"),
      },
      {
        path: "goldloan/Edit/:id",
        name: "EditBank",
        component: () => import("@/views/admin/pages/GoldLoan/Edit"),
      },
      {
        path: "marchantservice",
        name: "ViewUserBank",
        component: () => import("@/views/admin/pages/GoldLoan/Index"),
      },
      // {
      //   path: "company/updatekyc",
      //   name: "UpdateKyc",
      //   component: () => import("@/views/admin/pages/CompanyM/updatekyc"),
      // },
      // {
      //   path: "company/edit/:id",
      //   name: "EditCompany",
      //   component: () => import("@/views/admin/pages/CompanyM/Edit"),
      // },
     
      
      {
        path: "Payment/create",
        name: "CreateAeps",
        component: () => import("@/views/admin/pages/Payment/Create"),
      },
      {
        path: "Payment/create",
        name: "CreateAeps",
        component: () => import("@/views/admin/pages/Payment/Create"),
      },
      {
        path: "Payment",
        name: "Receipt",
        component: () => import("@/views/admin/pages/Payment/Receipt"),
      },


      {
        path: "city/create",
        name: "CreateCity",
        component: () => import("@/views/admin/pages/Parameters/AddCity/Create"),
      },
      
      
      {
        path: "city/edit/:id",
        name: "EditCity",
        component: () => import("@/views/admin/pages/Parameters/AddCity/Edit"),
      },
      {
        path: "state/create",
        name: "CreateState",
        component: () => import("@/views/admin/pages/Parameters/AddState/Create"),
      },
      
      {
        path: "state/edit/:id",
        name: "EditState",
        component: () => import("@/views/admin/pages/Parameters/AddState/Edit"),
      },
      

      {
        path: "city/create",
        name: "CreateLedger",
        component: () => import("@/views/admin/pages/Parameters/AddCity/Create"),
      },
      
      
      // {
      //   path: "city/edit/:id",
      //   name: "EditLedger",
      //   component: () => import("@/views/admin/pages/Parameters/AddLedger/Edit"),
      // },
      {
        path: "state/create",
        name: "CreateGold",
        component: () => import("@/views/admin/pages/Parameters/AddGoldItem/Create"),
      },
      
      // {
      //   path: "state/edit/:id",
      //   name: "EditGold",
      //   component: () => import("@/views/admin/pages/Parameters/AddGoldItem/Edit"),
      // },
      // {
      //   path: "cadre/create",
      //   name: "CreateCadre",
      //   component: () => import("@/views/admin/pages/Cadre/Create"),
      // },
      // {
      //   path: "adviser/create",
      //   name: "CreateAdviser",
      //   component: () => import("@/views/admin/pages/Adviser/Create"),
      // },
      // {
      //   path: "adviser",
      //   name: "ViewAdviser",
      //   component: () => import("@/views/admin/pages/Adviser/Index"),
      // },

    ],
  },
];