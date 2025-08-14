import Button from "../Ui/Button";

export const DirectMessagesPanel = () => {
  return (
    <div
      className="flex flex-col items-center gap-[14px]"
      style={{ padding: "10px" }}
    >
      <Button
        type="button"
     
        className="w-[230px] h-[40px] cursor-pointer"
        variant="tertiary"
      >
        Find or start a conversation
      </Button>

        <div className="w-[100%] h-[1px] border border-b-gray-600 "></div>
        <div className="w-[100%] h-auto flex items-center text-center">
            <h1 className="text-gray-300">Direct Message</h1>
        </div>

    </div>
  );
};
