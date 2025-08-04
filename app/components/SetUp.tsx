'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
const SetUp = () => {
      const texts = [
    'Trusted by thousands',
    'Start with as low as ₦100',
    'Regulated by SEC',
    'Zero withdrawal charges',
    'Save and invest easily',
    'Grow your wealth'
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div>
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
            <p className="text-8xl  text-blue-900 mb-4">₦5,000</p>

            <div className="flex flex-wrap gap-4">
              <select className="  text-blue-900 focus:outline-none">
                <option value="Naira">Naira</option>
                <option value="Dollar">Dollar</option>
              </select>

              <select className="focus:outline-none text-blue-900">
                <option value="1">Monthly</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
              </select>

              <select className=" text-blue-900 focus:outline-none">
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
            <p className="text-2xl  text-gray-600 mb-2">Today, you'd have</p>
            <p className="text-8xl  text-gray-500 mb-4">₦221,342</p>

            <p className="text-blue-700 font-medium mb-2 bg-blue-100 p-2 mx-56">
              ₦452,678 earned in return on Cowrywise
            </p>
            <p className="text-gray-700  text-sm  mb-4">
              * In a blank you'd earn ₦1,234
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
        <div className=" px-16 py-30  text-white">
          <h2 className="text-5xl font-bold text-white mb-12">
            Keeping your money safe <br /> is our business.
          </h2>
          <p className="text-white">
            Trust is our currency. We are committed to the security of your
            money <br /> and the protection of your account.
          </p>
          <a href="#" className="text-blue-200 hover:underline">
            Learn more
          </a>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
            <div className="flex flex-col space-y-6">
              <div className="">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Top notch security
                </h4>
                <p className="text-white/80">
                  We use industry-standard encryption technology to protect user
                  data. We also use two-factor authentication to verify all
                  customer accounts, so you can be sure that your funds are safe
                  and secure.
                </p>
              </div>

              <div className="">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Regulatory Compliance
                </h4>
                <p className="text-white/80">
                  Cowrywise is a duly registered fund manager with the
                  Securities and Exchange Commission (SEC) of Nigeria. All our
                  activities are in full compliance with regulatory requirements
                  to the ultimate protection of our clients.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Assets Custody
                </h4>
                <p className="text-white/80">
                  Our users’ financial assets are held with a licensed
                  custodian, Zenith Nominees Limited, for safekeeping to prevent
                  misappropriation, misuse, theft, and/or loss, and in
                  accordance with applicable law.
                </p>
              </div>

              <div className="">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Best-in-class Assets
                </h4>
                <p className="text-white/80">
                  All the investment options listed on Cowrywise, are carefully
                  screened, managed by professional fund managers. All the
                  diverse mutual funds registered with the SEC, with standard
                  third-party custodian structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section>
      <h5 className="text-4xl mt-20 text-gray-800 mb-2">WHY COWRYWISE ?</h5>
      <span className="text-gray-500 text-6xl mt-4 ">
        {texts[index]}
      </span>
    </section>
    </div>
  );
};

export default SetUp;
