import Image from "next/image";

export default function Tracking() {
  return (
    <div className="bg-black rounded-3xl p-12 mb-8">
      <h2 className="text-white text-8xl font-bold text-center mb-4">
        Tracking & Progress
      </h2>
      <p className="text-gray-400 text-center text-3xl mx-auto mb-8">
        Monitor every milestone with precision and celebrate your growth
      </p>
      <div className="flex-1">
        <div className="flex gap-4 items-center justify-center">
          <div className="z-9997">
            <Image src={"/11.png"} alt="mockup" width={310} height={800} />
          </div>
          <div className="-ml-20 -mr-20 z-9998">
            <Image src={"/12.png"} alt="mockup" width={370} height={800} />
          </div>
          <div className="z-9999 -mr-20">
            <Image src={"/13.png"} alt="mockup1" width={400} height={800} />
          </div>
          <div className="z-9998 -mr-20">
            <Image src={"/14.png"} alt="mockup1" width={370} height={800} />
          </div>
          <div className="z-9997">
            <Image src={"/10.png"} alt="mockup1" width={310} height={800} />
          </div>
        </div>
        <div className="bg-[#222222] rounded-[80px] p-8 h-150 overflow-hidden -mt-120"></div>
      </div>
    </div>
  );
}
