// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// // import Card from "../screen/Card/Card";
// // import App from "../App";
// // import CardDetails from "../screen/CardDetails/CardDetails";
// // import CardApi from "../screen/CardData/CardApi";
// import Dashboard from "../dashboard/Dashboard";
// import Home from "../../pages/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   // {
//   //   path: "/card/:id",
//   //   element: </>,
//   // },
// ]);
// function Router() {
//   return <RouterProvider router={router} />;  
// }

// export default Router;


import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Card from "../screen/Card/Card";
// import App from "../App";
import Dashboard from "../dashboard/Dashboard";
import Carddetails from "../screen/CardDetails/Carddetails"
// import CardDetails from "../screen/CardDetails/CardDetails";
// import CardApi from "../screen/CardData/CardApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Carddetails/:id",
    element: <Carddetails />,
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;



// Router.js
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "../dashboard/Dashboard";
// import Carddetails from "../screen/CardDetails/Carddetails";

// function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/card/:id" element={<Carddetails />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default Router;

