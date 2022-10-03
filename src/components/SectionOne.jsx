import React from 'react'
import imgTransform from '../assets/images/desktop/image-transform.jpg'
function SectionOne() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className="left p-[5rem] flex justify-center items-center">
                <div>
                    <h3 className='text-3xl font-bold'>Transform your brand</h3>
                    <p className='text-gray-500 my-[2rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias accusamus minus autem tempore recusandae, sequi maxime qui adipisci doloribus necessitatibus sed, laudantium reiciendis labore quia minima totam, in cumque.</p>
                    <a className='uppercase border-b-4 border-b-yellow-500' href="">Learn more</a>
                </div>
            </div>
            <div className="right">
                <img className='w-full' src={imgTransform} alt="transform your brand" />
            </div>
        </div>
    )
}

export default SectionOne