import React, { useState } from "react";
import Image from "./Image";
import Text from "./Text";
import Flex from "./Flex";
import Rating from "./Rating";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";

const TourCard = ({ imgSrc, title, description, price, icon }) => {

  const [Abir, setAbir] = useState(false);

  const handleclick = () => {
    setAbir(!Abir);
  };

  return (
    <>
    <div className="w-[512px] p-5 bg-white rounded-xl shadow-lg mb-7">
        <Image imgSrc={imgSrc} className={"mb-8"} />
        {icon}
        <div className="px-5">
          <Flex className={"justify-between items-center mb-4"}>
                <div className="">
                    <Text
                        as={"p"}
                        text={title}
                        className={
                        "text-2xl font-poppins font-semibold text-OxfordBlue mb-3"
                        }
                    />
                    <Text
                        as={"p"}
                        text={description}
                        className={"text-base font-poppins text-Grey"}
                    />
                </div>
                <div
                    className=" cursor-pointer"
                    onClick={handleclick}
                    >
                    {Abir ? (
                        <FaHeart className="text-3xl text-red-500" />
                    ) : (
                        <FaRegHeart className="text-3xl" />
                    )}
                </div>
          </Flex>
          <Text
            as={"p"}
            text={"from"}
            className={"text-sm font-poppins text-Grey3 mb-1"}
          />
          <Flex className={"justify-between mb-10"}>
                <div className="">
                    <div className="relative z-20">
                        <Text
                        as={"p"}
                        text={price}
                        className={
                            "text-[32px] font-poppins font-semibold text-OxfordBlue mb-1"
                        }
                        />
                        <span className="w-full h-1 bg-Orange  absolute bottom-3 left-0 opacity-80 -z-10"></span>
                    </div>
                    <Text
                        as={"p"}
                        text={"*Price varies"}
                        className={"text-sm font-poppins text-Grey3 mb-3"}
                    />
                </div>
                <div className="">
                    <Rating className={"mb-2"} />
                    <Text
                        as={"p"}
                        text={"4.7 (108)"}
                        className={"text-sm font-poppins text-Grey3 flex justify-end"}
                    />
                </div>
          </Flex>
          <Flex className={"items-center gap-x-2 mb-2"}>
                <CiClock2 className="text-2xl text-SeaGreen" />
                <Text
                as={"p"}
                text={"7 Days"}
                className={"text-base font-medium font-poppins text-Grey3"}
                />
          </Flex>
          <Flex className={"items-center gap-x-5"}>
                <Flex className={"items-center gap-x-3"}>
                    <FaCheck className=" text-SeaGreen" />
                    <Text
                        as={"p"}
                        text={"Free Cancellation"}
                        className={"text-base font-poppins text-Grey3 "}
                    />
                </Flex>
                <Flex className={"items-center gap-x-3"}>
                    <FaCheck className=" text-SeaGreen" />
                    <Text
                        as={"p"}
                        text={"New on Entrada"}
                        className={"text-base font-poppins text-Grey3 "}
                    />
                </Flex>
          </Flex>
        </div>
    </div>
    </>
  );
};

export default TourCard;
