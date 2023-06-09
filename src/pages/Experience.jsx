import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const experience = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#1D1D1F] w-full scroll-smooth h-screen '>
        <div className='lg:pt-52 lg:px-40 lg:pb-20 md:pt-40 md:px-18 md:pb-12 pt-28 px-6 pb-14'>
          <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='lg:flex'>
            <h1 className='text-[#E79418] lg:w-[50vw] pr-5 font-semibold text-lg tracking-[1.5px]'>1 MAY 2023 - 31 MAY 2023</h1>
            <div className='lg:border-l-2 lg:border-t-0 border-t-2 border-white lg:pl-5 pt-2'>
              <h1 className='text-white font-bold md:text-2xl tracking-[1.5px] mb-2'>Web Developer Intern @CodeClause</h1>
              <p className='text-slate-300 font-normal text-xs md:text-sm tracking-[1px]'>I collaborated closely on a variety of projects as an intern with a group of seasoned developers. I
                actively participated in the design and development of web apps, making sure they adhered to the
                high standards of functionality and quality set by the organisation. Using current web technologies
                and frameworks, I worked with colleagues to build effective and clean code.
              </p>
            </div>
          </div>
          <div className='mt-14'></div>
          <div data-aos='fade-up' data-aos-delay='100' data-aos-once='false' className='lg:flex'>
            <h1 className='text-[#E79418] lg:w-[80vw] pr-5 font-semibold text-lg tracking-[1.5px]'>1 DEC 2023 - 31 JAN 2023</h1>
            <div className='lg:border-l-2 lg:border-t-0 border-t-2 border-white lg:pl-5 pt-2'>
              <h1 className='text-white font-bold md:text-2xl tracking-[1.5px] mb-2'>Web Developer for TechFest 'SynChronize'</h1>
              <p className='text-slate-300 font-normal text-xs md:text-sm tracking-[1px]'>Led the development of the official website for Tech Festival. SynChronize, a large-scale annual event
                featuring Technical Events, Fun Events, Workshops, Cultural Events, Exhibitions, Guest lecturers, etc.
                Collaborated with a team of designers and project managers to deliver a visually stunning and userfriendly website that effectively conveyed the event’s theme and schedule. Utilized HTML, CSS, and
                JavaScript, to create a responsive design that was optimized for both desktop and mobile devices. I
                contributed to this project on Workshop Page, Cultural Event Page,
                Exhibition Page, and Footer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default experience