import React from "react";
import Image from "next/image";

type HeroProps = {
  leftTitle?: string;
  primaryMockupSrc?: string;
  secondaryMockupSrc?: string;
  thirdMockupSrc?: string;
};

export default function Hero({
  leftTitle = "Stay\nStrong",
  // point to provided public images
  primaryMockupSrc = "/4.png",
  secondaryMockupSrc = "/5.png",
  thirdMockupSrc = "/9.png",
}: HeroProps) {
  const [line1, line2] = leftTitle.split("\n");
  return (
    <div className="bg-accent rounded-[80px] p-8 mb-4 -mt-5 relative">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col mb-8 md:mb-0 justify-center">
          <h1 className="text-[280px] font-black text-white mb-4 leading-[0.9]">
            {line1}
          </h1>
          <h1 className="text-[280px] font-black text-white mb-4 leading-[0.9]">
            {line2}
          </h1>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <div>
            <Image
              src={secondaryMockupSrc}
              alt="mockup"
              width={340}
              height={800}
            />
          </div>
          <div className="-ml-50 -mr-50">
            <Image
              src={primaryMockupSrc}
              alt="mockup"
              width={370}
              height={800}
            />
          </div>
          <div>
            <Image
              src={thirdMockupSrc}
              alt="mockup1"
              width={400}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
