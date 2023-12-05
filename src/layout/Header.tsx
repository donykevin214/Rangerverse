import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";
import Logo from '../assets/RV-logo-01.jpeg';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
        setIsOpen((state: boolean) => !state);
      }
    return (
        <div id='top' className="bg-black w-full font-chalkboard text-white p-4 fixed top-0 z-50 ">
            <div className='w-11/12 flex justify-between items-center mx-auto'>
                <a href='/'><img src={Logo} width={200} height={30}/></a>
                <div className='flex items-center gap-10'>
                    <ul className='hidden lg:flex gap-4'>
                        <li>
                            <a href='#mint'>Home</a>
                        </li>
                        <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#mission'>Missions</a>
                        </li>
                        <li>
                            <a href='#gallery'>Gallery</a>
                        </li>
                        <li>
                            <a href='https://mint.rangerverse.io'>Mint NFT</a>
                        </li>
                    </ul>
                    <div className='flex lg:hidden'>
                        <button
                            onClick={toggleMenu}
                            className="w-10 h-10 flex items-center justify-center"
                        >
                            {isOpen ? <RxCross2 className="h-8 w-8" /> : <CiMenuFries className="h-8 w-8" />}
                        </button>
                        <AnimatePresence>
                            {isOpen && (
                            <motion.div
                                initial={{ y: -400 }}
                                animate={{ y: 0 }}
                                exit={{ y: -400 }}
                                className="flex flex-col flex-1 justify-between items-center py-10 fixed inset-x-4 top-16 bg-teal-950/80 shadow-xl z-[200] mt-10"
                            >
                                <ul className="flex flex-col items-center space-y-10 mb-10">
                                    <li>
                                        <a href='#mint' onClick={toggleMenu}>Home</a>
                                    </li>
                                    <li>
                                        <a href='#about' onClick={toggleMenu}>About</a>
                                    </li>
                                    <li>
                                        <a href='#mission' onClick={toggleMenu}>Missions</a>
                                    </li>
                                    <li>
                                        <a href='#gallery' onClick={toggleMenu}>Gallery</a>
                                    </li>
                                    <li>
                                        <a href='https://mint.rangerverse.io' onClick={toggleMenu}>Mint NFT</a>
                                    </li>
                                </ul>
                            </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    {/* <button className='border p-2 rounded-md'>Connect Wallet</button> */}
                </div>
            </div>
        </div>
    )
}