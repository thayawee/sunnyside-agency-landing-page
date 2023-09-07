import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-200 flex flex-col justify-center items-center py-[100px]">
      <a
        href=""
        className="font-barlow font-bold text-[40px] text-[#458C7E] hover:text-white"
      >
        sunnyside
      </a>

      <div className="menu flex gap-[20px] md:gap-[50px] lg:gap-[50px] items-center font-barlow text-[20px] mt-[30px] mb-[80px]">
        <a className="text-[#458C7E] hover:text-white" href="">
          About
        </a>
        <a className="text-[#458C7E] hover:text-white" href="">
          Services
        </a>
        <a className="text-[#458C7E] hover:text-white" href="">
          Projects
        </a>
      </div>

      <div className="menu flex gap-[10px] md:gap-[30px] lg:gap-[30px] items-center font-bold font-barlow text-[25px]">
        <a className="text-[#458C7E] hover:text-white" href="">
          <FaFacebookSquare />
        </a>
        <a className="text-[#458C7E] hover:text-white" href="">
          <FaInstagram />
        </a>
        <a className="text-[#458C7E] hover:text-white" href="">
          <FaTwitter />
        </a>
        <a className="text-[#458C7E] hover:text-white" href="">
          <FaPinterest />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
