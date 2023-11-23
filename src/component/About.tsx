import AboutImg from '../assets/about.png';
import CommunityImg from  '../assets/image.gif';
import RoadmapImg from '../assets/RANGER-02.gif';
export const About = () => {
    return (
        <div id='about'>
            <div className="flex flex-col lg:flex-row justify-evenly items-center pt-10">
                <div className='flex flex-col justify-center my-auto text-justify w-11/12 lg:w-1/2 tracking-widest [word-spacing:1px] [text-shadow:_2px_2px_1px_#290DE7] font-medium space-y-3'>
                    <p className='text-[25px] lg:text-[35px] mb-3'>WHAT IS RANGERVERSE ?</p>
                    <p className='text-[20px]'>Rangerverse is a 333-supply project utilizing NFTs to provide educational value while offering practical utility.</p>
                    <p className='text-[20px]'>Our “Rangers” will provide proof of ownership and access to our private Discord group, “Rangerverse,” and exclusive access to features such as web2 and web3 opportunities, and alpha calls.</p>
                </div>
                <div className='flex items-center justify-center w-11/12 lg:w-1/2 mt-10'>
                    <img src={AboutImg} width={450} height={300}/>
                </div>
            </div>
            <div className='flex justify-center items-center my-10'>
                <p className="h-[3px] w-[15rem] lg:w-[30rem] bg-[#063E50]"></p>
            </div>
            <div className="flex flex-col lg:flex-row justify-evenly items-center">
                <div className='flex flex-col justify-center my-auto text-justify w-11/12 lg:w-1/2 tracking-widest [word-spacing:1px] [text-shadow:_2px_2px_1px_#290DE7] font-medium space-y-3'>
                    <p className='text-[25px] lg:text-[35px] mb-3'>COMMUNITY IS KEY</p>
                    <p className='text-[20px]'>The first step is to build trust in our community. Building a community is an important aspect of any project.</p>
                    <p className='text-[20px]'>A strong community can provide support, encouragement, and a sense of belonging for its members. It can also be a valuable resource for gathering feedback, generating new ideas, and building relationships.</p>
                    <p className='text-[20px]'>We want to be engaging and networking with members, provide value and resources, foster a sense of inclusivity, and be transparent.</p>
                </div>
                <div className='flex items-center justify-center w-11/12 lg:w-1/2 mt-10'>
                    <img src={CommunityImg} width={360} height={360} className='w-[360px] h-[360px]'/>
                </div>
            </div>
            <div className='flex justify-center items-center my-10'>
                <p className="h-[3px] w-[15rem] lg:w-[30rem] bg-[#063E50]"></p>
            </div>
            <div className="flex flex-col lg:flex-row justify-evenly items-center">
                <div className='flex flex-col justify-center my-auto text-justify w-11/12 lg:w-1/2 tracking-widest [word-spacing:1px] [text-shadow:_2px_2px_1px_#290DE7] font-medium space-y-3'>
                    <p className='text-[25px] lg:text-[35px] mb-3'>ROADMAP ?</p>
                    <p className='text-[20px]'>We’re ditching the roadmaps and replacing them with missions..</p>
                    <p className='text-[20px]'>The missions will be featured on our website, their status will update with every new mission.</p>
                    <p className='text-[20px]'>This will allow us to invest more specifically into our community based on the market conditions & what we think is best for Rangers in real time.</p>
                </div>
                <div className='flex items-center justify-center w-11/12 lg:w-1/2 mt-10'>
                    <img src={RoadmapImg} width={360} height={360} className='w-[360px] h-[360px]'/>
                </div>
            </div>
        </div>
    )
}