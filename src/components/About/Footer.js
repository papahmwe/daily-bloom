import Image from "next/image";

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <div className="h-[478px] mx-20 mt-20 px-5">
        <div className="w-[1308px] h-[394.18px] flex justify-center items-center gap-[100px]">
          {/* first */}
          <div className=" w-[469px] ">
            <div className="flex flex-col gap-[19px] justify-center items-center">
              {/* image */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[160px] h-[160px] bg-backgroundPrimary rounded-full opacity-[60%]"></div>
                </div>
                <div className="relative z-10 flex items-center justify-center">
                  <div className="flex flex-col justify-between items-center">
                    <Image
                      src="/assets/about/footer_logo.png"
                      alt="logo_image"
                      width={119}
                      height={111.51}
                      className="object-cover "
                    />
                    <Image
                      src="/assets/about/footer_logo_text.png"
                      alt="logo_image"
                      width={197}
                      height={51}
                      className="object-cover "
                    />
                  </div>
                </div>
              </div>
              {/* text */}
              <h3 className="w-[469px] h-[201px] font-jost font-[400] text-[26px] text-[#F5F5F5] leading-[37.57px] text-center">
                Our habit tracker is designed to help you build and maintain
                positive routines, supporting your personal goals with a
                balanced and sustainable approach to productivity and
                well-being.
              </h3>
            </div>
          </div>

          {/* second, third */}

          <div className="w-[739px] h-[281px] flex justify-start gap-[100px]">
            {/* second */}
            <div className="w-[189px] h-[281px] flex flex-col justify-start gap-[24px]">
              <h1 className="w-[189px] h-[29px] font-montserrat font-[700] text-[24px] text-[#F5F5F5] leading-[29.26px] ">
                Quick Use Link
              </h1>
              <div className="w-[151px] h-[228px] ">
                <ul className=" list-none font-jost font-[400] text-[18px] text-[#F5F5F5]  leading-[26.01px] uppercase flex flex-col gap-[10px]">
                  <li className="hover:text-mainPrimary cursor-pointer duration-700 transition-all">
                    Home
                  </li>
                  <li className="hover:text-mainPrimary cursor-pointer duration-700 transition-all">
                    About Us
                  </li>
                  <li className="hover:text-mainPrimary cursor-pointer duration-700 transition-all">
                    Contact Us
                  </li>
                  <li className="hover:text-mainPrimary cursor-pointer duration-700 transition-all">
                    Help
                  </li>
                  <li className="hover:text-mainPrimary cursor-pointer duration-700 transition-all">
                    Sing Up
                  </li>
                  <li className="hover:text-mainPrimary cursor-pointer duration-700 transition-all">
                    Login
                  </li>
                </ul>
              </div>
            </div>

            {/* third */}
            <div className=" w-[450px] h-[280px] ">
              <div className="flex flex-col gap-[50px]">
                <div className="flex flex-col gap-[24px]">
                  {/* header */}
                  <h1 className="w-[189px] h-[29px] font-montserrat font-[700] text-[24px] text-[#F5F5F5] leading-[29.26px] ">
                    Contact
                  </h1>
                  {/* list */}
                  <ul className=" list-none font-jost font-[400] text-[18px] text-[#F5F5F5] leading-[26.01px] uppercase flex flex-col gap-[12px]">
                    <li>2715 Ash Dr. San Jose, South Dakota 83475</li>
                    <li>Email : felicia.reid@example.com</li>
                    <li>Phone : (201) 555-0124</li>
                  </ul>
                </div>
                {/* social */}
                <div className="w-[287px] h-[70px] flex justify-between items-center">
                  <div className="w-[73px] h-[70px] flex flex-col justify-center items-center gap-[4px]">
                    <Image
                      src="/assets/about/facebook.png"
                      alt="facebook_image"
                      width={40}
                      height={40}
                    />
                    <h3 className="h-[26px] font-jost font-[400] text-[18px] text-[#F5F5F5] leading-[26.01px] text-center">
                      Facebook
                    </h3>
                  </div>
                  <div className="w-[73px] h-[70px] flex flex-col justify-center items-center gap-[4px]">
                    <Image
                      src="/assets/about/linkedin_icon.png"
                      alt="linkedIn_image"
                      width={40}
                      height={40}
                    />
                    <h3 className="h-[26px] font-jost font-[400] text-[18px] text-[#F5F5F5] leading-[26.01px] text-center">
                      LinkedIn
                    </h3>
                  </div>
                  <div className="w-[73px] h-[70px] flex flex-col justify-center items-center gap-[4px]">
                    <Image
                      src="/assets/about/x_icon.png"
                      alt="X_image"
                      width={40}
                      height={40}
                    />
                    <h3 className="h-[26px] font-jost font-[400] text-[18px] text-[#F5F5F5] leading-[26.01px] text-center">
                      X
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
