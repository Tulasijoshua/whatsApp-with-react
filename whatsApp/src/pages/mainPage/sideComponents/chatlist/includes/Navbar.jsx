import React from 'react'
import profile from "../../../../../assets/profile/profile.jpg"

const Navbar = () => {
  return (
    <div className="mx-auto mb-2 w-full min-h-[50px] bg-grayClr py-[10px] px-[15px] flex items-center justify-between">
        <div className="w-[40px] h-[40px]">
            <img src={profile} alt="Profile" className="w-[100%] h-[100%] rounded-full" />
        </div>
        <div className="flex items-center justify-between">
            <div className="text-lg pr-8 text-iconClr">
                <i class="fa fa-users" aria-hidden="true"></i>
            </div>
            <div className="text-lg pr-8 text-iconClr">
                <i class="fa fa-arrows-spin"></i>
            </div>
            <div className="text-lg pr-8 text-iconClr">
                <i class="fa fa-message"></i>      
            </div>
            <div className="text-lg pr-6 text-iconClr">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar