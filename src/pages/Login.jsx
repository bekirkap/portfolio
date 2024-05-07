import { useState } from "react"
import tiger from "../img/pngwing.com.png"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log({email, password});
    if (email == "admin@gmail.com" && password == "123456") {
      // login({email, password}) 

    } else {
      alert("Please enter valid user information")
    }
  }


  return (
 <div className="login">
    <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-[15px] p-5 flex flex-col items-center">
      <div>
      <h1 className=" font-montserrat text-[2rem] font-[550] flex items-center gap-2">
        <span>
          <img src={tiger} width={"35px"}alt="" />
        </span>
        KAPLAN STORE
        </h1>
        </div>
        <div className="font-montserrat font-[550] mt-5">
          <h3 className=" text-center">SIGN IN</h3>
          <p className=" text-labelColor text-label mt-2">Enter your credentials to acces your account</p>

        </div>
        <form onSubmit={handleSubmit} className="flex flex-col text-left mt-3 p-1 font-montserrat">
          <div className="flex flex-col gap-1  ">
            <label htmlFor="email" className=" text-label hover:cursor-pointer hover:after:content-['admin@gmail.com'] hover:after:pl-3 hover:after:text-labelColor">Email</label>
            <input type="email"  placeholder="Enter your email" className="login-input" id="email" onChange={e=> setEmail(e.target.value)}/>
       
          </div>
          <div className="flex flex-col gap-1  ">
          <label htmlFor="password" 
          className=" text-label hover:cursor-pointer hover:after:content-['123456'] hover:after:pl-3 hover:after:text-labelColor mt-3" >Password</label>
            <input type="password"  placeholder="Enter your password" className="login-input"
            id="password" onChange={e=> setPassword(e.target.value)}/>
       
          </div>
            <button type="submit" className=" bg-main h-[44px] mt-3 rounded-[4px] text-white hover:opacity-80">
              Sign In
            </button>

            <p className="text-center flex flex-wrap justify-center font-montserrat mt-3">
              <span className=" text-label text-labelColor">Forgot your password?</span>
              <span className="text-label text-main underline ml-2 cursor-pointer">Reset password</span>
            </p>

        </form>
    </div>
 </div>
  )
}

export default Login