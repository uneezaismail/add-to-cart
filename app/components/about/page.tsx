import Image from "next/image";
import React from "react";
import { BsShopWindow } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaSackDollar,  } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { IoBag } from "react-icons/io5";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";

const About = () => {
  const AboutData = [
    {
      id: 1,
      value: "10.5k",
      label: "Sellers active on our site",
      icon: (
        <BsShopWindow className="text-white group-hover:text-black w-[33px] h-[30px] " />
      ),
    },

    {
      id: 2,
      value: "33k",
      label: "Monthly product Sales",
      icon: (
        <PiCurrencyDollarSimpleBold className="text-white group-hover:text-black w-[33px] h-[30px] " />
      ),
    },
    {
      id: 3,
      value: "45.5k",
      label: "Customers active in our site",
      icon: (
        <IoBag className="text-white group-hover:text-black w-[33px] h-[30px] " />
      ),
    },
    {
      id: 4,
      value: "25k",
      label: "Annual gross sale in our site",
      icon: (
        <FaSackDollar className="text-white group-hover:text-black w-[33px] h-[30px] " />
      ),
    },
  ];
  return (
    <div>
      
        <div className="w-full min-h-screen flex items-center gap-[6rem] py-[7rem]">
          <div className=" max-w-[600px] ">
            <h1 className=" text-[54px] font-semibold  tracking-[0.06em]">
              Our Story
            </h1>
            <p className="  text-[16px] mt-4 mb-8 w-[525px] leading-[1.4]">
              Launced in 2015, Exclusive is South Asia&apos;s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className=" text-[16px] mt-4 mb-8 w-[525px] leading-[1.4]">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className=" flex items-center content-center relative w-[705px] h-[609px]">
            <Image src={"/about-image.png"} alt="abt-img" layout="fill" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 justify-center items-center py-28">
          {AboutData.map((data, index) => (
            <div key={index} className="flex justify-center ">
              <div className=" flex flex-col group shadow-lg border-solid border-gray-200 border-2 rounded-md hover:bg-[#DB4444] hover:text-white sm:w-[120px] md:w-[270px] h-[230px] gap-y-4 justify-center items-center cursor-pointer ">
                <span className="bg-gray-400 rounded-full group-hover:bg-[#ffffff49] text-white w-[80px] h-[80px] flex items-center justify-center  ">
                  <span className="bg-black group-hover:bg-white rounded-full w-[58px] h-[58px] flex items-center justify-center">
                    {data.icon}
                  </span>
                </span>
                <span className="text-3xl font-bold ">{data.value} </span>
                <p className="sm:text-[8px]  md:text-base">{data.label}</p>
              </div>
            </div>
          ))}
        </div>

<div className="flex gap-x-6 mx-auto">
         <div className="flex flex-col justify-between space-y-8">
            <div className="bg-[#F5F5F5] gap-x-16 pt-10 w-[370] h-[430] flex items-center justify-center">
        <Image src={"/image 46.png"} alt="Tom-img" width={236} height={391} />
        </div>
       

<div className="flex flex-col justify-between gap-y-2 ">
    <h4 className="text-3xl font-medium" >Tom Cruise</h4>
    <p className="text-base">Founder & Chairman</p>
    <div className="flex flex-row gap-x-4">
    <span className="w-[24px] h-[24px] " ><FiTwitter/></span>
    <span className="w-[24px] h-[24px] "><FaInstagram/></span>
    <span className="w-[24px] h-[24px] "><RiLinkedinLine/></span>
    </div>

</div>
</div>
         <div className="flex flex-col justify-between space-y-8">
            <div className="bg-[#F5F5F5] gap-x-16 pt-10 w-[370] h-[430] flex items-center justify-center">
        <Image src={"/image 46.png"} alt="Tom-img" width={236} height={391} />
        </div>
       

<div className="flex flex-col justify-between gap-y-2">
    <h4 className="text-3xl font-medium" >Tom Cruise</h4>
    <p className="text-base">Founder & Chairman</p>
    <div className="flex flex-row gap-x-4">
    <span className="w-[24px] h-[24px] " ><FiTwitter/></span>
    <span className="w-[24px] h-[24px] "><FaInstagram/></span>
    <span className="w-[24px] h-[24px] "><RiLinkedinLine/></span>
    </div>

</div>
</div>
         <div className="flex flex-col justify-between space-y-8">
            <div className="bg-[#F5F5F5] gap-x-16 pt-10 w-[370] h-[430] flex items-center justify-center">
        <Image src={"/image 46.png"} alt="Tom-img" width={236} height={391} />
        </div>
       

<div className="flex flex-col justify-between gap-y-2">
    <h4 className="text-3xl font-medium" >Tom Cruise</h4>
    <p className="text-base">Founder & Chairman</p>
    <div className="flex flex-row gap-x-4">
    <span className="w-[24px] h-[24px] " ><FiTwitter/></span>
    <span className="w-[24px] h-[24px] "><FaInstagram/></span>
    <span className="w-[24px] h-[24px] "><RiLinkedinLine/></span>
    </div>

</div>
</div>
</div>

      </div>


   
  );
};

export default About;