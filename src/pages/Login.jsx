import { useEffect } from "react";
import { SubirUsuarios } from "../data/users";
import { useNavigate } from "react-router-dom";



function LoginPage() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const dataFromLS = JSON.parse(localStorage.getItem("users")) || [];
    const userFound = dataFromLS.find(user => user.email === data.email);

    if (!userFound) {
      alert("Usuario no encontrado");
      return;
    }

    const passwordMatch = data.password === userFound.password;

    if (!passwordMatch) {
      alert("Contraseña incorrecta");
      return;
    }

    alert("Usuario logueado");

    const userToSave = { ...userFound };
    delete userToSave.password;

    localStorage.setItem("auth", JSON.stringify({
      auth: true,
      ...userToSave
    }));

    navigate("/admin");
  }

  useEffect(() => {
    function checkAuth() {
      const userAuth = JSON.parse(localStorage.getItem("auth"));
      if (userAuth && userAuth.auth) {
        navigate("/admin");
      }
    }

    checkAuth();
    SubirUsuarios();
  }, [navigate]);

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
          <h1 className="text-center mb-4">Iniciar Sesión</h1>
          <form onSubmit={(e) => handleLogin(e)}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="ejemplo@correo.com"
                minLength={6}
                maxLength={20}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="********"
                minLength={8}
                maxLength={20}
                required
              />
            </div>
            <button className="btn btn-primary w-100 shadow-sm" type="submit">
              Iniciar Sesión
            </button>
            <button className="btn btn-secondary w-100 shadow-sm mt-2" type="button" onClick={() => navigate("/")}>
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export { LoginPage };