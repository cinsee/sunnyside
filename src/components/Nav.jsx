import React from 'react'

function Nav(){
    return(
        <div className='flex flex-col md:flex-row lg:flex-row justify-between px-[5rem] py-[2rem]'>
            <div className="logo">
                <a href="#" className='text-white font-bold text-3xl'>Sunnyside</a>
            </div>
            <ul className="menu flex flex-col md:flex-row lg:flex-row text-white items-center">
                <li className='mx-[40px] my-[20px] md:my-[0px] lg:my[0px]'><a href="#">Services</a></li>
                <li className='mx-[40px] my-[20px] md:my-[0px] lg:my[0px]'><a href="#">About</a></li>
                <li className='mx-[40px] my-[20px] md:my-[0px] lg:my[0px]'><a href="#" >Projects</a></li>
                <li className='mx-[40px] my-[20px] md:my-[0px] lg:my[0px] bg-white p-[20px] rounded-full flex justify-center items-center text-black w-[100px] h-[45px]'><a href="#">Contact</a></li>
            </ul>
            
        </div>
    )
}

export default Nav