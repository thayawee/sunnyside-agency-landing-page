const usersData = [
  {
    img: "/img/image-emily.jpg",
    content:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    position: "Marketing Director",
  },
  {
    img: "/img/image-thomas.jpg",
    content:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    position: "Chief Operating Officer",
  },
  {
    img: "/img/image-jennie.jpg",
    content:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    position: "Business Owner",
  },
];

const Review = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-[100px] lg:p-[150px]">
      <h3 className="uppercase font-fraunces font-bold text-[30px] tracking-[6px] text-gray-500/50">
        Client testimonials
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {usersData.map((user) => (
          <div key={user.name} className="px-[20px]">
            <img
              className="inline-block rounded-full my-[40px] lg:my-[100px]"
              src={user.img}
              alt={user.name}
            />
            <p className="font-barlow text-[20px] text-gray-600/80 mb-[30px] lg:mb-[100px]">
              {user.content}
            </p>
            <h4 className="font-fraunces font-bold text-[20px] mb-[10px]">
              {user.name}
            </h4>
            <p className="font-barlow text-[14px] text-gray-500/50">
              {user.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
