import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import Badge1 from "../assets/badge1.png";
import Text from "./Text";
import Rating from "./Rating";

const RatingBar = ({photo,name}) => {
  return (
    <>
      <div className="">
            <div className="px-3 py-6 border rounded-t-3xl bg-Barbg">
                <Flex className={"gap-x-[280px] items-center justify-between"}>
                    <div className="">
                        <Flex className={"gap-x-3 items-end"}>
                            <Image imgSrc={photo} imgAlt={"Badge1"}/>
                            <Text as={"p"} text={name} className={"text-[18px] text-Grey3"}/>
                        </Flex>
                    </div>
                    <div className="">
                        <Rating />
                    </div>
                </Flex>
            </div>
      </div>
    </>
  );
};

export default RatingBar;
