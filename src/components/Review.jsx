import React from 'react'
import imgEmily from '../assets/images/image-emily.jpg'
import imgJennie from '../assets/images/image-jennie.jpg'
import imgThomas from '../assets/images/image-thomas.jpg'


const usersData = [
    {
        img: imgEmily,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, tenetur, officiis cumque fugit corporis error fuga aperiam laboriosam est adipisci aut itaque velit unde in. Doloribus et quo ad!',
        name: 'Emily T.',
        position: 'Marketing Director'
    },
    {
        img: imgJennie,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, tenetur, officiis cumque fugit corporis error fuga aperiam laboriosam est adipisci aut itaque velit unde in. Doloribus et quo ad!',
        name: 'Thosmas S.',
        position: 'Chief Operating Officer'
    },
    {
        img: imgThomas,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, tenetur, officiis cumque fugit corporis error fuga aperiam laboriosam est adipisci aut itaque velit unde in. Doloribus et quo ad!',
        name: 'Jennie T.',
        position: 'Business Owner'
    }
]
function Review() {
    return (
        <div>
            <div className='py-[5rem]'>
                <h1 className='uppercase text-center font-bold text-3xl py-[2rem]'>client testimonials</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-[5rem]'>
                    {usersData.map((data, key) => (
                        <div key={key.name} className='text-center py-[1rem]'>
                            <img src={data.img} alt={data.name} className='inline-block rounded-full'/>
                            <p className='py-[1rem]'>{data.content}</p>
                            <h4 className='font-bold'>{data.name}</h4>
                            <p className='text-slate-400'>{data.position}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Review