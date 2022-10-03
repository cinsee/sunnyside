import React from 'react'
import imgGraphic from '../assets/images/desktop/image-graphic-design.jpg'
import imgPhotography from '../assets/images/desktop/image-photography.jpg'
function SectionThree() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 h-[700px]'>
            <div className="left bg-sec-three-left bg-center bg-cover flex justify-center items-end">
                <div className='p-[2rem] lg:p-[5rem] text-center'>
                    <h3 className='text-3xl font-bold'>Graphic Design</h3>
                    <p className='text-gray-500 my-[2rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias accusamus minus autem tempore recusandae, sequi maxime qui adipisci doloribus necessitatibus sed, laudantium reiciendis labore quia minima totam, in cumque.</p>
                </div>
            </div>
            <div className="right bg-sec-three-right bg-center bg-cover flex justify-center items-end">
                <div className='p-[2rem] lg:p-[5rem] text-center'>
                    <h3 className='text-3xl font-bold'>Photography</h3>
                    <p className='text-gray-500 my-[2rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias accusamus minus autem tempore recusandae, sequi maxime qui adipisci doloribus necessitatibus sed, laudantium reiciendis labore quia minima totam, in cumque.</p>
                </div>
            </div>

        </div>
    )
}

export default SectionThree