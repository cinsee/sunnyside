import React from 'react'
import imgTransform from '../assets/images/desktop/image-stand-out.jpg'
function SectionTwo() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className="left row-start-2 row-end-3 lg:row-start-1 lg:row-end-2">
                <img className='w-full' src={imgTransform} alt="Stand out to the right audience" />
            </div>
            <div className="right p-[5rem] flex justify-center items-center row-start-1 row-end-2">
                <div>
                    <h3 className='text-3xl font-bold'>Stand out to the right audience</h3>
                    <p className='text-gray-500 my-[2rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias accusamus minus autem tempore recusandae, sequi maxime qui adipisci doloribus necessitatibus sed, laudantium reiciendis labore quia minima totam, in cumque.</p>
                    <a className='uppercase border-b-4 border-b-pink-500' href="">Learn more</a>
                </div>
            </div>

        </div>
    )
}

export default SectionTwo