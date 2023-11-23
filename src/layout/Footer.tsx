import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
export const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-black h-[6rem] space-y-3'>
            <div className="flex space-x-3">
                <a href="https://t.co/yxXpi7oyTy" target="_blank"><FaTwitter className="w-[30px] h-[30px]"/></a>
                <a href="https://instagram.com/rangerversenfts?igshid=YmMyMTA2M2Y=…" target="_blank"><FaInstagram className="w-[30px] h-[30px]" /></a>
                <a href="https://discord.gg/qW6zbk6m" target="_blank"><FaDiscord className="w-[30px] h-[30px]"/></a>
            </div>
            <p>copyright@Rangervese2023</p>
        </div>
    )
}