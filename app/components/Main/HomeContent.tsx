import { Search } from "lucide-react";
import Input from "../Ui/Input";

export const HomeContent = () => {
  return (
    <section
      className="w-full h-[90.8vh]  flex   justify-center  relative "
      style={{
        paddingLeft: "25px",
        paddingRight: "25px",
      }}
    >
      <div
        className="w-[70%]  gap[20px] flex flex-col items-start justify-start h-full"
        style={{
          paddingTop: "25px",
          paddingRight: "25px",
        }}
      >
        <div className="relative w-full   mx-auto">
          <input
            type="text"
            placeholder="Search"
            style={{ paddingLeft: '15px' }}
            className="placeholder:text-white w-full h-[40px] pr-10  bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <aside
        className="w-[30%] pl-3 pr-6 py-6 border-l border-gray-600"
        style={{
          padding: "25px",
        }}
      >
        <h1 className="text-3xl font-bold text-gray-300">Active Now</h1>
        <p className="mt-4 text-gray-600">
          when friends will active , here appearanse
        </p>
      </aside>
    </section>
  );
};
