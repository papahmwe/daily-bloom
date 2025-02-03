import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12">

      <div className="md:w-1/2 text-center md:text-left md:px-8 lg:px-12 font-jost">
        <h1 className="text-4xl font-bold text-theme-light mb-4 font-montserrat">
          YOUR JOURNEY<br/> TO PRODUCTIVITY<br/> STARTS HERE
        </h1>
        <p className="text-gray-700 mb-6 font-semibold">
          Track Daily Habits, Visualize Progress, And <br/> Build A Better You.
        </p>
        <Link href="/start-track" className="bg-theme-light text-white px-6 py-3 rounded-lg shadow-lg">Start Tracking Today</Link>
      </div>

      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Image 
          src="/images/hero.svg" 
          alt="Hero Illustration" 
          width={500} 
          height={400} 
          className="max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
