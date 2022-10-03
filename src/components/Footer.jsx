import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

// import { FaLongArrowAltDown } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='py-[3rem] flex flex-col text-center text-white bg-[#22443D]'>

      <h3 className='font-bold text-2xl text-slate-400'>sunnyside</h3>

      <ul className='flex justify-center py-[1rem]'>
        <li className='ml-[40px] text-slate-400'><a href="">About</a></li>
        <li className='ml-[40px] text-slate-400'><a href="">Services</a></li>
        <li className='ml-[40px] text-slate-400'><a href="">Projects</a></li>
      </ul>
      <ul className='flex justify-center py-[1rem]'>

        <li className='ml-[40px]'><a href=""><FaFacebook /></a></li>
        <li className='ml-[40px]'><a href=""><FaInstagram /></a></li>
        <li className='ml-[40px]'><a href=""><FaTwitter /></a></li>
        <li className='ml-[40px]'><a href=""><FaPinterest /></a></li>

      </ul>
    </footer>
  )
}

export default Footer