import React from 'react'
import xBox from "../img/IMAGE (27).svg"
import BitCoin from "../img/IMAGE (28).svg"
import Etherium from "../img/IMAGE (29).svg"
import Tether from "../img/IMAGE (30).svg"
import Injin from "../img/IMAGE (31).svg"
import phone from "../img/IMAGE (32).svg"
import phone2 from "../img/IMAGE (33).svg"
import trafic from "../img/IMAGE (34).svg"
import appstore from "../img/IMAGE (35).svg"
import playmarket from "../img/IMAGE (36).svg"
import future from "../img/IMAGE (37).svg"
import xcrip from "../img/Frame (17).svg"
import strelka from "../img/Frame (19).svg"
import block from "../img/Frame (23).svg"
import speed from "../img/Frame (24).svg"
import mess from "../img/Frame (25).svg"
import otp from "../img/Frame (26).svg"
import otp2 from "../img/Frame (27).svg"
import otp3 from "../img/Frame (28).svg"
import otp4 from "../img/Frame (29).svg"
import otp5 from "../img/Frame (30).svg"
import otp6 from "../img/Frame (31).svg"
import otp7 from "../img/Frame (32).svg"
import otp8 from "../img/Frame (33).svg"
import mini from "../img/Frame (34).svg"
import mini2 from "../img/Frame (35).svg"
import mini3 from "../img/Frame (36).svg"
import mini4 from "../img/Frame (37).svg"
import mini5 from "../img/Frame (38).svg"
import Twitter from "../img/Frame (39).svg"
import FaceBook from "../img/Frame (40).svg"
import Linkedin from "../img/Frame (41).svg"
import Telegram from "../img/Frame (42).svg"
import Instagram from "../img/Frame (43).svg"
import imgTwo from "../img/IMAGE (26).svg"
import imgThree from "../img/Frame (16).svg"
import { Link } from 'react-router-dom'

export default function Section() {
    return (
        <>
            <section>
                <div className='w-[1200px] mx-auto'>
                    <table className='w-[100%] border-[1px] border-[#F4F4F5] rounded-[8px]'>
                        <tr className='border-[1px] border-[#F4F4F5] flex items-center gap-[30px] justify-center h-[70px]'>
                            <th className='text-[14px] text-[#18181B] font-[Lexend] font-[400]'>Most Popular</th>
                            <th className='text-[14px] text-[#71717A] font-[Lexend] font-[400]'>Top Movers</th>
                        </tr>
                        <tr className='border-[1px] border-[#F4F4F5] flex items-center gap-[30px] justify-center h-[50px]'>
                            <ul className='flex gap-[100px] text-[14px] text-[#18181B] font-[Lexend] font-[400]'>
                                <li><a href="">Asset</a></li>
                                <li><a href="">Last Price</a></li>
                                <li><a href="">24hr Change</a></li>
                                <li><a href="">Market Cap</a></li>
                            </ul>
                        </tr>
                        <tr className='border-[1px] border-[#F4F4F5] pt-[15px] pb-[15px]'>
                            <div className='w-[1100px] mx-auto flex items-center justify-between pt-[15px] pb-[15px]'>
                                <div className='flex items-center gap-[8px]'>
                                    <img src={xBox} alt="img" />
                                    <p className='text-[14px] text-[#18181B] font-[Lexend] font-[400]'>XRP</p>
                                </div>
                                <div className='w-[600px] flex items-center justify-center gap-[200px]'>
                                    <div className='flex items-center'>
                                        <p className='text-[14px] text-[#18181B] font-[Lexend] font-[400]'>$0.5617</p>
                                        <p className='text-[14px] text-[#A1A1AA] font-[Lexend] font-[400]'>AUD</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-[16px] text-[#10B981] font-[Lexend] font-[400]'>1.57%</p>
                                        <img src={xcrip} alt="" />
                                    </div>
                                    <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>$28B</p>
                                </div>
                                <button className='text-[12px] text-[#18181B] font-[Lexend] font-[400] w-[55px] h-[35px] bg-[#4CFDC7] rounded-[4px]'>Buy</button>
                            </div>
                        </tr>
                        <tr className='border-[1px] border-[#F4F4F5] pt-[15px] pb-[15px]'>
                            <div className='w-[1100px] mx-auto flex items-center justify-between pt-[15px] pb-[15px]'>
                                <div className='flex items-center gap-[8px]'>
                                    <img src={BitCoin} alt="img" />
                                    <p className='text-[14px] text-[#18181B] font-[Lexend] font-[400]'>Bitcoin</p>
                                </div>
                                <div className='w-[600px] flex items-center justify-center gap-[200px]'>
                                    <div className='flex items-center'>
                                        <p className='text-[14px] text-[#18181B] font-[Lexend] font-[400]'>$30,165.43</p>
                                        <p className='text-[14px] text-[#A1A1AA] font-[Lexend] font-[400]'>AUD</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-[16px] text-[#F43F5E] font-[Lexend] font-[400]'>-0.08%</p>
                                        <img src={xcrip} alt="" />
                                    </div>
                                    <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>$582B</p>
                                </div>
                                <button className='text-[12px] text-[#18181B] font-[Lexend] font-[400] w-[55px] h-[35px] bg-[#4CFDC7] rounded-[4px]'>Buy</button>
                            </div>
                        </tr>
                        <tr className='border-[1px] border-[#F4F4F5] pt-[15px] pb-[15px]'>
                            <div className='w-[1100px] mx-auto flex items-center justify-between pt-[15px] pb-[15px]'>
                                <div className='flex items-center gap-[8px]'>
                                    <img src={Etherium} alt="img" />
                                    <p className='text-[14px] text-[#18181B] font-[Lexend] font-[400]'>Ethereum</p>
                                </div>
                                <div className='w-[600px] flex items-center justify-center gap-[200px]'>
                                    <div className='flex items-center'>
                                        <p className='text-[14px] text-[#18181B] font-[Lexend] font-[400]'>$30,165.43</p>
                                        <p className='text-[14px] text-[#A1A1AA] font-[Lexend] font-[400]'>AUD</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-[16px] text-[#F43F5E] font-[Lexend] font-[400]'>-0.08%</p>
                                        <img src={xcrip} alt="" />
                                    </div>
                                    <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>$267B</p>
                                </div>
                                <button className='text-[12px] text-[#18181B] font-[Lexend] font-[400] w-[55px] h-[35px] bg-[#4CFDC7] rounded-[4px]'>Buy</button>
                            </div>
                        </tr>
                        <tr className='border-[1px] border-[#F4F4F5] pt-[15px] pb-[15px]'>
                            <div className='w-[1100px] mx-auto flex items-center justify-between pt-[15px] pb-[15px]'>
                                <div className='flex items-center gap-[8px]'>
                                    <img src={Tether} alt="img" />
                                    <p className='text-[14px] text-[#18181B] font-[Lexend] font-[400]'>Tether</p>
                                </div>
                                <div className='w-[600px] flex items-center justify-center gap-[200px]'>
                                    <div className='flex items-center'>
                                        <p className='text-[14px] text-[#18181B] font-[Lexend] font-[400]'>$1.4544</p>
                                        <p className='text-[14px] text-[#A1A1AA] font-[Lexend] font-[400]'>AUD</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-[16px] text-[#10B981] font-[Lexend] font-[400]'>2.36%</p>
                                        <img src={xcrip} alt="" />
                                    </div>
                                    <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>$96B</p>
                                </div>
                                <button className='text-[12px] text-[#18181B] font-[Lexend] font-[400] w-[55px] h-[35px] bg-[#4CFDC7] rounded-[4px]'>Buy</button>
                            </div>
                        </tr>
                        <tr className='border-[1px] border-[#F4F4F5] pt-[15px] pb-[15px]'>
                            <div className='w-[1100px] mx-auto flex items-center justify-between pt-[15px] pb-[15px]'>
                                <div className='flex items-center gap-[8px]'>
                                    <img src={Injin} alt="img" />
                                    <p className='text-[14px] text-[#18181B] font-[Lexend] font-[400]'>Enjin Coin</p>
                                </div>
                                <div className='w-[600px] flex items-center justify-center gap-[200px]'>
                                    <div className='flex items-center'>
                                        <p className='text-[14px] text-[#18181B] font-[Lexend] font-[400]'>$0.6129</p>
                                        <p className='text-[14px] text-[#A1A1AA] font-[Lexend] font-[400]'>AUD</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-[16px] text-[#10B981] font-[Lexend] font-[400]'>16.41%</p>
                                        <img src={xcrip} alt="" />
                                    </div>
                                    <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>$629M</p>
                                </div>
                                <button className='text-[12px] text-[#18181B] font-[Lexend] font-[400] w-[55px] h-[35px] bg-[#4CFDC7] rounded-[4px]'>Buy</button>
                            </div>
                        </tr>
                        <tr className='border-[1px] border-[#F4F4F5]'>
                            <div className='flex items-center justify-center'>
                                <div className='flex items-center pt-[15px] pb-[15px] gap-[100px]'>
                                    <div className='flex items-center relative'>
                                        <img src={BitCoin} alt="img" />
                                        <img className='absolute left-[25px]' src={Etherium} alt="img" />
                                        <img className='absolute left-[50px]' src={Tether} alt="img" />
                                        <img className='absolute left-[75px]' src={xBox} alt="img" />
                                    </div>
                                    <div className='gap-[30px] flex items-center'>
                                        <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>View all markets</p>
                                        <img src={strelka} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </tr>
                    </table>
                </div>
            </section>
            <section className='pt-[125px] pb-[125px]'>
                <h2 className='text-[50px] text-[#18181B] font-[Lexend] font-[400] text-center'>Why BTC Markets?</h2>
                <div className='flex items-center justify-center gap-[70px] mt-[150px]'>
                    <div className='flex flex-col items-center justify-center gap-[20px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                        <img src={block} alt="img" />
                        <p className='text-[20px] text-[#18181B] font-[Lexend] font-[400] text-center'>Security</p>
                        <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] text-center'>Multiple layers of account <br /> security, 2FA, address <br /> whitelisting, Biometrics.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-[20px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                        <img src={speed} alt="img" />
                        <p className='text-[20px] text-[#18181B] font-[Lexend] font-[400] text-center'>Speed</p>
                        <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] text-center'>Fast trade executions with an <br /> industry leading uptime of 99.99%.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-[20px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                        <img src={mess} alt="img" />
                        <p className='text-[20px] text-[#18181B] font-[Lexend] font-[400] text-center'>Support</p>
                        <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] text-center'>100% Australian-based <br /> customer support, OTC desk and <br /> VIP Program.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='w-[1200px] mx-auto'>
                    <div className='flex justify-between items-center'>
                        <div className='mt-[175px]'>
                            <div>
                                <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>Trade</p>
                                <h2 className='text-[40px] text-[#18181B] font-[Lexend] font-[400] mt-[16px]'>Buy, sell and trade crypto <br /> with confidence</h2>
                                <div className='flex gap-[90px]'>
                                    <div className='mt-[65px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                                        <img src={otp} alt="imgq" />
                                        <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[8px]'>Simple buy & sell options</p>
                                        <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[18px]'>Buy and sell cryptocurrency <br /> quickly and easily.</p>
                                    </div>
                                    <div className='mt-[65px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                                        <img src={otp2} alt="imgq" />
                                        <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[8px]'>Simple buy & sell options</p>
                                        <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[18px]'>Buy and sell cryptocurrency <br /> quickly and easily.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-[90px]'>
                                <div className='mt-[65px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                                    <img src={otp3} alt="imgq" />
                                    <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[8px]'>Simple buy & sell options</p>
                                    <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[18px]'>Buy and sell cryptocurrency <br /> quickly and easily.</p>
                                </div>
                                <div className='mt-[65px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                                    <img src={otp4} alt="imgq" />
                                    <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[8px]'>Simple buy & sell options</p>
                                    <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[18px]'>Buy and sell cryptocurrency <br /> quickly and easily.</p>
                                </div>
                            </div>
                        </div>
                        <img className='mt-[200px]' src={phone} alt="img" />
                    </div>
                </div>
            </section>
            <section className='pb-[200px]'>
                <div className='w-[1200px] mx-auto'>
                    <div className='flex justify-between items-center'>
                        <img className='mt-[150px]' src={phone2} alt="img" />
                        <div className='mt-[175px]'>
                            <div>
                                <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>Wallet</p>
                                <h2 className='text-[40px] text-[#18181B] font-[Lexend] font-[400] mt-[16px]'>Simple and secure wallet <br /> services</h2>
                                <div className='flex gap-[90px]'>
                                    <div className='mt-[65px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                                        <img src={otp5} alt="imgq" />
                                        <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[8px]'>Secure asset storage</p>
                                        <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[18px]'>We use multi-signature <br /> technology to securely <br /> store your assets.</p>
                                    </div>
                                    <div className='mt-[65px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                                        <img src={otp6} alt="imgq" />
                                        <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[8px]'>Assets held in Australia</p>
                                        <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[18px]'>100% Australian-based <br /> custody of your assets.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-[90px]'>
                                <div className='mt-[65px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                                    <img src={otp7} alt="imgq" />
                                    <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[8px]'>Multi-coin wallet</p>
                                    <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[18px]'>Store multiple assets <br /> simultaneously in one wallet.</p>
                                </div>
                                <div className='mt-[65px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                                    <img src={otp8} alt="imgq" />
                                    <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[8px]'>Fast funding</p>
                                    <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[18px]'>Credit your wallet with AUD in <br /> seconds using Osko PayID.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#FAFAFA] pt-[130px]'>
                <div className='w-[1200px] mx-auto'>
                    <p className='text-center text-[16px] text-[#18181B] font-[Lexend] font-[400]'>VIP Program</p>
                    <h2 className='text-center text-[40px] text-[#18181B] font-[Lexend] font-[400] mt-[16px]'>When you need more than <br /> just a crypto exchange</h2>
                    <p className='text-center text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[32px]'>Access world-class APIs, a lower fee structure and a dedicated Account Manager.</p>
                    <div className='flex justify-center items-center gap-[80px] mt-[50px]'>
                        <div className='flex items-center gap-[8px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                            <img src={speed} alt="img" />
                            <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>API integrations</p>
                        </div>
                        <div className='flex items-center gap-[8px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                            <img src={mini} alt="img" />
                            <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>Lower fees</p>
                        </div>
                        <div className='flex items-center gap-[8px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                            <img src={mini2} alt="img" />
                            <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>Dedicated Account Manager</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='text-[16px] text-[#18181B] font-[Lexend] font-[400] w-[160px] h-[40px] border-[1px] border-[#18181B] rounded-[4px] mt-[80px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>Learn more</button>
                    </div>
                    <div className='flex justify-center'>
                        <img className='mt-[65px]' src={trafic} alt="img" />
                    </div>
                </div>
            </section>
            <section className='pt-[125px]'>
                <div className='w-[1200px] mx-auto'>
                    <h2 className='text-[50px] text-center text-[#18181B] font-[Lexend] font-[400]'>Start trading in <br /> 3 easy steps</h2>
                    <div className='flex items-center justify-center gap-[100px] mt-[100px]'>
                        <div className='flex flex-col items-center justify-center duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                            <img src={mini3} alt="img" />
                            <p className='text-[20px] text-[#18181B] font-[Lexend] font-[400] text-center mt-[16px]'>1. Create</p>
                            <p className='text-[16px] text-[#27272A] font-[Lexend] font-[400] text-center mt-[18px]'>Sign up and verify your <br /> free account.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                            <img src={mini4} alt="img" />
                            <p className='text-[20px] text-[#18181B] font-[Lexend] font-[400] text-center mt-[16px]'>2. Deposit</p>
                            <p className='text-[16px] text-[#27272A] font-[Lexend] font-[400] text-center mt-[18px]'>Add AUD or crypto to your wallet <br /> using our secure methods.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                            <img src={mini5} alt="img" />
                            <p className='text-[20px] text-[#18181B] font-[Lexend] font-[400] text-center mt-[16px]'>3. Trade</p>
                            <p className='text-[16px] text-[#27272A] font-[Lexend] font-[400] text-center mt-[18px]'>You’re all set. Buy, sell and <br /> trade crypto immediately.</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-[50px]'>
                        <button className='text-[16px] text-[#18181B] font-[Lexend] font-[400] w-[160px] h-[40px] bg-[#4CFDC7] rounded-[4px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>Get started</button>
                    </div>
                    <div className='flex items-center justify-center gap-[8px] mt-[35px]'>
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
                    <h2 className='text-[45px] text-[#000000] font-[Lexend] font-[400] mt-[325px] text-left'>Trade on the go</h2>
                    <p className='text-[16px] text-[#27272A] font-[Lexend] font-[400] mt-[24px] text-left'>Place simple and advanced trades on the go with the BTC <br /> Markets app. You can also manage your portfolio, monitor <br /> prices, and track market movements, anywhere, anytime.</p>
                    <div className='flex items-center gap-[30px] mt-[30px]'>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={appstore} alt="img" />
                            <div className='flex items-center justify-center gap-[8px] mt-[35px]'>
                                <div className='flex items-center gap-[4px]'>
                                    <img src={imgThree} alt="img" />
                                    <img src={imgThree} alt="img" />
                                    <img src={imgThree} alt="img" />
                                    <img src={imgThree} alt="img" />
                                    <img src={imgThree} alt="img" />
                                </div>
                                <p>4.3</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={playmarket} alt="img" />
                            <div className='flex items-center justify-center gap-[8px] mt-[35px]'>
                                <div className='flex items-center gap-[4px]'>
                                    <img src={imgThree} alt="img" />
                                    <img src={imgThree} alt="img" />
                                    <img src={imgThree} alt="img" />
                                    <img src={imgThree} alt="img" />
                                    <img src={imgThree} alt="img" />
                                </div>
                                <p>3.9</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400] mt-[35px]'>Learn more</p>
                </div>
               <hr  className='w-[100%] h-[1px] bg-[#D4D4D8] mt-[100px]'/>
            </section>
            <section className='pt-[130px] pb-[130px]'>
                <div className='w-[1200px] mx-auto'>
                    <h2 className='text-center text-[30px] text-[#18181B] font-[Lexend] font-[400]'>Find out the latest crypto news</h2>
                    <div className='flex items-center justify-between mt-[65px]'>
                        <div className='w-[360px] h-[345px] rounded-[8px] shadow drop-shadow-2xl duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                            <img src={future} alt="img" />
                            <div className='flex items-center gap-[16px] mt-[16px] ml-[16px]'>
                                <button className='w-[80px] h-[20px] bg-[#BDFFEB] text-[12px] text-[#18181B] font-[Lexend] font-[400]'>Newsletter</button>
                                <p className='text-[12px] text-[#18181B] font-[Lexend] font-[400]'>Jan 19th 2023</p>
                            </div>
                            <p className='mt-[16px] text-[24px] text-[#18181B] font-[Lexend] font-[400] ml-[16px]'>This Week in Crypto: 19th January 2023</p>
                            <p className='mt-[32px] text-[16px] text-[#18181B] font-[Lexend] font-[400] ml-[16px]'>Read more</p>
                        </div>
                        <div className='w-[360px] h-[345px] rounded-[8px] shadow drop-shadow-2xl duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                            <img src={future} alt="img" />
                            <div className='flex items-center gap-[16px] mt-[16px] ml-[16px]'>
                                <button className='w-[80px] h-[20px] bg-[#BDFFEB] text-[12px] text-[#18181B] font-[Lexend] font-[400]'>Newsletter</button>
                                <p className='text-[12px] text-[#18181B] font-[Lexend] font-[400]'>Jan 19th 2023</p>
                            </div>
                            <p className='mt-[16px] text-[24px] text-[#18181B] font-[Lexend] font-[400] ml-[16px]'>This Week in Crypto: 19th January 2023</p>
                            <p className='mt-[32px] text-[16px] text-[#18181B] font-[Lexend] font-[400] ml-[16px]'>Read more</p>
                        </div>
                        <div className='w-[360px] h-[345px] rounded-[8px] shadow drop-shadow-2xl duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                            <img src={future} alt="img" />
                            <div className='flex items-center gap-[16px] mt-[16px] ml-[16px]'>
                                <button className='w-[80px] h-[20px] bg-[#BDFFEB] text-[12px] text-[#18181B] font-[Lexend] font-[400]'>Newsletter</button>
                                <p className='text-[12px] text-[#18181B] font-[Lexend] font-[400]'>Jan 19th 2023</p>
                            </div>
                            <p className='mt-[16px] text-[24px] text-[#18181B] font-[Lexend] font-[400] ml-[16px]'>This Week in Crypto: 19th January 2023</p>
                            <p className='mt-[32px] text-[16px] text-[#18181B] font-[Lexend] font-[400] ml-[16px]'>Read more</p>
                        </div>
                    </div>
                    <p className='mt-[64px] text-center text-[24px] text-[#18181B] font-[Lexend] font-[400]'>Check out more of our crypto news</p>
                    <div className='flex justify-center items-center gap-[32px] mt-[64px]'>
                        <div className='flex items-center gap-[8px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                            <img src={Twitter} alt="img" />
                            <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>Twitter</p>
                        </div>
                        <div className='flex items-center gap-[8px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                            <img src={FaceBook} alt="img" />
                            <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>Facebook</p>
                        </div>
                        <div className='flex items-center gap-[8px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                            <img src={Linkedin} alt="img" />
                            <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>LinkedIn</p>
                        </div>
                        <div className='flex items-center gap-[8px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                            <img src={Telegram} alt="img" />
                            <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>Telegram</p>
                        </div>
                        <div className='flex items-center gap-[8px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>
                            <img src={Instagram} alt="img" />
                            <p className='text-[16px] text-[#18181B] font-[Lexend] font-[400]'>Instagram</p>
                        </div>
                    </div>
                    <h2 className='text-[45px] text-[#18181B] font-[Lexend] font-[400] mt-[235px]'>Create an account <br /> and start trading <br /> with us today!</h2>
                    <button className='text-[16px] text-[#18181B] font-[Lexend] font-[400] w-[160px] h-[40px] bg-[#4CFDC7] rounded-[4px] mt-[35px] duration-[200ms] hover:scale-[1.1] hover:cursor-pointer'>Get started</button>
                </div>
            </section>
        </>
    )
}

