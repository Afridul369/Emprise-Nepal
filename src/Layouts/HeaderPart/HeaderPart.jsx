import React, { useEffect } from "react";
import Container from "../../Components/Container";
import Flex from "../../Components/Flex";
import Image from "../../Components/Image";
import Logo from "../../assets/empriseLogo.png";
import Menu from "../../Components/Menu";
import Button1 from "../../Components/Button1";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router";

const HeaderPart = () => {
    
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#searchbar") &&
        !event.target.closest("#search")
      ) {
        document.getElementById("searchbar").style.display = "none";
        document.getElementById("search").style.display = "block";
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const abir = () => {
    document.getElementById("search").style.display = "none";
    document.getElementById("searchbar").style.display = "block";
  };

  return (
    <>
      <div className="py-8 ">
        <Container>
          <Flex className={"items-center"}>
            <Link to={"/"}>
              <Image imgSrc={Logo} imgAlt={"Logo"} />
            </Link>
            <ul className="flex items-center gap-x-16 px-24">
              <Link to={"/search"}>
                <div className="relative group cursor-pointer">
                  <Menu menuname={"Destination"} />
                  <span className="absolute left-0 bottom-0 bg-SeaGreen w-full h-1 scale-x-0 group-hover:scale-x-100 duration-500 "></span>
                </div>
              </Link>
              <Link to={"/tour"}>
                <div className="relative group cursor-pointer">
                  <Menu menuname={"Activities"} />
                  <span className="absolute left-0 bottom-0 bg-SeaGreen w-full h-1 scale-x-0 group-hover:scale-x-100 duration-500 "></span>
                </div>
              </Link>
              <Link to={"/search"}>
                <div className="relative group cursor-pointer">
                  <Menu menuname={"Specials"} />
                  <span className="absolute left-0 bottom-0 bg-SeaGreen w-full h-1 scale-x-0 group-hover:scale-x-100 duration-500 "></span>
                </div>
              </Link>
              <IoSearch className="text-2xl" id="search" onClick={abir} />
              <input
                type="text"
                placeholder="Search"
                id="searchbar"
                className="border pl-5 pr-48 py-3 border-Border rounded-xl text-lg hidden"
              />
            </ul>
            <Flex className={"gap-x-3 ml-auto"}>
              <Button1 text={"Login"} />
              <Button1 text={"Sign Up"} />
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default HeaderPart;
