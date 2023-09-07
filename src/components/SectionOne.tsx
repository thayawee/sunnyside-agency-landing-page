const SectionOne = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="left flex justify-center items-center px-[100px] py-[80px] md:pr-[60px] md:pl-[100px] md:py-[30px] lg:pr-[100px] lg:pl-[150px] lg:py-[30px]">
        <div className="flex flex-col justify-center items-center md:items-start lg:items-start">
          <h3 className="font-fraunces font-bold text-center md:text-left text-[36px] md:text-[26px] lg:text-[40px] leading-[38px] md:leading-[35px] lg:leading-[45px] tracking-[1px]">
            Transform your brand
          </h3>
          <p className="font-barlow text-center md:text-left text-[16px] md:text-[14px] lg:text-[18px] text-gray-500 my-[26px] md:my-[20px] lg:my-[35px]">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a
            href=""
            className="uppercase font-fraunces font-bold text-[14px] lg:text-[18px] tracking-[1px] border-b-yellow-200 hover:border-b-yellow-400 border-b-[8px]"
          >
            Learn more
          </a>
        </div>
      </div>

      <div className="right row-start-1 row-end-2 md:col-start-2 md:col-end-3">
        <img
          className="w-full"
          src="/img/desktop/image-transform.jpg"
          alt="img-transform"
        />
      </div>
    </div>
  );
};

export default SectionOne;
