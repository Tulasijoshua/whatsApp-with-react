import React, { useState } from 'react'
import profile from "../../../../../assets/profile/profile.jpg"
import { UserState } from '../../../../../context/StateContext';


const UserOne = () => {
    const {handleShowFirstList} = UserState();
    
    return (
        <div>
            <div onClick={handleShowFirstList} className="w-full mx-auto pl-3 pr-[7px]  flex justify-start items-center hover:bg-hoverClr hover:cursor-pointer">
                <div className="w-[60px] h-[50px] mr-[1rem]">
                    <img className="w-[100%] h-[100%] rounded-[50%] object-cover" src={profile} alt="DP" />
                </div>

                <div className="w-[100%] flex items-center justify-between border-b border-gray-800">
                    <div className="flex flex-col justify-center items-start py-2 text-textWhite">
                        <span className="text-lg font-[300]">Joshua</span>
                        <span className="text-sm text-iconClr">Thank you.</span>
                    </div>
                    <div className="flex flex-col justify-between items-end pr-4">
                        <div className="text-textGreen text-[12px] font-light  rounded-[2rem] mb-[2px]">17:06</div>
                        <div className="text-black text-[13px] px-[5px] rounded-full bg-textGreen">60</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserOne