import Developers from "../ChatRooms/Developers";
import General from "../ChatRooms/General";

interface AsideBoxProps {
  onChatRoomClick: () => void;
  activePage?: string;
}

export const AsideBox: React.FC<AsideBoxProps> = ({
  onChatRoomClick,
  activePage,
}) => {
  return (
    <div className="border border-r-gray-600 w-[60px] h-[100vh] flex flex-col items-center  gap-[20px]">
      <General onChatRoomClick={onChatRoomClick} activePage={activePage} />
      <Developers onChatRoomClick={onChatRoomClick} activePage={activePage} />
    </div>
    
  );
};
