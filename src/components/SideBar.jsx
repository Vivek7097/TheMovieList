import React, { useState } from 'react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import {TbLayoutSidebar} from 'react-icons/tb'

const SideBar = () => {
    const{setCategory} = useContext(AppContext)
    const[toggle, setToggle] = useState(false);

  return (
    <div className={`${toggle ? 'sidebar-container  absolute top-0 z-30 right-1 w-[10rem] bg-transparent block' : 'sidebar-container  absolute top-0 z-30  right-1  h-0 hidden '}`}>
        <div className='absolute right-1'>
            <TbLayoutSidebar className=' sm:hidden md:hidden text-white text-3xl cursor-pointer ' onClick={()=>{setToggle(!toggle)}}/>
        </div>
        <div className={`${toggle ? 'z-40 text-white flex-col font-semibold text-lg  mx-auto mt-[1rem] pl-5' 
        : 'z-40 text-white hidden '}`}>
            <div>
                <Link to={"/movie/popular"} onClick={()=>{
                    setCategory("popular");
                    // fetchPageData()
                }}
                className='my-auto  hover:text-slate-500 transition-all duration-200 ease-linear'>Popular</Link>
            </div>
            <div>
                <Link to={"/movie/top_rated" } onClick={()=>{
                    setCategory("top_rated");
                    // fetchPageData();
                }} className='my-auto  hover:text-slate-500 transition-all duration-200 ease-linear'>Top Rated</Link>
            </div>
            <div>
                <Link to={"/movie/upcoming"} onClick={()=>{
                    setCategory("upcoming");
                    // fetchPageData();
                }}className='my-auto  hover:text-slate-500 transition-all duration-200 ease-linear'>Upcoming</Link>
            </div>
        </div>
    </div>
  )
}

export default SideBar