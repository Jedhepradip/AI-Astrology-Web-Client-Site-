// // // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // // // import ProtectedRoute from "./components/ProtectedRoute";

// // // import SignIn from "./Pages/Auth/SignIn";
// // // import SignUp from "./Pages/Auth/SignUp";

// // // import type React from "react";

// // // const AppRoutes: React.FC = () => {
// // //   return (
// // //     <BrowserRouter>
// // //       <Routes>              
// // //         <Route path="/signin" element={<SignIn />} />
// // //         <Route path="/signup" element={<SignUp />} />            
// // //       </Routes>
// // //     </BrowserRouter>
// // //   );
// // // };

// // // export default AppRoutes;


// // import { useEffect, Fragment } from "react";
// // import AppRoutes from "./AppRoutes";
// // import { useAppDispatch } from "./Redux-Toolkit/Hooks/hooks";
// // import { checkAuth } from "./Redux-Toolkit/Features/authSlice";
// // import type { BrowserRouterProps } from "react-router-dom";

// // function AppRoutes() {
// //   const dispatch = useAppDispatch();

// //   useEffect(() => {
// //     dispatch(checkAuth());
// //   }, [dispatch]);

// //   return (
   
// //   )
// // }

// // export default AppRoutes;

// import { Routes, Route } from "react-router-dom";

// import SignIn from "./Pages/Auth/SignIn";
// import SignUp from "./Pages/Auth/SignUp";
// import ProtectedRoute from "./components/ProtectedRoute";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* Public */}
//       <Route path="/signin" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} />

//       {/* Protected */}
//       <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         }
//       />

//       {/* Default */}
//       <Route path="*" element={<SignIn />} />
//     </Routes>
//   );
// };

// export default AppRoutes;
