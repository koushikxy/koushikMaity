import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars, FaTimes } from "react-icons/fa";



const Navbar = () => {
    const [click, setClick] = useState(false);

    const handelClick = () => setClick(!click);
    return (
        <>
            <div className='flex justify-between lg:justify-between p-4 lg:items-center bg-[#1D1D1F] fixed w-full z-10'>
                <div className='lg:pl-16 flex items-center lg:flex-none'>
                    <Link to='/' id='logo'>
                        <h1 className='font-bold text-white text-2xl tracking-[3px]'>KOUSHIK<span className='text-[#E79418]'>XY.</span></h1>
                    </Link>
                </div>
                <div className='text-2xl mt-1 block lg:hidden' onClick={handelClick}>
                    {!click ? <FaBars className='text-white' /> : <FaTimes className='text-white' />}
                </div>
                <ul className={!click ? 'hidden lg:flex lg:justify-end lg:items-center text-white lg:text-base lg:font-medium lg:static bg-[#1D1D1F] lg:bg-transparent lg:mt-0 lg:h-0 lg:pl-0 lg:pt-0 text-center' : 'text-2xl font-semibold tracking-[2px] bg-[#1D1D1F] text-white right-0 w-full h-screen absolute text-center pt-10 pl-10 mt-[5.4vh] md:mt-[4.1vh]'}>
                    <Link to='/' >
                        <li className='pr-8 hover:text-[#E79418] hover:scale-105 lg:py-0 py-4 pt-[10vh]'>HOME</li>
                    </Link>
                    <Link to='/Skill' >
                        <li className='pr-8 hover:text-[#E79418] hover:scale-105 lg:py-0 py-4'>SKILL</li>
                    </Link>
                    <Link to='/Project' >
                        <li className='pr-8 hover:text-[#E79418] hover:scale-105 lg:py-0 py-4'>PROJECT</li>
                    </Link>
                    <Link to='/Experience' >
                        <li className='pr-8 hover:text-[#E79418] hover:scale-105 lg:py-0 py-4'>EXPERIENCE</li>
                    </Link>
                    <Link to='/Certificate' >
                        <li className='pr-8 hover:text-[#E79418] hover:scale-105 lg:py-0 py-4'>CERTIFICATE</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}



export default Navbar