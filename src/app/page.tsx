import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import { ArrowDownToLine, CheckCircle, Palette } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    Name: "FASTER THAN LIGHT",
    Icon: ArrowDownToLine,
    description:
      "Get your all digital assets on just one click and it will in your pocket",
  },
  {
    Name: "HIGH QUALITY ASSETS",
    Icon: CheckCircle,
    description:
      "Step into a world of superior digital assets, meticulously curated for you",
  },
  {
    Name: "FULLY CUSTOMIZATION",
    Icon: Palette,
    description:
      "The all teplates on our store is fully customizeable and easy to share",
  },
];

export default function Home() {
  return (
    <>
    <Navbar/>
      <Wrapper>
        <div className="py-16 mx-auto text-center flex flex-col items-center max-w-3xl">
          <p className="text-4xl tracking-tight font-extrabold text-[#F3EDE4] sm:text-9xl">
            PREMIUM  
            <br />
            <span className="text-[#55DD4A]">UI ASSETS</span>
          </p>
          <p className="mt-6 text-lg items-center text-[#F3EDE4]">
            Unlock a seamless avenue for selling UI assets effortlessly. Our
            platform streamlines the process, providing creators with a
            user-friendly interface to showcase and market their digital
            products. With intuitive tools for uploading and
            pricing your assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href={"/products"}
              className="text-lg rounded-xl font-bold py-3 px-4 bg-[#55DD4A] hover:bg-[#7edb77] text-[#122315]"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </Wrapper>
      <section className="bg-[#F3EDE4] mt-10">
        <Wrapper className="py-20">
          <div className="grid grid-col-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perks) => (
              <div
                key={perks.Name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[#7edb77] text-[#122315]">
                    {<perks.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-LG font-bold text-[#122315]">
                    {perks.Name}
                  </h3>
                  <p className="mt-3 text-base text-black">
                    {perks.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
}