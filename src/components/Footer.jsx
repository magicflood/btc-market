import React from 'react'
import logo from "../img/Frame (15).svg"
import Twitter from "../img/Frame (39).svg"
import FaceBook from "../img/Frame (40).svg"
import Linkedin from "../img/Frame (41).svg"
import Telegram from "../img/Frame (42).svg"
import Instagram from "../img/Frame (43).svg"
import appstore from "../img/IMAGE (35).svg"
import playmarket from "../img/IMAGE (36).svg"

export default function Footer() {
    return (
        <>
            <footer className='pb-[65px]'>
                <div className='w-[1200px] mx-auto'>
                    <img className='duration-[200ms] hover:scale-[1.1] hover:cursor-pointer' src={logo} alt="logo" />
                    <div className='flex items-start justify-between'>
                        <ul>
                            <li className='mt-[70px]'><a className='text-[20px] text-[#18181B] font-[Lexend] font-[400] line-[12px]' href="#">About</a></li>
                            <li className='mt-[40px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">About us</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Mobile app</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Staking</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Self Managed Super Funds</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">OTC Trading</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">VIP Program</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Investor Study Report</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Contact Us</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Blog</a></li>
                        </ul>
                        <ul>
                            <li className='mt-[70px]'><a className='text-[20px] text-[#18181B] font-[Lexend] font-[400] line-[12px]' href="#">Legal</a></li>
                            <li className='mt-[40px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Privacy Policy</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Terms of Service</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">AML/CTF Policy</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Protect Yourself Online</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Information Requests</a></li>
                        </ul>
                        <ul>
                            <li className='mt-[70px]'><a className='text-[20px] text-[#18181B] font-[Lexend] font-[400] line-[12px]' href="#">Help</a></li>
                            <li className='mt-[40px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Support</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Complaints</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">FAQs</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Fees</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Bug Bounty</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">API</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Tax Reporting</a></li>
                        </ul>
                        <ul>
                            <li className='mt-[70px]'><a className='text-[20px] text-[#18181B] font-[Lexend] font-[400] line-[12px]' href="#">Follow</a></li>
                            <div className='flex flex-col justify-center items-start gap-[32px] mt-[40px]'>
                                <div className='flex items-center gap-[8px]'>
                                    <img src={Twitter} alt="img" />
                                    <p className='text-[12px] text-[#18181B] font-[Lexend] font-[400]'>Twitter</p>
                                </div>
                                <div className='flex items-center gap-[8px]'>
                                    <img src={FaceBook} alt="img" />
                                    <p className='text-[12px] text-[#18181B] font-[Lexend] font-[400]'>Facebook</p>
                                </div>
                                <div className='flex items-center gap-[8px]'>
                                    <img src={Linkedin} alt="img" />
                                    <p className='text-[12px] text-[#18181B] font-[Lexend] font-[400]'>LinkedIn</p>
                                </div>
                                <div className='flex items-center gap-[8px]'>
                                    <img src={Telegram} alt="img" />
                                    <p className='text-[12px] text-[#18181B] font-[Lexend] font-[400]'>Telegram</p>
                                </div>
                                <div className='flex items-center gap-[8px]'>
                                    <img src={Instagram} alt="img" />
                                    <p className='text-[12px] text-[#18181B] font-[Lexend] font-[400]'>Instagram</p>
                                </div>
                            </div>
                        </ul>
                        <ul>
                            <li className='mt-[70px]'><a className='text-[20px] text-[#18181B] font-[Lexend] font-[400] line-[12px]' href="#">Get Started</a></li>
                            <li className='mt-[40px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Log in</a></li>
                            <li className='mt-[16px]'><a className='text-[12px] text-[#3F3F46] font-[Lexend] font-[400] line-[12px]' href="#">Sign up</a></li>
                            <img className='mt-[16px]' src={appstore} alt="img" />
                            <img className='mt-[16px]' src={playmarket} alt="img" />
                        </ul>
                    </div>
                    <p className='text-[12px] text-[#27272A] font-[Lexend] font-[400] line-[12px] mt-[90px]'>ACN 164 093 887 | ABN 45 164 093 887</p>
                    <p className='text-[12px] text-[#27272A] font-[Lexend] font-[400] line-[12px] mt-[8px]'>2023 BTC Markets Pty Ltd. All rights reserved.</p>
                    <p className='text-[12px] text-[#27272A] font-[Lexend] font-[400] line-[12px] mt-[60px] text-center'>BTC Markets Pty Ltd ACN 164 093 887 is an authorised representative (AR No. 1297122) of BTCM Payments Pty Ltd ACN 643 241 829 (AFSL No. 525840)</p>
                </div>
            </footer>
        </>
    )
}
