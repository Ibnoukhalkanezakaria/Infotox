import React, { useState } from "react";
import image1 from "../../assets/Easy/image.png";
import icon1 from "../../assets/Easy/icon1.svg";
import PrimaryButton from "../Buttons/PrimaryButton";
import { FaPlay } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const EasySection = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="p50-section bg-primary-clr overflow-hidden">
      <div className="Wrapper2  flex justify-center flex-row m-auto">
        <div className="m-auto md:grid-cols-2 grid-cols-1 items-center grid justify-center  p100-section gap-6 ">
          <div>
            <h2 className="secondary-clr fw-600 fw-600 text-5xl max-w-[500px] leading-[80px]">
              Ship easy with our framework
            </h2>
            <p className="color8 leading-7 pt-8 pb-8 max-w-[450px]">
              Enable native integrations with your marketing platforms and ship
              seamlessly using the best carrier partner for your business.
            </p>
            <PrimaryButton>See how we help</PrimaryButton>
          </div>
          <div
            onClick={() => setShowVideo(!showVideo)}
            className="cursor-pointer"
          >
            <div className="relative">
              <img
                src={image1}
                alt="image"
                className="rounded-3xl h-[400px] w-[800px]"
              />
              <img
                src={icon1}
                alt="icon"
                className="absolute left-[-10%] top-[-10%]"
              />
              <div className=" absolute translate-50 left-[50%] top-[50%]  ">
                <div className="duration-300 hover:scale-90 hover:duration-300 bg-color3 flex justify-center items-center rounded-full w-[70px] h-[70px]">
                  <FaPlay className="primary-clr text-xl " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          showVideo ? "block" : "hidden"
        } bg-[#000000af] fixed top-0 w-full h-screen z-[9999] overflow-hidden right-0 left-0 bottom-0`}
      >
        <div className="translate-50 absolute left-[50%] top-[50%]">
          <iframe
            Width="900"
            height="515"
            src="https://www.youtube.com/embed/O5TdnuUhIgs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div
          onClick={() => setShowVideo(false)}
          className="absolute right-10 top-10"
        >
          <AiOutlineClose className="text-2xl cursor-pointer primary-clr" />
        </div>
      </div>
    </div>
  );
};

export default EasySection;
