import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations/index'

const PreLoader = () => {
    useEffect(()=> {
        preLoaderAnim()
}, []);
return (
    <div className='preloader bg-[#1D1D1F] h-screen w-full fixed z-20 flex justify-center items-center overflow-hidden'>
        <div className="text-container">
            <span className='text-white tracking-[1px] font-bold text-xl pr-2 hover:text-purple-400'>WELCOME</span>
            <span className='text-white tracking-[1px] font-bold text-xl pr-2 hover:text-green-500'>TO</span>
            <span className='text-white tracking-[1px] font-bold text-xl '>KOUSHIK<span className='text-[#E79418]'>XY.</span></span>
        </div>
    </div>
)
}

export default PreLoader