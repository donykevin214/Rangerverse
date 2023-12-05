import OpportunityImg from '../assets/RANGER-03.gif';
import AlphaImg from  '../assets/mission_3.gif';
import FutureImg from '../assets/mission_2.gif';
export const Mission = () => {
    return (
        <div id='mission'>
            <button className="bg-[#00a2d6] text-[15px] py-2 px-5 rounded-md mt-[2rem] ">MISSIONS</button>
            <div className='border p-8 w-11/12 lg:w-[30rem] mx-auto mt-4 rounded-md'>
                <div className='flex justify-between items-center mb-2'>
                    <p>RANGERS LAUNCH</p>
                    <p>0%</p>
                </div>
                <p className="h-[8px] w-full rounded-md bg-[#063E50]"></p>
            </div>
            <div className='flex justify-center items-center my-10'>
                <p className="h-[3px] w-[15rem] lg:w-[30rem] bg-[#063E50]"></p>
            </div>
            <div className="flex flex-col lg:flex-row justify-evenly items-center pt-10">
                <div className='flex flex-col justify-center my-auto text-justify w-11/12 lg:w-1/2 tracking-widest [word-spacing:1px] [text-shadow:_2px_2px_1px_#290DE7] font-medium space-y-3'>
                    <p className='text-[25px] lg:text-[35px] mb-3'>WEB2 OPPORTUNITIES</p>
                    <p className='text-[20px]'>Education is a key factor in the creation and maintenance of generational wealth.</p>
                    <p className='text-[20px]'>At Rangerverse, we offer a wide range of Web2 education, including courses on stock trading and e-commerce, to help individuals build the knowledge and skills they need to succeed financially.</p>
                    <p className='text-[20px]'>By providing these resources, we aim to help people create a strong foundation for building wealth over time and passing it down to future generations.</p>
                </div>
                <div className='flex items-center justify-center w-11/12 lg:w-1/2 mt-10'>
                    <img src={OpportunityImg} width={360} height={360} className='w-[360px] h-[360px]'/>
                </div>
            </div>
            <div className='flex justify-center items-center my-10'>
                <p className="h-[3px] w-[15rem] lg:w-[30rem] bg-[#063E50]"></p>
            </div>
            <div className="flex flex-col lg:flex-row justify-evenly items-center">
                <div className='flex flex-col justify-center my-auto text-justify w-11/12 lg:w-1/2 tracking-widest [word-spacing:1px] [text-shadow:_2px_2px_1px_#290DE7] font-medium space-y-3'>
                    <p className='text-[25px] lg:text-[35px] mb-3'>WEB3 ALPHA</p>
                    <p className='text-[20px]'>Members will gain access to live NFT market research and analysis, opportunities to join whitelists, and future partnered tools.</p>
                </div>
                <div className='flex items-center justify-center w-11/12 lg:w-1/2 mt-10'>
                    <img src={AlphaImg} width={360} height={360} className='w-[360px] h-[360px]'/>
                </div>
            </div>
            <div className='flex justify-center items-center my-10'>
                <p className="h-[3px] w-[15rem] lg:w-[30rem] bg-[#063E50]"></p>
            </div>
            <div className="flex flex-col lg:flex-row justify-evenly items-center">
                <div className='flex flex-col justify-center my-auto text-justify w-11/12 lg:w-1/2 tracking-widest [word-spacing:1px] [text-shadow:_2px_2px_1px_#290DE7] font-medium space-y-3'>
                    <p className='text-[25px] lg:text-[35px] mb-3'>THE FUTURE</p>
                    <p className='text-[20px]'>We are committed to the long-term growth and development of our brand and will continue to improve and expand into areas where we can have the greatest impact. </p>
                </div>
                <div className='flex items-center justify-center w-11/12 lg:w-1/2 mt-10'>
                    <img src={FutureImg} width={360} height={360} className='w-[360px] h-[360px]'/>
                </div>
            </div>
            
        </div>
    )
}