'use client'
import React, { useState } from 'react'
import NavBarComponent from '../components/NavbarComponent'
import BlogEntries from '@/utils/BlogEntries.json'
import { iBlogItems } from '@/interfaces/interfaces';

const Blogpage = () => {
    const [blogItems, setBlogItems] = useState<iBlogItems[]>(BlogEntries);


    return (
        <>
            <NavBarComponent />
            <div className='flex min-h-screen flex-col p-24'>
                <h1 className='text-3xl text-center'>Helo this is our blog page</h1>
                <div className='container flex justify-center min-w-full'>
                    <div className="w-auto">
                        <div>
                            {
                                blogItems.map((item, idx) => {
                                    return (
                                        <div key={item.id}>
                                            {
                                                idx % 2 == 0 ? (
                                                    <div className='grid grid-cols-2 gap-4 mt-2'>
                                                        <div className='p-10'>
                                                            <div>
                                                                <h1 className='text-center text-3xl'>{item.title}</h1>
                                                            </div>
                                                            <div className='flex justify-evenly'>
                                                                <p>{item.publishedName}</p>
                                                                <p>{item.date}</p>
                                                            </div>
                                                            <div>
                                                                <img className='object-cover h-96 w-full' src={item.image} alt='martial arts' />
                                                            </div>

                                                        </div>
                                                        <div className='p-10'>
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className='grid grid-cols-2 gap-4 mt-2'>
                                                        <div className='p-10'>
                                                            {item.description}
                                                        </div>
                                                        <div className='p-10'>
                                                            <div>
                                                                <h1 className='text-center text-3xl'>{item.title}</h1>
                                                            </div>
                                                            <div className='flex justify-evenly'>
                                                                <p>{item.publishedName}</p>
                                                                <p>{item.date}</p>
                                                            </div>
                                                            <div>
                                                                <img className='object-cover h-96 w-full' src={item.image} alt='martial arts' />

                                                            </div>

                                                        </div>

                                                    </div>


                                                )
                                            }
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Blogpage