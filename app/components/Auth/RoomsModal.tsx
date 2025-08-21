import {useAuthStore} from "../../stores/authStore";


const  RoomsModal = () => {

    const containerClasses = `
    relative w-full max-w-[450px] xs:max-w-[550px] sm:max-w-[650px] 
    md:max-w-[750px] lg:max-w-[950px] xl:max-w-[1150px] 2xl:max-w-[1350px] 
    3xl:max-w-[1550px] 4xl:max-w-[1750px] 5xl:max-w-[2000px] mx-auto
  `;
    const cardClasses = `
    bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl 
    shadow-2xl w-full flex flex-col justify-center mx-4 my-3 xs:mx-6 xs:my-4 
    sm:mx-8 sm:my-5 md:mx-10 md:my-6 lg:mx-12 lg:my-7 xl:mx-16 xl:my-8 
    2xl:mx-20 2xl:my-10 3xl:mx-24 3xl:my-12 4xl:mx-28 4xl:my-14 5xl:mx-32 5xl:my-16
  `;

    const emojis = ['💬', '🎮', '🎵', '📚', '🎨', '💼', '🔬', '🍕', '🌟', '🎯', '🚀', '❤️'];
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#06b6d4'];
    const categories = ['General', 'Gaming', 'Music', 'Study', 'Work', 'Art', 'Tech', 'Sports'];

    return(
        <div className=" h-[700px] bg-gradient-to-br from-slate-600 via-slate-800 to-slate-900 p-4 ">
            <div className={containerClasses} style={{padding:'15px'}}>
                <div className={cardClasses}>
                   <div className="flex w-full h-[60px]" style={{
                       paddingTop:'10px',
                       paddingLeft:'10px'
                   }}>
                       <h1  className='inline-block text-[20px] text-white'>Create New Room</h1>
                   </div>






                </div>
            </div>
        </div>
    )

}


export  default  RoomsModal