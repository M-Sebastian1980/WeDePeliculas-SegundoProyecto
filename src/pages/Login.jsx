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
       <div className="container-form"> 
        <h1>Iniciar Sesion</h1> 
        <form onSubmit={(e)=>{handleLogin(e)}}> 
            <input
                className="input-email"
                type="email" 
                name="email" 
                placeholder="Email" 
                minLength={4} 
                maxLength={100}
                required
            /> 
            <input 
                className="input-password"
                type="password" 
                name="password" 
                placeholder="Contraseña" 
                minLength={8} 
                maxLength={100} 
                required
            /> 
            <button className="btn">Iniciar Sesion</button> 
            </form> 
       </div>
        </>
    )
}

export {
    LoginPage
}