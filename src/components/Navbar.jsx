import React, { useContext, useState } from 'react'
import tiger from "../img/pngwing.com.png"
import { NavLink } from 'react-router-dom'
import { logoutIcon, openNavbar, closeNavbar } from '../helpers/icons'
import "../index.css"
import { AuthContext } from '../context/AuthProvider'

const Navbar = () => {
    const navigation = [
        {
          title: "Home",
          path: "/dashboard",
        },
        {
          title: "Products",
          path: "/dashboard/products",
        },
        {
          title: "About",
          path: "/dashboard/about",
        },]

const [show, setShow] = useState(false)
const {logout} = useContext(AuthContext)



  return (
    <nav className=' bg-navbarColor md:text-sm'>
        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">

            <div className="flex py-5 items-center justify-between md:block">
                <a href="/" className='flex items-center'>
                    <img src={tiger} width={50} height={50} alt="" />
                </a>
            <div className='md:hidden'>
                <button onClick={()=>setShow(!show)} className=' text-orange-300  hover:text-gray-800'>
                    {show? closeNavbar : openNavbar}
                </button>
            </div>
            </div>
            <div    className={ `${
            show ? "flex flex-col pb-2 " : "hidden"
          } md:flex md:flex-row flex-1 items-center `}>
                <ul className=" md:flex md:space-x-6">
                    
                    {navigation.map((item)=>(
                        <li key={item.title} className='font-medium flex md:flex justify-center text-orange-300'>
                            
                        <NavLink to={item.path} className={`block hover:bg-main rounded-full py-2 px-4 hover:text-white 
                   `}>
                            {item.title}
                            
                        </NavLink>
                    </li>

                    ))}
                                
                </ul>
                <div className='flex-1 gap-x-6 items-center justify-end mt-2 space-y-6 md:flex md:space-y-0 md:mt-0'>
                    <NavLink className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium text-orange-300 hover:bg-main hover:text-white active:bg-gray-900 rounded-full md:inline-flex"
                    to="/"
                    onClick={() => logout()}>
                        {logoutIcon} 
                    </NavLink>    
                </div>
            </div>
        


        </div>
        </nav>
  )
}

export default Navbar