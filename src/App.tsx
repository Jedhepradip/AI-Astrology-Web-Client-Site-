import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import { useEffect } from "react";
import { checkAuth } from "./Redux-Toolkit/Features/authSlice";
import { useAppDispatch } from "./Redux-Toolkit/Hooks/hooks";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./Pages/Home";

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
