import Lottie from "lottie-react";
import bannerAnimation from "./banner.json"

const Banner = () => {
  return (
    <div className="mt-20">
      <div className="hero h-[600px] bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('https://i.ibb.co/vwFLLtK/banner1.jpg')] bg-right md:bg-right lg:bg-center bg-cover border border-transparent rounded-xl">
        <div className="hero-overlay bg-opacity-0 border border-transparent rounded-xl"></div>
        <div className="hero-content text-center flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-16 leading-loose text-neutral-content">
            {/* animation */}
            <Lottie className="w-3/4 md:w-1/3 lg:w-2/3" animationData={bannerAnimation} loop={true} />
            {/* text content */}
            <div className="text-[#ebb22f]">
                <h1 className="mb-4 md:mb-6 lg:mb-10 text-4xl md:text-6xl lg:text-7xl font-bold font-indie">Hello there!</h1>
                <p className="mb-5 font-semibold text-lg md:text-2xl font-indie flex flex-col gap-2">
                    <span>Got some extra food you want to share?  </span>
                    <span>Share the love! Join our community and make a difference by donating your extra food to those in need. </span>
                    <span>Together, let&apos;s nourish and uplift lives. </span>
                </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
