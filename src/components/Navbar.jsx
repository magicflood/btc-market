import React from 'react'
import logo from "../img/Frame (15).svg"

export default function Navbar() {
  return (
    <>
      <nav className='pt-[35px] pb-[35px]'>
        <div className='w-[1200px] mx-auto'>
          <div className='flex items-center justify-between'>
            <img className='duration-[200ms] hover:scale-[1.1] hover:cursor-pointer' src={logo} alt="img" />
            <ul className='flex items-center gap-[35px]'>
              <select name="" id=""><option><li><a className='text-[16px] text-[#18181B] font-[Lexend] font-[400]' href="#">Products</a></li></option></select>
              <select name="" id=""><option><li><a className='text-[16px] text-[#18181B] font-[Lexend] font-[400]' href="#">Prices</a></li></option></select>
              <select name="" id=""><option><li><a className='text-[16px] text-[#18181B] font-[Lexend] font-[400]' href="#">Buy</a></li></option></select>
              <select name="" id=""><option><li><a className='text-[16px] text-[#18181B] font-[Lexend] font-[400]' href="#">OTC</a></li></option></select>
              <select name="" id=""><option><li><a className='text-[16px] text-[#18181B] font-[Lexend] font-[400]' href="#">Learn</a></li></option></select>
              <select name="" id=""><option><li><a className='text-[16px] text-[#18181B] font-[Lexend] font-[400]' href="#">Help</a></li></option></select>
            </ul>
            <div className='flex items-center gap-[8px]'>
              <button className='w-[70px] h-[35px] border-[1px] border-[#18181B] rounded-[6px] text-[16px] text-[#18181B] font-[Lexend] font-[400] duration-[200ms] hover:scale-[1.1]'>Log in</button>
              <button className='w-[70px] h-[35px] rounded-[6px] text-[16px] text-[#18181B] font-[Lexend] font-[400] bg-[#4CFDC7] duration-[200ms] hover:scale-[1.1]  '>Sign up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
