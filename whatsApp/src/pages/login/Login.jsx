import React, { useEffect } from 'react'
import whatsApp from '../../assets/whatsApp-logo.jpg'
import QRCode from "./images/qrcode.jpg";
import { UserAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const { currentUser, signinWithGoogle } = UserAuth();

    const handleLogin = async () => {
        console.log("see you")
        try {
            await signinWithGoogle();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (currentUser) {
            navigate("/mainpage");
        }
    }, [currentUser])

    return (
        <div className="relative min-h-screen bg-gray-200">
            <div className="w-full min-h-[15rem] bg-textGreen mb-2"></div>

            <div className="w-[65%] absolute top-[4%] left-[50%] translate-x-[-50%]  flex flex-col justify-start">
                <div className="mb-10 flex justify-start items-center">
                    <div className="w-[40px] h-[40px] mr-6">
                        <img src={whatsApp} alt="" />
                    </div>
                    <div className="text-white uppercase text-lg font-medium">whatsapp web</div>
                </div>
                
                <div className="bg-white shadow-xl rounded">
                    <div className="w-full pb-32 p-16 flex justify-between items-start">
                        <div>
                            <p className="mb-10 font-sans text-3xl font-light">Use WhatsApp on your computer</p>
                            <ol className="list-decimal list-inside font-sans text-lg text-gray-600">
                                <li className="pb-4">Open whatsApp on your phone</li>
                                <li className="pb-4">Tap <b>Menu</b> or <b>Settings</b> and select <b>Linked Devices</b> </li>
                                <li className="pb-4">Tap on <b>Link a device</b></li>
                                <li className="pb-4">Point your phone to this screeen to capture the QR code</li>
                            </ol>
                        </div>
                        <div>
                            <div onClick={handleLogin} className="w-[250px] h-[250px] cursor-pointer">
                                <img src={QRCode} alt="QRcode" class="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="p-8 pb-12 bg-gray-50 flex flex-col justify-center items-center">
                        <div className="pb-4 font-sans text-3xl font-light text-gray-600">Tutorial</div>
                        <div className="text-textGreen font-medium">Need help to get started?</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login