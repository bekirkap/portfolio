import tiger from "../img/pngwing.com.png"

const Login = () => {
  return (
 <div className="login">
    <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-[15px] p-5 flex flex-col items-center">

      <h1 className=" font-montserrat text-[2rem] font-[550] flex items-center gap-2">
        <span>
          <img src={tiger} width={"35px"}alt="" />
        </span>
        KAPLAN STORE
        </h1>
        <div className="font-montserrat font-[550] mt-5">
          <h3 className="">SIGN IN</h3>
          <p className=" text-labelColor text-label mt-2">Enter your credentials to acces your account</p>

        </div>
        <form className="flex text-left mt-3 p-1 font-montserrat">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className=" text-label hover:cursor-pointer hover:after:content-['admin@gmail.com'] hover:after:pl-3 hover:after:text-labelColor">Email</label>
            <input type="email"  placeholder="Enter your email" className="login-input"/>
          </div>


        </form>
    </div>
 </div>
  )
}

export default Login