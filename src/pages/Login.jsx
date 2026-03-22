function LoginPage (){

        e.preventDefault() 
        const form = e.target 
        const formData = new FormData(form) 
        const data = Object.fromEntries(formData) 
        console.log(data) 
        const dataFromLS = JSON.parse(localStorage.getItem("users")) 
        const userFound = dataFromLS.find(user => user.email === data.email)

}