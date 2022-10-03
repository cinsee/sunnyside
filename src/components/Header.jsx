import React from 'react'
import Nav from './Nav'
import { FaLongArrowAltDown } from 'react-icons/fa';

function Header() {
    return (

        <div className='h-[50rem] bg-header bg-cover bg-center text-center'>
            <Nav />
            <div className='mt-[3rem]'>
                <h1 className='text-7xl uppercase text-white'>We are creatives</h1>
            </div>
            <div className='flex justify-center mt-[8rem]'>
                <FaLongArrowAltDown className='text-8xl text-white text-center' />
            </div>
        </div>


    )
}

export default Header