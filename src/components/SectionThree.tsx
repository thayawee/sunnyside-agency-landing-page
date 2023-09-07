const SectionThree = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="left bg-sec-three-left bg-cover bg-center w-full h-[700px] flex justify-center items-end px-[100px] py-[50px] md:px-[70px] md:py-[60px] lg:px-[130px] lg:py-[80px]">
        <div className="text-center">
          <h3 className="font-fraunces font-bold text-[32px] md:text-[36px] lg:text-[38px] leading-[70px] text-gray-700/90">
            Graphic design
          </h3>
          <p className="font-barlow text-[20px] text-gray-500 mt-[20px] lg:mt-[30px]">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>

      <div className="right bg-sec-three-right bg-cover bg-center w-full h-[700px] flex justify-center items-end px-[100px] py-[50px] md:px-[70px] md:py-[60px] lg:px-[130px] lg:py-[80px]">
        <div className="text-center">
          <h3 className="font-fraunces font-bold text-[32px] md:text-[36px] lg:text-[38px] leading-[70px] text-gray-700/90">
            Photography
          </h3>
          <p className="font-barlow text-[20px] text-gray-500 mt-[20px] lg:mt-[30px]">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
