import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    function checkAuth() {
      const userAuth = JSON.parse(localStorage.getItem("auth"));

      if (!userAuth || !userAuth.auth) {
        alert("Debes iniciar sesión");
        navigate("/login");
      }
    }

    checkAuth();
  }, [navigate]);

  return <Outlet />;
}

export default ProtectedRoutes;