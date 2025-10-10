import Image from "next/image";

export default function Tracking() {
  return (
    <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-6 sm:mb-8">
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-center mb-3 sm:mb-4">
        Tracking & Progress
      </h2>
      <p className="text-gray-400 text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl mx-auto mb-6 sm:mb-8 px-4">
        Monitor every milestone with precision and celebrate your growth
      </p>
      <div className="flex-1">
        {/* Images - Show fewer on mobile */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 items-center justify-center">
          <div className="z-[9997]">
            <Image
              src={"/11.png"}
              alt="mockup"
              width={310}
              height={800}
              className="w-20 sm:w-28 md:w-40 lg:w-52 xl:w-[310px] h-auto"
            />
          </div>
          <div className="-ml-8 sm:-ml-12 md:-ml-16 lg:-ml-20 -mr-8 sm:-mr-12 md:-mr-16 lg:-mr-20 z-[9998]">
            <Image
              src={"/12.png"}
              alt="mockup"
              width={370}
              height={800}
              className="w-24 sm:w-32 md:w-44 lg:w-60 xl:w-[370px] h-auto"
            />
          </div>
          <div className="z-[9999] -mr-8 sm:-mr-12 md:-mr-16 lg:-mr-20">
            <Image
              src={"/13.png"}
              alt="mockup1"
              width={400}
              height={800}
              className="w-28 sm:w-36 md:w-48 lg:w-64 xl:w-[400px] h-auto"
            />
          </div>
          <div className="hidden sm:block z-[9998] -mr-8 sm:-mr-12 md:-mr-16 lg:-mr-20">
            <Image
              src={"/14.png"}
              alt="mockup1"
              width={370}
              height={800}
              className="w-32 md:w-44 lg:w-60 xl:w-[370px] h-auto"
            />
          </div>
          <div className="hidden md:block z-[9997]">
            <Image
              src={"/10.png"}
              alt="mockup1"
              width={310}
              height={800}
              className="w-40 lg:w-52 xl:w-[310px] h-auto"
            />
          </div>
        </div>
        <div className="bg-[#222222] rounded-[30px] sm:rounded-[40px] md:rounded-[60px] lg:rounded-[80px] p-4 sm:p-6 md:p-8 h-24 sm:h-32 md:h-40 lg:h-[500px] overflow-hidden -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-[400px]"></div>
      </div>
    </div>
  );
}
