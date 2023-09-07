import { useState } from "react";
import { RxHamburgerMenu, RxTriangleLeft } from "react-icons/rx";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleClickShow = () => {
    setMenu(true);
  };

  const handleClickHidden = () => {
    setMenu(false);
  };

  return (
    <div className="flex justify-between items-center px-[40px] py-[50px]">
      <div className="logo">
        <a
          href=""
          className="font-bold font-barlow text-white text-[30px] md:text-[36px] lg:text-[40px]"
        >
          sunnyside
        </a>
      </div>

      <div>
        <div className="menu hidden md:visible md:flex md:gap-[50px] md:items-center md:font-bold md:font-barlow md:text-white">
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Projects</a>
          <p className="uppercase cursor-pointer text-black bg-white hover:text-white hover:bg-sky-300 rounded-full px-[20px] py-[10px]">
            Contact
          </p>
        </div>

        {menu ? (
          <>
            <RxHamburgerMenu
              onClick={handleClickHidden}
              className="relative text-[30px] text-white md:hidden cursor-pointer"
            />
            <div className="absolute top-[130px] right-10 flex flex-col gap-[30px] items-center font-bold font-barlow text-gray-400 border-[1px] bg-white py-[50px] px-[100px] md:hidden">
              <RxTriangleLeft className="absolute top-[-41px] right-[-33px] text-[80px] text-white" />
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Projects</a>
              <p className="uppercase cursor-pointer text-black bg-yellow-300 hover:text-gray-400 hover:bg-yellow-200 rounded-full px-[20px] py-[10px]">
                Contact
              </p>
            </div>
          </>
        ) : (
          <RxHamburgerMenu
            onClick={handleClickShow}
            className="text-[30px] text-white md:hidden cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Nav;
