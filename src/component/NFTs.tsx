
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NFT1 from '../assets/nfts/nft1.gif';
import NFT2 from '../assets/nfts/nft2.gif';
import NFT3 from '../assets/nfts/nft3.gif';
import NFT4 from '../assets/nfts/nft4.gif';
import NFT5 from '../assets/nfts/nft5.gif';
import NFT6 from '../assets/nfts/nft6.gif';
import NFT7 from '../assets/nfts/nft7.gif';
import NFT8 from '../assets/nfts/nft8.gif';
import NFT9 from '../assets/nfts/nft9.gif';
import NFT10 from '../assets/nfts/nft10.gif';
import NFT11 from '../assets/nfts/nft11.gif';
import NFT12 from '../assets/nfts/nft12.gif';
import NFT13 from '../assets/nfts/nft13.gif';
import NFT14 from '../assets/nfts/nft14.gif';
import NFT15 from '../assets/nfts/nft15.gif';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    }
};

export const NFTs = () => {
  return (
    <div id="gallery">
      <button className="bg-[#00a2d6] text-[15px] py-2 px-5 rounded-md mt-[2rem] ">GALLERY</button>
      <div className='flex justify-center items-center my-10'>
          <p className="h-[3px] w-[15rem] lg:w-[30rem] bg-[#063E50]"></p>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={false}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT1}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT2}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT3}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT4}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT5}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT6}/></div>
      </Carousel>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={false}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT7}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT8}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT9}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT10}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT11}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT12}/></div>
      </Carousel>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={false}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px padding-20"
      >
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT13}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT14}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT15}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT4}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT5}/></div>
          <div className='w-[5rem] lg:w-[13rem] p-2'><img src={NFT6}/></div>
      </Carousel>
      <div className='flex justify-center items-center my-10'>
          <p className="h-[3px] w-[15rem] lg:w-[30rem] bg-[#063E50]"></p>
      </div>
    </div>
  );
};

export default Carousel;
