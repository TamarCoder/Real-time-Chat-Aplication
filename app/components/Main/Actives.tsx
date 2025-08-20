import { Hash, Pin, Settings, UserPlus } from "lucide-react";

export const Actives = () => {
  return (
      <div
          className="w-[240px] xs:w-[260px] sm:w-[280px] md:w-[280px] lg:w-[300px] xl:w-[320px] 2xl:w-[340px] 3xl:w-[360px] 4xl:w-[380px] 5xl:w-[400px] hidden lg:flex flex-col gap-2 xs:gap-2.5 sm:gap-3 md:gap-3 lg:gap-3.5 xl:gap-4 2xl:gap-5 3xl:gap-6 4xl:gap-7 5xl:gap-8 bg-gray-900/50 backdrop-blur-sm"
          style={{ padding: "15px" }}
      >
        {/* Members Section */}
        <div className="mb-2 xs:mb-2.5 sm:mb-3 md:mb-3.5 lg:mb-4 xl:mb-5 2xl:mb-6 3xl:mb-7 4xl:mb-8 5xl:mb-9 flex flex-col gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-4 2xl:gap-5 3xl:gap-6 4xl:gap-7 5xl:gap-9">
          <h3 className="text-gray-400 text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl font-semibold uppercase tracking-wide mb-2 xs:mb-2.5 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3.5 2xl:mb-4 3xl:mb-5 4xl:mb-6 5xl:mb-7">
            Members
          </h3>

          <div className="space-y-1 xs:space-y-1.5 sm:space-y-2 md:space-y-2 lg:space-y-2 xl:space-y-2.5 2xl:space-y-3 3xl:space-y-3.5 4xl:space-y-4 5xl:space-y-4.5">
            <div className="flex items-center space-x-2 xs:space-x-2.5 sm:space-x-3 md:space-x-3 lg:space-x-3 xl:space-x-3.5 2xl:space-x-4 3xl:space-x-5 4xl:space-x-6 5xl:space-x-7 p-1.5 xs:p-2 sm:p-2 md:p-2 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-3.5 4xl:p-4 5xl:p-4.5 rounded-lg hover:bg-gray-700/30 transition-colors cursor-pointer group">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-4 2xl:gap-5 3xl:gap-6 4xl:gap-7 5xl:gap-8 space-x-1">
                  <div
                      className="h-[20px] xs:h-[22px] sm:h-[25px] md:h-[27px] lg:h-[30px] xl:h-[32px] 2xl:h-[35px] 3xl:h-[37px] 4xl:h-[40px] 5xl:h-[42px] bg-sky-400 flex items-center text-xs xs:text-sm sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl text-white rounded"
                      style={{ padding: "5px" }}
                  >
                    Member One
                  </div>
                  <div
                      className="h-[20px] xs:h-[22px] sm:h-[25px] md:h-[27px] lg:h-[30px] xl:h-[32px] 2xl:h-[35px] 3xl:h-[37px] 4xl:h-[40px] 5xl:h-[42px]  bg-sky-400 flex items-center text-xs xs:text-sm sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl text-white rounded"
                      style={{ padding: "5px" }}
                  >
                    Member Two
                  </div>
                  <div
                      className="h-[20px] xs:h-[22px] sm:h-[25px] md:h-[27px] lg:h-[30px] xl:h-[32px] 2xl:h-[35px] 3xl:h-[37px] 4xl:h-[40px] 5xl:h-[42px] bg-sky-400 flex items-center text-xs xs:text-sm sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl text-white rounded"
                      style={{ padding: "5px" }}
                  >
                    Member Three
                  </div>
                  <div
                      className="h-[20px] xs:h-[22px] sm:h-[25px] md:h-[27px] lg:h-[30px] xl:h-[32px] 2xl:h-[35px] 3xl:h-[37px] 4xl:h-[40px] 5xl:h-[42px] bg-sky-400 flex items-center text-xs xs:text-sm sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl text-white rounded"
                      style={{ padding: "5px" }}
                  >
                    Member Four
                  </div>
                  <div
                      className="h-[20px] xs:h-[22px] sm:h-[25px] md:h-[27px] lg:h-[30px] xl:h-[32px] 2xl:h-[35px] 3xl:h-[37px] 4xl:h-[40px] 5xl:h-[42px] bg-sky-400 flex items-center text-xs xs:text-sm sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl text-white rounded"
                      style={{ padding: "5px" }}
                  >
                    Member Five
                  </div>
                  <div
                      className="h-[20px] xs:h-[22px] sm:h-[25px] md:h-[27px] lg:h-[30px] xl:h-[32px] 2xl:h-[35px] 3xl:h-[37px] 4xl:h-[40px] 5xl:h-[42px]  bg-sky-400 flex items-center text-xs xs:text-sm sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl text-white rounded"
                      style={{ padding: "5px" }}
                  >
                    Member Six
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="border-t border-gray-700/50 pt-2 xs:pt-2.5 sm:pt-3 md:pt-3.5 lg:pt-4 xl:pt-5 2xl:pt-6 3xl:pt-7 4xl:pt-8 5xl:pt-9 flex flex-col gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-4 2xl:gap-5 3xl:gap-6 4xl:gap-7 5xl:gap-8">
          <h3 className="text-gray-400 text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl font-semibold uppercase tracking-wide mb-2 xs:mb-2.5 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3.5 2xl:mb-4 3xl:mb-5 4xl:mb-6 5xl:mb-7">
            Quick Actions
          </h3>

          <div
              className="space-y-1 xs:space-y-1.5 sm:space-y-2 md:space-y-2 lg:space-y-2 xl:space-y-2.5 2xl:space-y-3 3xl:space-y-3.5 4xl:space-y-4 5xl:space-y-4.5 flex flex-col gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-4 2xl:gap-7 3xl:gap-8 4xl:gap-9 5xl:gap-10"
              style={{ paddingLeft: "10px" }}
          >
            <button
                className="w-full h-[20px] xs:h-[22px] sm:h-[25px] md:h-[27px] lg:h-[30px] xl:h-[32px] 2xl:h-[35px] 3xl:h-[37px] 4xl:h-[40px] 5xl:h-[42px]  flex gap-1 xs:gap-1.5 sm:gap-1.5 md:gap-1.5 lg:gap-1.5 xl:gap-2 2xl:gap-2.5 3xl:gap-3 4xl:gap-3.5 5xl:gap-4 items-center space-x-2 xs:space-x-2.5 sm:space-x-3 md:space-x-3 lg:space-x-3 xl:space-x-3.5 2xl:space-x-4 3xl:space-x-5 4xl:space-x-6 5xl:space-x-7 p-1.5 xs:p-2 sm:p-2 md:p-2 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-3.5 4xl:p-4 5xl:p-4.5 rounded-lg hover:bg-gray-700/30 transition-colors text-left"
                style={{ paddingLeft: "5px" }}
            >
              <UserPlus size={14} className="text-blue-400 xs:w-[15px] xs:h-[15px] sm:w-4 sm:h-4 md:w-[16px] md:h-[16px] lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9" />
              <span className="text-gray-300 text-xs xs:text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl">Invite People</span>
            </button>

            <button
                className="w-fullh-[20px] xs:h-[22px] sm:h-[25px] md:h-[27px] lg:h-[30px] xl:h-[32px] 2xl:h-[35px] 3xl:h-[37px] 4xl:h-[40px] 5xl:h-[42px] flex gap-1 xs:gap-1.5 sm:gap-1.5 md:gap-1.5 lg:gap-1.5 xl:gap-2 2xl:gap-2.5 3xl:gap-3 4xl:gap-3.5 5xl:gap-4 items-center space-x-2 xs:space-x-2.5 sm:space-x-3 md:space-x-3 lg:space-x-3 xl:space-x-3.5 2xl:space-x-4 3xl:space-x-5 4xl:space-x-6 5xl:space-x-7 p-1.5 xs:p-2 sm:p-2 md:p-2 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-3.5 4xl:p-4 5xl:p-4.5 rounded-lg hover:bg-gray-700/30 transition-colors text-left"
                style={{ paddingLeft: "5px" }}
            >
              <Settings size={14} className="text-gray-400 xs:w-[15px] xs:h-[15px] sm:w-4 sm:h-4 md:w-[16px] md:h-[16px] lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9" />
              <span className="text-gray-300 text-xs xs:text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl">Channel Settings</span>
            </button>

            <button
                className="w-full h-[20px] xs:h-[22px] sm:h-[25px] md:h-[27px] lg:h-[30px] xl:h-[32px] 2xl:h-[35px] 3xl:h-[37px] 4xl:h-[40px] 5xl:h-[42px] flex gap-1 xs:gap-1.5 sm:gap-1.5 md:gap-1.5 lg:gap-1.5 xl:gap-2 2xl:gap-2.5 3xl:gap-3 4xl:gap-3.5 5xl:gap-4 items-center space-x-2 xs:space-x-2.5 sm:space-x-3 md:space-x-3 lg:space-x-3 xl:space-x-3.5 2xl:space-x-4 3xl:space-x-5 4xl:space-x-6 5xl:space-x-7 p-1.5 xs:p-2 sm:p-2 md:p-2 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-3.5 4xl:p-4 5xl:p-4.5 rounded-lg hover:bg-gray-700/30 transition-colors text-left"
                style={{ paddingLeft: "5px" }}
            >
              <Pin size={14} className="text-yellow-400 xs:w-[15px] xs:h-[15px] sm:w-4 sm:h-4 md:w-[16px] md:h-[16px] lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9" />
              <span className="text-gray-300 text-xs xs:text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl">Pinned Messages</span>
            </button>
          </div>
        </div>

        {/* Channel Info Section */}
        <div className="border-t border-gray-700/50 pt-2 xs:pt-2.5 sm:pt-3 md:pt-3.5 lg:pt-4 xl:pt-5 2xl:pt-6 3xl:pt-7 4xl:pt-8 5xl:pt-9 mt-2 xs:mt-2.5 sm:mt-3 md:mt-3.5 lg:mt-4 xl:mt-5 2xl:mt-6 3xl:mt-7 4xl:mt-8 5xl:mt-9">
          <h3 className="text-gray-400 text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl font-semibold uppercase tracking-wide mb-2 xs:mb-2.5 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3.5 2xl:mb-4 3xl:mb-5 4xl:mb-6 5xl:mb-7">
            Channel Info
          </h3>

          <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-3 lg:space-y-3 xl:space-y-3.5 2xl:space-y-4 3xl:space-y-5 4xl:space-y-6 5xl:space-y-7 flex flex-col gap-2 xs:gap-2.5 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3.5 2xl:gap-4 3xl:gap-5 4xl:gap-6 5xl:gap-7" style={{padding:'10px'}}>

            <div className="p-2 xs:p-2.5 sm:p-3 md:p-3 lg:p-3 xl:p-3.5 2xl:p-4 3xl:p-5 4xl:p-6 5xl:p-7 bg-gray-800/50 rounded-lg flex flex-col gap-1.5 xs:gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2.5 2xl:gap-3 3xl:gap-3.5 4xl:gap-4 5xl:gap-4.5">
              <div className="flex items-center space-x-1.5 xs:space-x-2 sm:space-x-2 md:space-x-2 lg:space-x-2 xl:space-x-2.5 2xl:space-x-3 3xl:space-x-3.5 4xl:space-x-4 5xl:space-x-4.5 mb-1.5 xs:mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-3.5 4xl:mb-4 5xl:mb-4.5">
                <Hash size={12} className="text-purple-400 xs:w-[13px] xs:h-[13px] sm:w-[14px] sm:h-[14px] md:w-[14px] md:h-[14px] lg:w-[14px] lg:h-[14px] xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7 5xl:w-8 5xl:h-8" />
                <span className="text-white text-xs xs:text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl font-medium">general</span>
              </div>
              <p className="text-gray-400 text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl">
                Main discussion channel for general topics and community chat.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl">
              <span className="text-gray-500">Created</span>
              <span className="text-gray-400">Jan 15, 2024</span>
            </div>

            <div className="flex items-center justify-between text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl">
              <span className="text-gray-500">Messages</span>
              <span className="text-gray-400">1,247</span>
            </div>
          </div>
        </div>
      </div>
  );
};