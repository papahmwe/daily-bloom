import Image from "next/image";

export default function About() {
  return (
    <div className="bg-backgroundPrimary">
      {/* Hero Section */}

      <div className="flex justify-between items-center gap-[70px] mx-20 mt-10 px-5 py-20 h-[449px] mb-10">
        {/* image section*/}
        <div>
          <Image
            src="/assets/about/about-hero-img.png"
            alt="hero-image"
            width={675}
            height={419}
            className="object-cover"
          />
        </div>

        {/* text section*/}
        <div className="flex flex-col gap-[18px]">
          <h1 className="flex flex-col gap-[16px] font-montserrat text-mainPrimary uppercase font-[600] text-[52px] text-right w-[591px] h-[63px] leading-[63.39px]">
            About Us
          </h1>
          <h3 className="font-jost text-mainPrimary font-[400] text-[26px] text-right w-[591px] h-[63px] leading-[37.57px]">
            Habit Tracker is a web app developed by group 1 to help everyone to
            be more productive.
          </h3>
          <div className="w-[591px] flex justify-end items-center gap-[22px] mt-5">
            <button className="w-[168px] h-[52px] border-[2px] rounded-[10px] bg-mainPrimary text-[#F5F5F5] font-montserrat font-[600] text-[23px] leading-[28.04px]">
              Goals
            </button>
            <button className="w-[247px] h-[52px] border-[2px] border-mainPrimary rounded-[10px] text-mainPrimary font-montserrat font-[600] text-[23px] leading-[28.04px] ">
              Mission & Vision
            </button>
          </div>
        </div>
      </div>

      {/* Goals Section, Mission & Vision Section, Footer */}

      <div className="bg-mainLight rounded rounded-t-[150px]">
        {/* Goals Section */}

        <div className="w-full h-[743px] ">
          <div className="flex flex-col justify-center items-center gap-[20px] py-20">
            <Image
              src="/assets/about/goals-image.png"
              alt="goals_image"
              width={365}
              height={231}
              className="object-cover"
            />
            <h1 className="w-[591px] h-[63px] font-montserrat font-[600] text-[52px] text-[#F5F5F5] leading-[63.39px] text-center">
              Goals
            </h1>
            <h3 className="w-[591px] h-[114px] font-jost font-[400] text-[26px] leading-[37.57px] text-[#F5F5F5] text-center">
              Our goal is to empower individuals to build sustainable habits and
              celebrate consistent growth through simple, actionable tools
            </h3>
          </div>
        </div>

        {/* Mission & Vision Section*/}

        <div className="w-full h-[893px] rounded rounded-t-[150px] bg-backgroundPrimary mt-[-50px] pt-20 gap-[20px] flex flex-col">
          {/* Mission */}
          <div className="flex justify-between items-center gap-[70px] mx-20 px-5 ">
            {/* image */}
            <Image
              src="/assets/about/mission_image.png"
              alt="Mission_image"
              width={519}
              height={389}
              className="object-cover "
            />
            {/* text */}
            <div className="w-[650px] h-[269px] flex flex-col gap-[24px]">
              <h1 className="h-[63px] font-montserrat font-[600] text-[52px] text-mainPrimary leading-[63.39px] text-center">
                Our mission
              </h1>
              <h3 className="h-[190px] font-jost font-[400] text-[26px] leading-[37.57px] text-center text-mainPrimary">
                Our mission is to inspire and empower individuals to embrace
                mindfulness and cultivate mental well-being. we provide tools to
                help people build positive habits and lead fulfilling lives free
                from the overwhelming grip of stress and anxiety.
              </h3>
            </div>
          </div>

          {/* Vision */}
          <div className="flex justify-between items-center gap-[70px] mx-20 px-5 ">
            {/* text */}
            <div className="w-[650px] h-[269px] flex flex-col gap-[24px]">
              <h1 className="h-[63px] font-montserrat font-[600] text-[52px] text-mainPrimary leading-[63.39px] text-center">
                Our vision
              </h1>
              <h3 className="h-[190px] font-jost font-[400] text-[26px] leading-[37.57px] text-center text-mainPrimary">
                our vision is to create a world where building habits is simple,
                mindful, and empowering helping individuals lead balanced,
                resilient lives and achieve their goals without stress or
                overwhelm
              </h3>
            </div>

            {/* image */}
            <Image
              src="/assets/about/vision_image.png"
              alt="Vision_image"
              width={519}
              height={389}
              className="object-cover "
            />
          </div>
        </div>

        {/* Footer */}

        <div className="h-[478px] mx-20 mt-10 px-5">
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
                  <ul className=" list-none font-jost font-[400] text-[18px] text-[#F5F5F5] leading-[26.01px] uppercase flex flex-col gap-[10px]">
                    <li className="">Home</li>
                    <li className="">About Us</li>
                    <li className="">Contact Us</li>
                    <li className="">Help</li>
                    <li className="">Sing Up</li>
                    <li className="">Login</li>
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
    </div>
  );
}
