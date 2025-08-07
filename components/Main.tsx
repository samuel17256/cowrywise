"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "./Hero";

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
    <section className="">
      <Hero />
      <div className="grid md:grid-cols-2 gap-8 py-20">
        <div className="space-y-6 pl-2">
          <h1 className="text-xl md:text-7xl font-bold text-blue-950 pl-2">
            Get a <span className="italic font-light">little</span> richer each
            day
          </h1>
          <p className="text-lg text-blue-900 pl-2">
            One small step today, a giant leap for tomorrow.
          </p>
          <button className="mt-4 bg-blue-600 text-white ml-2 px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-700">
            Start Building Wealth
          </button>
        </div>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1270 1360"
            width="1270"
            height="1360"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "100%",
              height: "100%",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            <defs>
              <clipPath id="__lottie_element_2">
                <rect width="1270" height="1360" x="0" y="0" />
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_2)">
              <g
                transform="matrix(1.2899999618530273,0,0,1,1.9583740234375,1128.6500244140625)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,199.46499633789062,115.19400024414062)"
                >
                  <path
                    fill="rgb(0,102,243)"
                    fillOpacity="1"
                    d="M198.44000244140625,-477.52099609375 C198.44000244140625,-477.52099609375 0.6470000147819519,-362.5769958496094 0.6470000147819519,-362.5769958496094 C0.6470000147819519,-362.5769958496094 -198.43899536132812,-477.5190124511719 -198.43899536132812,-477.5190124511719 C-198.43899536132812,-477.5190124511719 -0.6470000147819519,-592.4639892578125 -0.6470000147819519,-592.4639892578125 C-0.6470000147819519,-592.4639892578125 198.44000244140625,-477.52099609375 198.44000244140625,-477.52099609375z"
                  />
                </g>
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,298.78399658203125,252.02200317382812)"
                >
                  <path
                    fill="rgb(8,37,82)"
                    fillOpacity="1"
                    d=" M-98.6709976196289,-499.4049987792969 C-98.6709976196289,-499.4049987792969 -99.12200164794922,-15.977999687194824 -99.12200164794922,-15.977999687194824 C-99.12200164794922,-15.977999687194824 -33.29899978637695,-15.977999687194824 -33.29899978637695,-15.977999687194824 C-33.29899978637695,-15.977999687194824 98.34600067138672,-15.979999542236328 98.34600067138672,-15.979999542236328 C98.34600067138672,-15.979999542236328 99.12200164794922,-614.3489990234375 99.12200164794922,-614.3489990234375 C99.12200164794922,-614.3489990234375 -98.6709976196289,-499.4049987792969 -98.6709976196289,-499.4049987792969z"
                  />
                </g>
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,100.18099975585938,252.02200317382812)"
                >
                  <path
                    fill="rgb(0,41,233)"
                    fillOpacity="1"
                    d=" M-99.93099975585938,-15.977999687194824 C-99.93099975585938,-15.977999687194824 99.48100280761719,-15.977999687194824 99.48100280761719,-15.977999687194824 C99.48100280761719,-15.977999687194824 99.93099975585938,-499.4049987792969 99.93099975585938,-499.4049987792969 C99.93099975585938,-499.4049987792969 -99.15499877929688,-614.3480224609375 -99.15499877929688,-614.3480224609375 C-99.15499877929688,-614.3480224609375 -99.93099975585938,-15.977999687194824 -99.93099975585938,-15.977999687194824z"
                  />
                </g>
              </g>
              <g
                transform="matrix(1.2899999618530273,0,0,1,377.6028747558594,788.6500244140625)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,200.4290008544922,115.19400024414062)"
                >
                  <path
                    fill="rgb(0,102,243)"
                    fillOpacity="1"
                    d=" M198.44000244140625,-477.52099609375 C198.44000244140625,-477.52099609375 0.6470000147819519,-362.5769958496094 0.6470000147819519,-362.5769958496094 C0.6470000147819519,-362.5769958496094 -198.44000244140625,-477.5190124511719 -198.44000244140625,-477.5190124511719 C-198.44000244140625,-477.5190124511719 -0.6470000147819519,-592.4639892578125 -0.6470000147819519,-592.4639892578125 C-0.6470000147819519,-592.4639892578125 198.44000244140625,-477.52099609375 198.44000244140625,-477.52099609375z"
                  />
                </g>
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,299.2650146484375,422.0220031738281)"
                >
                  <path
                    fill="rgb(8,37,82)"
                    fillOpacity="1"
                    d=" M-98.18900299072266,-669.4039916992188 C-98.18900299072266,-669.4039916992188 -99.60299682617188,154.01800537109375 -99.60299682617188,154.01800537109375 C-99.60299682617188,154.01800537109375 97.86299896240234,154.02099609375 97.86299896240234,154.02099609375 C97.86299896240234,154.02099609375 99.60299682617188,-784.3480224609375 99.60299682617188,-784.3480224609375 C99.60299682617188,-784.3480224609375 -98.18900299072266,-669.4039916992188 -98.18900299072266,-669.4039916992188z"
                  />
                </g>
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,100.66300201416016,422.02301025390625)"
                >
                  <path
                    fill="rgb(0,41,233)"
                    fillOpacity="1"
                    d=" M-100.41300201416016,154.02099609375 C-100.41300201416016,154.02099609375 98.9990005493164,154.02099609375 98.9990005493164,154.02099609375 C98.9990005493164,154.02099609375 100.41300201416016,-669.405029296875 100.41300201416016,-669.405029296875 C100.41300201416016,-669.405029296875 -98.6729965209961,-784.3480224609375 -98.6729965209961,-784.3480224609375 C-98.6729965209961,-784.3480224609375 -100.41300201416016,154.02099609375 -100.41300201416016,154.02099609375z"
                  />
                </g>
              </g>
              <g
                transform="matrix(1.2899999618530273,0,0,1,752.214111328125,448.6500244140625)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,201.42100524902344,115.19400024414062)"
                >
                  <path
                    fill="rgb(0,102,243)"
                    fillOpacity="1"
                    d=" M198.43899536132812,-432.52099609375 C198.43899536132812,-432.52099609375 0.6470000147819519,-317.5769958496094 0.6470000147819519,-317.5769958496094 C0.6470000147819519,-317.5769958496094 -198.44000244140625,-432.5190124511719 -198.44000244140625,-432.5190124511719 C-198.44000244140625,-432.5190124511719 -0.6470000147819519,-547.4639892578125 -0.6470000147819519,-547.4639892578125 C-0.6470000147819519,-547.4639892578125 198.43899536132812,-432.52099609375 198.43899536132812,-432.52099609375z"
                  />
                </g>
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,299.5780029296875,597.02197265625)"
                >
                  <path
                    fill="rgb(8,37,82)"
                    fillOpacity="1"
                    d=" M-97.51000213623047,-799.405029296875 C-97.51000213623047,-799.405029296875 -100.28299713134766,319.47198486328125 -100.28299713134766,319.47198486328125 C-100.28299713134766,319.47198486328125 97.5510025024414,319.47198486328125 97.5510025024414,319.47198486328125 C97.5510025024414,319.47198486328125 100.28299713134766,-914.3489990234375 100.28299713134766,-914.3489990234375 C100.28299713134766,-914.3489990234375 -97.51000213623047,-799.405029296875 -97.51000213623047,-799.405029296875z"
                  />
                </g>
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,101.15899658203125,597.0230102539062)"
                >
                  <path
                    fill="rgb(0,41,233)"
                    fillOpacity="1"
                    d=" M-100.90899658203125,319.468994140625 C-100.90899658203125,319.468994140625 98.50299835205078,319.4700012207031 98.50299835205078,319.4700012207031 C98.50299835205078,319.4700012207031 100.90899658203125,-799.406005859375 100.90899658203125,-799.406005859375 C100.90899658203125,-799.406005859375 -98.177001953125,-914.3480224609375 -98.177001953125,-914.3480224609375 C-98.177001953125,-914.3480224609375 -100.90899658203125,319.468994140625 -100.90899658203125,319.468994140625z"
                  />
                </g>
              </g>
            </g>
          </svg>

          <div className="absolute  left-[-190px] bottom-[220px] bg-white shadow-lg rounded-xl p-6 w-72 z-10">
            <h3 className="font-bold text-blue-900">Build your savings</h3>
            <p className="text-sm text-gray-600">
              Consistently automate your savings while setting realistic goals.
            </p>
            <div className="absolute bottom-20 left-80 w-10 h-10 bg-white text-blue-900 font-bold rounded-full flex items-center justify-center">
              1
            </div>
          </div>

          <div className="absolute -left-[0px] bottom-[410px] bg-white shadow-lg rounded-xl p-6 w-72 z-10">
            <h3 className="font-bold text-blue-900">Invest deliberately</h3>
            <p className="text-sm text-gray-600">
              Invest in our diverse range of assets that grow in value over
              time.
            </p>
            <div className="absolute bottom-22 left-80 w-10 h-10 bg-white text-blue-900 font-bold rounded-full flex items-center justify-center">
              2
            </div>
          </div>

          <div className="absolute left-[190px] bottom-[590px] bg-white shadow-lg rounded-xl p-4 w-72 z-10">
            <h3 className="font-bold text-blue-900">Stay rich ✨</h3>
            <p className="text-sm text-gray-600">
              Protect your wealth by managing risk, seeking advice and making
              smart financial decisions.
            </p>
            <div className="absolute bottom-18 left-80 w-10 h-10 bg-white text-blue-900 font-bold rounded-full flex items-center justify-center">
              3
            </div>
          </div>
        </div>
      </div>

      <section className="py-4">
        <div className=" max-w-7xl">
          <h1 className="text-3xl md:text-6xl font-semibold text-blue-950 mb-16 pl-4">
            You name it, we&apos;ve <br /> figured it out.
          </h1>

          <div className="relative max-w-3">
            <div
              className="flex gap-6 animate-slide"
              style={{ width: "max-content" }}
            >
              <div className="min-w-[250px] h-[220px] border border-blue-600 rounded-xl p-6 shrink-0">
                <div className="text-6xl text-blue-600 leading-none mb-6">
                  “
                </div>
                <p className="text-5xl word-break leading-snug text-blue-600 font-semibold max-w-3xl">
                  Automate and build my savings.
                </p>
              </div>
              <div className="min-w-[250px] h-[220px] border border-blue-600 rounded-xl p-6  shrink-0">
                <div className="text-6xl text-blue-600 leading-none mb-6">
                  “
                </div>
                <p className="text-5xl text-blue-600 font-semibold">
                  Access Naira & USD investments.
                </p>
              </div>
              <div className="min-w-[250px] h-[220px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                <div className="text-6xl text-blue-600 leading-none mb-6">
                  “
                </div>
                <p className="text-5xl text-blue-600 font-semibold">
                  Get better returns on my money.
                </p>
              </div>
              <div className="min-w-[250px] h-[220px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                <div className="text-6xl text-blue-600 leading-none mb-6">
                  “
                </div>
                <p className="text-5xl text-blue-600 font-semibold">
                  Invest my business cash.
                </p>
              </div>
              <div className="min-w-[250px] h-[220px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                <div className="text-6xl text-blue-600 leading-none mb-6">
                  “
                </div>
                <p className="text-5xl text-blue-600 font-semibold">
                  Invest in my funds easily.
                </p>
              </div>
              <div className="min-w-[250px] h-[220px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
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
      </section>

      <section className=" px-6 bg-white">
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
                  <div className="w-px h-20 bg-blue-400 absolute mt-10 top-8"></div>
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
                  <div className="w-px h-20 bg-blue-400 absolute top-8 mt-10"></div>
                </div>
                <div>
                  <p className="text-blue-800 font-semibold">Set your goals</p>
                  <p className="text-gray-600">
                    Using your debit card or a bank transfer, set up your first
                    plan.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mt-4">
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

              <button className="mt-4 bg-blue-600 w-38 px-4 py-3 text-white  rounded-md font-semibold shadow hover:bg-blue-700 transition">
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
            <p className="text-8xl font-light text-blue-900 mb-4">₦5,000</p>

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
            <p className="text-2xl text-gray-600 mb-2">
              Today, you&apos;d have
            </p>
            <p className="text-8xl text-gray-500 font-light mb-4">₦221,342</p>

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
        <div className="px-6 py-20 text-white">
          <h2 className="text-5xl font-bold text-gray-200 mb-12">
            Keeping your money safe <br /> is our business.
          </h2>
          <p className="text-gray-200 mb-2">
            Trust is our currency. We are committed to the security of your
            money <br /> and the protection of your account.
          </p>
          <a href="#" className="text-blue-200 hover:underline text-xl">
            Learn more
          </a>
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl space-x-6">
              <div>
                <h1 className="text-xl font-bold mb-4">Top-Notch security</h1>
                <p className="text-gray-200 mb-2">
                  We use industry-standard encryption technology to protect user
                  data. We also use two-factor authentication to verify all
                  customer accounts, so you can be sure that your funds are safe
                  and secure.
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold mb-4">
                  Regulatory Compliance
                </h1>
                <p className="text-gray-200 mb-2">
                  Cowrywise is a duly registered fund manager with the
                  Securities and Exchange Commission (SEC) of Nigeria. All our
                  activities are in full compliance with regulatory requirements
                  to the ultimate protection of our clients.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl space-x-6">
              <div>
                <h1 className="text-xl font-bold mb-4">Assets Custody</h1>
                <p className="text-gray-200">
                  Our users financial assets are held with a licensed custodian,
                  Zenith Nominees Limited, for safekeeping to prevent
                  misappropriation, misuse, theft, and/or loss, and in
                  accordance with applicable law.
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold mb-4">Best-In-Class Assets</h1>
                <p className="text-gray-200 mb-2">
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

      <section className="px-6">
        <h5 className="text-4xl mt-20 text-gray-800 mb-2">WHY COWRYWISE ?</h5>
        <span className="text-gray-500 text-6xl mt-4">{texts[index]}</span>
      </section>
    </section>
  );
};

export default Main;
