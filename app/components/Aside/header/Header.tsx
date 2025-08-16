import { MoreVertical, Plus } from "lucide-react";

export const AsideHeadr = () => {
  return (
    <div
      className="relative z-10 flex flex-col h-full"
      style={{ paddingLeft: "20px", paddingRight: "20px" }}
    >
      <div
        className="p-4 border-b border-gray-700/50"
        style={{ height: "70px" }}
      >
        <div className="flex items-center justify-between h-full">
          <h1 className="bg-gradient-to-r from-purple-500 via-orange-500 to-blue-500 bg-clip-text text-transparent font-bold text-lg">
            ChatApp
          </h1>

          <div className="flex items-center gap-[10px] space-x-2">
            <button className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors">
              <Plus size={16} className="text-gray-400" />
            </button>
            <button className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors">
              <MoreVertical size={16} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
