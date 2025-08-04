"use client";
import CardFlow from "../components/CardFlow";
import SetUp from "./SetUp";

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
  return (
    <section className="relative bg-white py-24 px-8 md:px-4">
      <div className=" mx-auto grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h1 className="text-xl md:text-7xl font-bold text-blue-950">
            Get a <span className="italic font-light">little</span> richer each day
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

      <CardFlow />

      <SetUp />


    </section>
  );
};

export default Main;
