import { About } from "../component/About"
import { NFTs } from "../component/NFTs"
import { Information } from "../component/Information"
import { Mint } from "../component/Mint"
import { Mission } from "../component/Mission"

export const Content = () => {
    return (
        <>
            <Mint />
            <div className="bg-rv-bg-1 ">
                <div className="max-w-[1024px] mx-auto">
                    <About/>
                    <Mission/>
                    <NFTs />
                </div>
                <div className='bg-[url(/RV-BG-MID-01.jpg)] aspect-[1496/470] w-full bg-cover relative overflow-hidden pt-9 px-5 hover:transform hover:scale-105 hover:z-50 duration-[3000ms]'/>
                <div className="max-w-[1024px] mx-auto">
                    <Information/>
                </div>
                
            </div>
        </>
    )
}