import { IoIosArrowForward } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaWhatsapp, FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa'


const Footer = () => {
  return (
   <footer>
      <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-6 mt-10 px-4">
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
      
     <div className=" px-4">
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
     </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 px-4">
  {/* Card 1 */}
  <div className="p-2">
    <h3 className="text-lg text-gray-700 font-semibold mb-4">Company</h3>
    <ul className="space-y-2 text-gray-400 py-1">
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
    <h3 className="text-lg text-gray-700 font-semibold mb-4">Product</h3>
   <ul className="space-y-2 text-gray-400 py-1">
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
    <h3 className="text-lg text-gray-700 font-semibold mb-4">Resources</h3>
     <ul className="space-y-2 text-gray-400 py-1">
      <li><a href="#">Customer Stories</a></li>
      <li><a href="#">Media</a></li>
      <li><a href="#">FAQs</a></li>
      <li><a href="#">Security</a></li>
      <li><a href="#">IMS Policy</a></li>
      <li><a href="#">Estimate</a></li>
      <li><a href="#">Plan Education</a></li>
      <li><a href="#">Engineering</a></li>
      <li><a href="#">Glossary</a></li>
      <li><a href="#">Simplified Publication</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Help Center</a></li>
    </ul>
  </div>

  {/* Card 4 */}
  <div className="p-2">
    <h3 className="text-lg text-gray-700 font-semibold mb-4">Contact</h3>
   <ul className="space-y-2 text-gray-400 py-1">
      <li><a href="#">0700COWRYWISE</a></li>
      <li><a href="#">support@cowrywise</a></li>
      <li><a href="#">WhatsApp</a></li>
    </ul>
  </div>
</div>
<hr className="my-8 border-gray-300" />

  <div className="bg-[url('/footer-bg.svg')] bg-no-repeat bg-cover bg-center text-white mt-10">
  <div className="px-4 py-10">
    
    <div className="flex space-x-6 text-2xl text-white mb-8">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
        <FaTelegramPlane />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
    </div>

    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-6 text-gray-600">
      <div className="space-y-2 text-sm">
        <p>🇳🇬 5C Reverend Ogunbiyi Street, Ikeja GRA, Lagos Nigeria.</p>
        <p className="mt-4">🇺🇸 2261 Market Street #4817 San Francisco, CA 94114</p>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg p-2 mt-4 flex items-center space-x-4 shadow-sm">
        <Image src="/sec.png" alt="SEC Logo" width={60} height={60} />
        <div>
          <h4 className="text-sm font-semibold text-gray-800">
            Licensed by the SEC
            <span className="block text-gray-400">Fund Manager</span>
          </h4>
        </div>
      </div>
    </div>

    <div className="mt-10 text-sm mb-10 space-y-4 text-gray-400">
      <p>
        Cowrywise Financial Technology Limited (“Cowrywise”) is a Fund/Portfolio Manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria, with License #1940 and its sister company, CFTL Digital Services Limited, is a Digital Sub-Broker duly licensed by the SEC, with License #3005.
      </p>
      <p>
        Our mutual funds are managed by our fund management partners and made available to our clients through our web and mobile applications. The fund manager for each mutual fund is disclosed on every mutual fund’s profile page. Any historical returns or expected returns are hypothetical in nature and may not reflect actual future performance. 
        <a href="#" className="text-blue-400"> View full list of available mutual funds on Cowrywise.</a>
      </p>
      <p>
        Stash is used for the purpose of receiving money transfers in place of a regular debit card. It also receives the proceeds from the sale of any mutual fund on Cowrywise.
      </p>
      <p>
        The content on this website does not constitute a complete description of Cowrywise’s offerings and services. By using this website, you accept our 
        <a href="#" className="text-blue-400 ml-1">Terms of Use</a> and 
        <a href="#" className="text-blue-400 ml-1">Privacy Policy.</a>
      </p>
      <p>
        Google Play and the Google Play logo are trademarks of Google LLC. Apple, the Apple logo, and iPhone are trademarks of Apple Inc. registered in the U.S
      </p>
      <p>©2025 Cowrywise Financial Technology. All rights reserved</p>
    </div>

  </div>
</div>



    </footer>
  );
};

export default Footer;
