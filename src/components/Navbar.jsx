import React from 'react'
import Logo from "../images/Logo.svg"
const Navbar = () => {
  return (
    <div>
        <div className='flex items-center justify-between m-8 max-w-[1640px]'>
            <img src={Logo} width={150} height={83} className='ml-[100px]'/>
            <ul className='flex gap-x-12 font-poppins items-center cursor-pointer mr-[126px]'>
                <li>Home</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>About us</li>
                <button className='bg-slate-500 text-black rounded'>Login</button>
                <button className='bg-[#F48C06] text-white rounded-[80px]'>Sign up</button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar