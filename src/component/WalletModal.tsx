
import { useRef, useEffect, LegacyRef } from "react";
import Metamask from "../assets/MetaMask_Fox.png";
import Rainbow from "../assets/rainbow.png";
import Coinbase from "../assets/coinbase.png";
import WalletConnect from "../assets/wallet-connect-logo.png";

type Props = {
    setShowModal: (e: boolean) => void,
    walletConnectClick: () => void,
    metamaskClick: () => void,
};

export const WalletModal = ({setShowModal, walletConnectClick, metamaskClick}: Props) => {
    const ref = useRef(null);
    useEffect(() => {
        const handleOutSideClick = (event: { target: any; }) => {
            const currentEle = ref.current as any
            if (!currentEle) {
                return
            }
            if (!currentEle.contains(event.target)) {
                setShowModal(false)
            }
        };
    
        window.addEventListener("mousedown", handleOutSideClick);
    
        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
      }, [ref])
  return (
    <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-sky-950 bg-opacity-50">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-rv-bg-1 border outline-none focus:outline-none" ref={ref as LegacyRef<HTMLDivElement>}>
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t w-[18rem]" >
                <h3 className="text-3xl font=semibold">Connect Wallet</h3>
                <button
                className="text-black float-right"
                onClick={() => setShowModal(false)}
                >
                    <span className="flex justify-center items-center text-white border h-6 w-6 text-xl py-0 rounded-full">
                        x
                    </span>
                </button>
            </div>
            <div className="relative p-6 flex flex-col gap-4">
                <button className="flex items-center gap-4 border w-full py-2 px-2 rounded-md" onClick={metamaskClick}><img src={Rainbow} width={30}/> Rainbow</button>
                <button className="flex items-center gap-4 border w-full py-2 px-2 rounded-md" onClick={metamaskClick}><img src={Metamask} width={30}/> MetaMask</button>
                <button className="flex items-center gap-4 border w-full py-2 px-2 rounded-md" onClick={metamaskClick}><img src={Coinbase} width={30}/> Coinbase</button>
                <button className="flex items-center gap-4 border w-full py-2 px-2 rounded-md" onClick={walletConnectClick}><img src={WalletConnect} width={30}/> WalletConnect</button>
            </div>
            </div>
        </div>
        </div>
    </>
  );
}