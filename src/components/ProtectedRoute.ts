import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../Redux-Toolkit/Store/store";
import type { ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {

  const navigate = useNavigate()

  const { isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );


  //   if (loading) {
  //   return (
  //     <h1>
  //       Checking authentication...
  //     </h1>
  //   );
  // }


  if (!isAuthenticated) {
    navigate("/SignIn", { replace: true });
    return null;
  }

  return children
};

export default ProtectedRoute;