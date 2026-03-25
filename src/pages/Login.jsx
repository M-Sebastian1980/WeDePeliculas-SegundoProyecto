import { useEffect } from "react"
import { SubirUsuarios } from "../data/users"
import { useNavigate } from "react-router"


function LoginPage (){

    const navigate = useNavigate()

    function handleLogin (e){ 
        e.preventDefault() 
        const form = e.target 
        const formData = new FormData(form) 
        const data = Object.fromEntries(formData) 
        console.log(data) 
        const dataFromLS = JSON.parse(localStorage.getItem("users")) 
        const userFound = dataFromLS.find(user => user.email === data.email)
        if (!userFound){ 
            alert("Usuario No Encontrado") 
            delete userFound.password
            localStorage.setItem("auth",JSON.stringify({
            auth: true,
            ...userFound
            }))
            return 
        } 
        const passwordMatch = data.password === userFound.password 
        if(!passwordMatch){ 
            alert("Contraseña Incorrecta") 
            return 
        } 
        alert("Usuario Logueado")
        delete userFound.password
        localStorage.setItem("auth",JSON.stringify({
            auth: true,
            ...userFound
        }))
        useNavigate("/admin")
        
    }
    useEffect(()=>{
    function CheckAuth (){
    const userAuth = JSON.parse(localStorage.getItem("auth"))
    if(userAuth && userAuth.auth){
    navigate("/admin")
    return
    }
    }
    CheckAuth()
    SubirUsuarios()
    },[])

    return(
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
            required
          />
        </div>
        <button className="btn btn-primary w-100 shadow-sm" type="submit">
          Iniciar Sesión
        </button>
      </form>
        </div> 
       </div>
        </>
    )
}

export {
    LoginPage
}