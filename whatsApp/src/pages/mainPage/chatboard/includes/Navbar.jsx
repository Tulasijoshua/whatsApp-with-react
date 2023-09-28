import React from 'react'
import Profile from '../../../../assets/profile/profile.jpg'

const Navbar = () => {
  return (
    <div className="min-h-[50px] w-full box-border px-[20px] py-[6px] bg-grayClr flex justify-between items-center">
        <div className="flex justify-center items-center">
            <div className="w-[40px] h-[40px] mr-4">
                <img className="w-[100%] h-[100%] object-cover rounded-[50%]" src={Profile} alt="DP" />
            </div>
            <div className="flex flex-col ">
                <span className="text-textClr text-lg font-bold" >Mike</span>
                <span className="text-textClr text-sm font-thin">last seen today at 06:22pm</span>
            </div>
        </div>
        <div className="flex justify-center px-[.8rem] items-center">
        <div className=" text-textClr mr-10">
            <i class="fa fa-search"></i>
        </div>
            <div className=" text-textClr ">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar