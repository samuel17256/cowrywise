'use client';

import React from 'react';

const CardFlow = () => {
  return (
    <section className=" py-20 overflow-hidden mt-20">
      <div className=" max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-6xl font-semibold text-blue-950 py-20">
          You name it, we've <br /> figured it out.
        </h1>
      

        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-6 animate-slide"
            style={{
              animation: 'slide 25s linear infinite',
              width: 'max-content',
            }}
          >
            <div className="min-w-[250px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                  <div className="text-6xl text-blue-600 leading-none mb-6">“</div>
              <p className="text-5xl text-blue-600 font-semibold">
                Automate and <br /> build my savings.
              </p>
            </div>
            <div className="min-w-[250px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                  <div className="text-6xl text-blue-600 leading-none mb-6">“</div>
              <p className="text-5xl text-blue-600 font-semibold">
                Access Naira & <br /> USD investments.
              </p>
            </div>
            <div className="min-w-[250px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                  <div className="text-6xl text-blue-600 leading-none mb-6">“</div>
              <p className="text-5xl text-blue-600 font-semibold">
                Get better <br /> returns  on my money.
              </p>
            </div>
            <div className="min-w-[250px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                  <div className="text-6xl text-blue-600 leading-none mb-6">“</div>
              <p className="text-5xl text-blue-600 font-semibold">
                Invest my <br /> business cash.
              </p>
            </div>
            <div className="min-w-[250px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                  <div className="text-6xl text-blue-600 leading-none mb-6">“</div>
              <p className="text-5xl text-blue-600 font-semibold">
                Invest in my <br /> funds easily.
              </p>
            </div>
            <div className="min-w-[250px] border border-blue-600 rounded-xl shadow-sm p-6 shrink-0">
                  <div className="text-6xl text-blue-600 leading-none mb-6">“</div>
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
  );
};

export default CardFlow;
