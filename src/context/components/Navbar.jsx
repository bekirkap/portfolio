import React from 'react'
import tiger from "../../img/pngwing.com.png"
import { NavLink } from 'react-router-dom'
import { logoutIcon, openNavbar } from '../../helpers/icons'

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






  return (
    <nav className=' bg-navbarColor md:text-sm'>
        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 flex px-8">

            <div className="flex py-5 md:block flex-column ">
                <a href="" className=''>
                    <img src={tiger} width={50} height={50} alt="" />
                </a>
            </div>
            <div className='md:hidden flex flex-1 justify-end'>
                <button>
                    {openNavbar}
                </button>
            </div>
            <div    className='md:flex md:flex-row flex-1 justify-end hidden'>
                <ul className=" md:flex md:space-x-6">
                    
                    {navigation.map((item)=>(
                        <li key={item.title}>
                            
                        <NavLink to={item.path}>
                            {item.title}
                            
                        </NavLink>
                    </li>

                    ))}
                    {logoutIcon}                  
                </ul>
            </div>
        


        </div>
        </nav>
  )
}

export default Navbar