const getCardClasses = () => `
  absolute
  bottom-4 left-0           
  w-[100%] max-w-[290px]     
  min-h-[70px]
  bg-amber-300
  border border-slate-700/50
  rounded-2xl shadow-2xl
  flex flex-col justify-center
 
  z-50
  text-black
  
  /* მობილურისთვის */
  sm:w-[330px] sm:max-w-[330px]
  md:w-[330px] md:max-w-[330px]
  
  /* ანიმაცია */
  animate-slide-up
`;

export const UserPopup = () => {
  return (
    <div className={getCardClasses()}>
      <h3 className="font-bold text-lg mb-2">მომხმარებელი</h3>
      <p className="text-sm text-gray-700 mb-3">პროფილის მართვა</p>
      <div className="flex gap-2">
        
      </div>
    </div>
  )
}