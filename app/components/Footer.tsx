import { IoIosArrowForward } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-4">
      <div>
        <h2 className="text-xl font-semi-bold uppercase text-gray-700">
          Why CowryWise
        </h2>
        <span></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-6 mt-10">
        <div className="rounded-xl py-10 px-6 shadow-md border border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2 items-center">
              <h2 className="text-5xl text-gray-700 mb-2 flex items-center">
                4.5 <span className="text-gray-400 text-2xl mt-4">/5</span>
              </h2>
              <span className="text-yellow-600">
                <IoStar size={25} />
              </span>
              <span className="text-yellow-600">
                <IoStar size={25} />
              </span>
              <span className="text-yellow-600">
                <IoStar size={25} />
              </span>
              <span className="text-yellow-600">
                <IoStar size={25} />
              </span>
              <span className="relative w-[25px] h-[25px]">
                <IoStar
                  className="absolute inset-0 text-yellow-600"
                  size={25}
                />
                <IoStar
                  className="absolute inset-0 text-gray-300 [clip-path:inset(0_0_0_50%)]"
                  size={25}
                />
              </span>
            </div>
            <div>
              <Image
                src="/google.png"
                alt="CowryWise"
                width={150}
                height={140}
                className="rounded-lg"
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            Available on the play store
          </h2>
          <p className="mb-4 text-gray-500">
            “I was able to achieve my one year goal of saving a particular
            amount of money every month.” - Lilian, May 2023
          </p>
          <button className="text-blue-600 text-lg mt-6">
            Download Now
            <IoIosArrowForward className="inline-block ml-2" />
          </button>
        </div>

        <div className=" rounded-xl py-10 px-6 shadow-md border border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2 items-center">
              <h2 className="text-5xl text-gray-700 mb-2 flex items-center">
                4.4 <span className="text-gray-400 text-2xl mt-4">/5</span>
              </h2>
              <span className="text-yellow-600">
                <IoStar size={25} />
              </span>
              <span className="text-yellow-600">
                <IoStar size={25} />
              </span>
              <span className="text-yellow-600">
                <IoStar size={25} />
              </span>
              <span className="text-yellow-600">
                <IoStar size={25} />
              </span>
              <span className="relative w-[25px] h-[25px]">
                <IoStar
                  className="absolute inset-0 text-yellow-600"
                  size={25}
                />
                <IoStar
                  className="absolute inset-0 text-gray-300 [clip-path:inset(0_0_0_50%)]"
                  size={25}
                />
              </span>
            </div>
            <div>
              <Image
                src="/iphone.png"
                alt="CowryWise"
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            Available on the App store
          </h2>
          <p className="mb-4 text-gray-500">
            “I love the option of being able to lock my money without being able
            to withdraw it until full term. This is the most important and
            amazing feature 😍 ” - Chidiebere, May 2023
          </p>
          <button className="text-blue-600 text-lg mt-6">
            Download Now
            <IoIosArrowForward className="inline-block ml-2" />
          </button>
        </div>
      </div>
      <div className="bg-blue-600 text-white py-20 rounded-lg shadow-lg mt-14 mb-8 flex items-center justify-between px-20">
        <div>
          <h2 className="text-4xl font-bold">
            Join over 1 million customers <br /> on Cowrywise today
          </h2>
        </div>
        <div className="py-4">
          <div className="relative mt-7 w-[600px]">
            <input
              type="text"
              placeholder="Your email.."
              className="py-5 px-5 pr-40 w-full outline-none rounded-lg focus:outline-none bg-white/40"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-white my-1 text-blue-700 font-semibold px-4 rounded-lg shadow-md">
              Sign Up for free
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
  {/* Card 1 */}
  <div className="p-2">
    <h3 className="text-xl font-semibold mb-4">Company</h3>
    <ul className="space-y-2 text-blue-600">
      <li><a href="#">About us</a></li>
      <li><a href="#">Press</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Ambassadors</a></li>
      <li><a href="#">Complaints Management</a></li>
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Terms</a></li>
    </ul>
  </div>

  {/* Card 2 */}
  <div className="p-2">
    <h3 className="text-xl font-semibold mb-4">Product</h3>
   <ul className="space-y-2 text-blue-600">
      <li><a href="#">Saving Plans</a></li>
      <li><a href="#">Investment Plans</a></li>
      <li><a href="#">Mutual Funds</a></li>
      <li><a href="#">Stocks</a></li>
      <li><a href="#">Duo</a></li>
      <li><a href="#">Embed API</a></li>
      <li><a href="#">Sprout</a></li>
      <li><a href="#">Circles</a></li>
      <li><a href="#">Halal</a></li>
      <li><a href="#">Got a Suggestion ?</a></li>
    </ul>
  </div>

  {/* Card 3 */}
  <div className="p-2">
    <h3 className="text-xl font-semibold mb-4">Resources</h3>
      <ul className="space-y-2 text-blue-600">
      <li><a href="#">Customer Stories</a></li>
      <li><a href="#">Media</a></li>
      <li><a href="#">FAQs</a></li>
      <li><a href="#">Security</a></li>
      <li><a href="#">Integrations</a></li>
      <li><a href="#">Security</a></li>
      <li><a href="#">Compliance</a></li>
      <li><a href="#">Status</a></li>
      <li><a href="#">Changelog</a></li>
      <li><a href="#">System Logs</a></li>
      <li><a href="#">Beta Features</a></li>
      <li><a href="#">Migration Guide</a></li>
    </ul>
  </div>

  {/* Card 4 */}
  <div className="p-2">
    <h3 className="text-xl font-semibold mb-4">Contact</h3>
    <ul className="space-y-2 text-blue-600">
      <li><a href="#">Contact</a></li>
      <li><a href="#">Help Center</a></li>
      <li><a href="#">Feedback</a></li>
    </ul>
  </div>
</div>

    </footer>
  );
};

export default Footer;
