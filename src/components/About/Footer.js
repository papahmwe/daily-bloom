import Image from "next/image";

const footerItems = [
  { id: 1, name: "Home", route: "" },
  { id: 2, name: "About Us", route: "" },
  { id: 3, name: "Contact Us", route: "" },
  { id: 4, name: "Help", route: "" },
  { id: 5, name: "Sing Up", route: "" },
  { id: 6, name: "Login", route: "" },
];

const data = [
  { id: 1, text: "Facebook", image: "/assets/about/facebook.png" },
  { id: 2, text: "LinkedIn", image: "/assets/about/linkedin_icon.png" },
  { id: 3, text: "X", image: "/assets/about/x_icon.png" },
];

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <div className="h-[478px] mt-20 px-10">
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
                <ul className="  flex flex-col gap-[10px]">
                  {footerItems.map((item, index) => (
                    <li
                      key={index}
                      className="hover:text-mainPrimary list-none font-jost font-[500] text-[18px] text-[#F5F5F5]  leading-[26.01px] uppercase cursor-pointer duration-700 transition-all"
                    >
                      {item.name}
                    </li>
                  ))}
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
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="w-[73px] h-[70px] flex flex-col justify-center items-center gap-[4px]"
                    >
                      <Image
                        src={item.image}
                        alt={item.text}
                        width={40}
                        height={40}
                      />
                      <h3 className="h-[26px] font-jost font-[400] text-[18px] text-[#F5F5F5] leading-[26.01px] text-center">
                        {item.text}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
