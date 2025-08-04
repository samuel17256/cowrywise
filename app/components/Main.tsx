"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface StepCardProps {
  title: string;
  description: string;
  number: number;
  position: string;
}

const StepCard: React.FC<StepCardProps> = ({
  title,
  description,
  number,
  position,
}) => (
  <div className={`absolute ${position} flex items-center`}>
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      <h4 className="font-semibold text-blue-950 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <div className="ml-2 bg-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-blue-600">
      {number}
    </div>
  </div>
);

const Main = () => {
  const texts = [
    "Trusted by thousands",
    "Start with as low as ₦100",
    "Regulated by SEC",
    "Zero withdrawal charges",
    "Save and invest easily",
    "Grow your wealth",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);
  return (
    <section className="relative bg-white py-24 px-8 md:px-4">
      <div className=" mx-auto grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h1 className="text-xl md:text-7xl font-bold text-blue-950">
            Get a <span className="italic font-light">little</span> richer each
            day
          </h1>
          <p className="text-lg text-blue-900">
            One small step today, a giant leap for tomorrow.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-700">
            Start Building Wealth
          </button>
        </div>

        <div className="relative h-[600px]">
          <div className="absolute bottom-0 left-6/12 z-10">
            <div className="w-30 h-[340px] bg-blue-700 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-blue-800 opacity-60" />
              <div className="absolute -right-2 top-0 w-2 h-full bg-blue-900 transform skew-y-6" />
            </div>
          </div>

          <div className="absolute bottom-0 left-8/12 z-10">
            <div className="w-30 h-[430px] bg-blue-600 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-700 opacity-60" />
              <div className="absolute -right-2 top-0 w-2 h-full bg-blue-800 transform skew-y-6" />
            </div>
          </div>

          <div className="absolute bottom-0 left-10/12 z-10">
            <div className="w-30 h-[520px] bg-blue-500 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-600 opacity-60" />
              <div className="absolute -right-2 top-0 w-2 h-full bg-blue-700 transform skew-y-6" />
            </div>
          </div>

          <StepCard
            title="Build your savings"
            description="Consistently automate your savings while setting realistic goals."
            number={1}
            position="bottom-[290px] left-[90px]"
          />
          <StepCard
            title="Invest deliberately"
            description="Invest in our diverse range of assets that grow in value over time."
            number={2}
            position="bottom-[400px] left-[210px]"
          />
          <StepCard
            title="Stay rich ✨"
            description="Protect your wealth by managing risk, seeking advice and making smart financial decisions."
            number={3}
            position="bottom-[500px] left-[340px]"
          />
        </div>
      </div>

      <section className=" py-20 overflow-hidden mt-20">
        <div className=" max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-6xl font-semibold text-blue-950 py-20">
            You name it, we've <br /> figured it out.
          </h1>

          <div className="relative w-full overflow-hidden">
            <div
              className="flex gap-6 animate-slide"
              style={{
                animation: "slide 25s linear infinite",
                width: "max-content",
              }}
            >
              <div className="min-w-[250px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                <div className="text-6xl text-blue-600 leading-none mb-6">
                  “
                </div>
                <p className="text-5xl text-blue-600 font-semibold">
                  Automate and <br /> build my savings.
                </p>
              </div>
              <div className="min-w-[250px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                <div className="text-6xl text-blue-600 leading-none mb-6">
                  “
                </div>
                <p className="text-5xl text-blue-600 font-semibold">
                  Access Naira & <br /> USD investments.
                </p>
              </div>
              <div className="min-w-[250px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                <div className="text-6xl text-blue-600 leading-none mb-6">
                  “
                </div>
                <p className="text-5xl text-blue-600 font-semibold">
                  Get better <br /> returns on my money.
                </p>
              </div>
              <div className="min-w-[250px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                <div className="text-6xl text-blue-600 leading-none mb-6">
                  “
                </div>
                <p className="text-5xl text-blue-600 font-semibold">
                  Invest my <br /> business cash.
                </p>
              </div>
              <div className="min-w-[250px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                <div className="text-6xl text-blue-600 leading-none mb-6">
                  “
                </div>
                <p className="text-5xl text-blue-600 font-semibold">
                  Invest in my <br /> funds easily.
                </p>
              </div>
              <div className="min-w-[250px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                <div className="text-6xl text-blue-600 leading-none mb-6">
                  “
                </div>
                <p className="text-5xl text-blue-600 font-semibold">
                  Invest with low fees.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes slide {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      <section className=" px-4 bg-white">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center mt-30">
            <Image
              src="/cowrywise-app-investment-platform-nigeria.png"
              alt="Investment App Screenshot"
              width={400}
              height={200}
              className=" object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              It takes 5 minutes
            </h2>

            <div className="flex flex-col space-y-8 py-4">
              <div className="flex items-start space-x-4 relative py-6">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8  mb-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10">
                    01
                  </div>
                  <div className="w-px h-20 bg-blue-400 absolute top-8"></div>
                </div>
                <div>
                  <p className="text-blue-800 font-semibold">
                    Create an account
                  </p>
                  <p className="text-gray-600">
                    Sign up for an account with your name, email and phone
                    number.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 relative py-6">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 mb-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10">
                    02
                  </div>
                  <div className="w-px h-20 bg-blue-400 absolute top-8 "></div>
                </div>
                <div>
                  <p className="text-blue-800 font-semibold">Set your goals</p>
                  <p className="text-gray-600">
                    Using your debit card or a bank transfer, set up your first
                    plan.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    03
                  </div>
                </div>
                <div>
                  <p className="text-blue-800 font-semibold">Start investing</p>
                  <p className="text-gray-600">
                    Sit back, relax & let your money work for you all day, every
                    day.
                  </p>
                </div>
              </div>

              <button className="mt-4 bg-blue-600 w-34 px-4 py-2 text-white  rounded-md font-semibold shadow hover:bg-blue-700 transition">
                Sign up now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto p-6 text-center justify-center items-center flex flex-col">
          <h4 className="text-2xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Stay the course, reap the rewards
          </h4>

          <div className="mb-10">
            <p className="text-gray-600 text-2xl mb-2">If you invested</p>
            <p className="text-8xl text-blue-900 mb-4">₦5,000</p>

            <div className="flex flex-wrap gap-4">
              <select className="text-blue-900 focus:outline-none">
                <option value="Naira">Naira</option>
                <option value="Dollar">Dollar</option>
              </select>

              <select className="focus:outline-none text-blue-900">
                <option value="1">Monthly</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
              </select>

              <select className="text-blue-900 focus:outline-none">
                <option value="1">3 Years Ago</option>
                <option value="2">2 Years</option>
                <option value="3">1 Year</option>
              </select>
            </div>
          </div>

          <div className="relative w-full my-12 flex items-center justify-center">
            <div className="absolute w-full h-0.5 bg-gray-300"></div>
            <div className="z-10 w-18 h-18 rounded-full bg-white border border-gray-400 shadow-lg"></div>
          </div>

          <div>
            <p className="text-2xl text-gray-600 mb-2">Today, you&apos;d have</p>
            <p className="text-8xl text-gray-500 mb-4">₦221,342</p>

            <p className="text-blue-700 font-medium mb-2 bg-blue-100 p-2 mx-56">
              ₦452,678 earned in return on Cowrywise
            </p>
            <p className="text-gray-700 text-sm mb-4">
              * In a blank you&apos;d earn ₦1,234
            </p>

            <p className="text-sm text-gray-600">
              Calculations are based on the average performance of conservative
              mutual funds on Cowrywise from 2019. Calculation excludes
              processing fees.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 w-full">
        <div className="px-16 py-30 text-white">
          <h2 className="text-5xl font-bold text-white mb-12">
            Keeping your money safe <br /> is our business.
          </h2>
          <p className="text-white">
            Trust is our currency. We are committed to the security of your
            money <br /> and the protection of your account.
          </p>
          <a href="#" className="text-blue-200 hover:underline mt-4">
            Learn more
          </a>
          {/* security content... (unchanged) */}
        </div>
      </section>

      <section>
        <h5 className="text-4xl mt-20 text-gray-800 mb-2">WHY COWRYWISE ?</h5>
        <span className="text-gray-500 text-6xl mt-4">{texts[index]}</span>
      </section>
    </section>
  );
};

export default Main;


