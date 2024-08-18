import React from 'react'
import imgOne from "../img/IMAGE (24).svg"
import imgTwo from "../img/IMAGE (26).svg"
import imgThree from "../img/Frame (16).svg"

export default function Header() {
    return (
        <>
            <header className='pt-[150px]'>
                <div className='w-[1200px] mx-auto flex justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='text-[70px] text-[#18181B] font-[Lexend] font-[400]'>Buy, sell and trade <br /> crypto today</h1>
                        <p className='text-[20px] mt-[35px] text-[#18181B] font-[Lexend] font-[400]'>Trade with confidence and build your future <br /> with Australia’s fastest crypto exchange.</p>
                        <div className='flex items-center mt-[20px] gap-[30px]'>
                            <button className='w-[155px] h-[40px] bg-[#4CFDC7] border-none rounded-[4px] text-[16px] mt-[35px] text-[#18181B] font-[Lexend] font-[400] duration-[200ms] hover:scale-[1.1]'>Get started</button>
                            <button className='w-[190px] h-[40px] border-[1px] border-[#18181B] rounded-[4px] text-[16px] mt-[35px] text-[#18181B] font-[Lexend] font-[400] duration-[200ms] hover:scale-[1.1]'>View exchange</button>
                        </div>
                        <div className='flex items-center gap-[8px] mt-[20px]'>
                            <img src={imgTwo} alt="" /> 
                            <div className='flex items-center gap-[4px]'>
                                <img src={imgThree} alt="" />
                                <img src={imgThree} alt="" />
                                <img src={imgThree} alt="" />
                                <img src={imgThree} alt="" />
                                <img src={imgThree} alt="" />
                            </div>
                            <p>4.6</p>
                        </div>
                    </div>
                    <img src={imgOne} alt="" />
                </div>
            </header>
        </>
    )
}
