import { Hash, Pin, Settings, UserPlus } from "lucide-react";

export const Actives = () => {
  return (
    <div
      className="w-75 flex flex-col gap-4 bg-gray-900/50 backdrop-blur-sm border-l border-gray-700/50 p-4"
      style={{ padding: "15px" }}
    >
      <div className="mb-4  flex flex-col gap-4 ">
        <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-3">
          Members
        </h3>

        <div className="space-y-2">
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors cursor-pointer group">
            <div className="flex-1  min-w-0">
              <div className="flex flex-col gap-4  space-x-1">
                <div
                  className="h-[40px] bg-sky-400 flex items-center "
                  style={{ padding: "5px" }}
                >
                  Member One
                </div>
                <div
                  className="h-[40px] bg-sky-400 flex items-center "
                  style={{ padding: "5px" }}
                >
                  Member Two
                </div>
                <div
                  className="h-[40px] bg-sky-400 flex items-center "
                  style={{ padding: "5px" }}
                >
                  Member Three
                </div>
                <div
                  className="h-[40px] bg-sky-400 flex items-center "
                  style={{ padding: "5px" }}
                >
                  Member Four
                </div>
                <div
                  className="h-[40px] bg-sky-400 flex items-center "
                  style={{ padding: "5px" }}
                >
                  Member Five
                </div>
                <div
                  className="h-[40px] bg-sky-400 flex items-center "
                  style={{ padding: "5px" }}
                >
                  Member Six
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700/50 pt-4 flex flex-col gap-4">
        <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-3">
          Quick Actions
        </h3>

        <div
          className="space-y-2 flex flex-col gap-4"
          style={{ paddingLeft: "10px" }}
        >
          <button
            className="w-full h-[40px] flex gap-1.5 items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors text-left"
            style={{ paddingLeft: "5px" }}
          >
            <UserPlus size={16} className="text-blue-400" />
            <span className="text-gray-300 text-sm">Invite People</span>
          </button>

          <button
            className="w-full h-[40px] flex  gap-1.5  items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors text-left"
            style={{ paddingLeft: "5px" }}
          >
            <Settings size={16} className="text-gray-400" />
            <span className="text-gray-300 text-sm">Channel Settings</span>
          </button>

          <button
            className="w-full  h-[40px] flex  gap-1.5  items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors text-left"
            style={{ paddingLeft: "5px" }}
          >
            <Pin size={16} className="text-yellow-400" />
            <span className="text-gray-300 text-sm">Pinned Messages</span>
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700/50 pt-4 mt-4">
        <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-3">
          Channel Info
        </h3>

        <div className="space-y-3 flex flex-col gap-3" style={{padding:'10px'}}>

          <div className="p-3 bg-gray-800/50 rounded-lg flex flex-col gap-2">
            <div className="flex items-center space-x-2 mb-2">
              <Hash size={14} className="text-purple-400" />
              <span className="text-white text-sm font-medium">general</span>
            </div>
            <p className="text-gray-400 text-xs">
              Main discussion channel for general topics and community chat.
            </p>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Created</span>
            <span className="text-gray-400">Jan 15, 2024</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Messages</span>
            <span className="text-gray-400">1,247</span>
          </div>
        </div>
      </div>
    </div>
  );
};
