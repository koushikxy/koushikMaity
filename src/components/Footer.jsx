import React from 'react'

import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <div className='bg-black  text-white font-semibold tracking-[2px] p-2 text-center md:text-xl text-[10px]'>DESIGNED AND DEVELOPED WITH 💜 BY <span className='text-[#E79418]'><Link to='/'>@KOUSHIKXY</Link></span></div>
        </>
    )
}

export default Footer