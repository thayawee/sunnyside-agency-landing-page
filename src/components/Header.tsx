import Nav from "./Nav";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

const Header = () => {
  return (
    <div className="h-[600px] lg:h-[650px] bg-header bg-cover bg-center">
      <Nav />
      <h1 className="font-bold font-fraunces uppercase text-white text-center text-[40px] md:text-[48px] lg:text-[60px] tracking-[10px]">
        We are creatives
      </h1>
      <div className="flex justify-center mt-[50px]">
        <HiOutlineArrowNarrowDown className="text-white text-[80px]" />
      </div>
    </div>
  );
};

export default Header;
