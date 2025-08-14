import { MessageCirclePlus } from 'lucide-react';
import React from 'react';


export const Navigation = () => {
  
  
    return (
        <nav className=" w-full h-[70px] flex items-center justify-between border-b border-gray-600 "
          style={{
          
             paddingRight: '25px',
          }}
        >
            <ul className="flex items-center gap-[15px] ">
                <li className="  transition-all ease-in-out duration-300  text-white cursor-pointer w-[100px] h-[40px] flex items-center justify-center rounded-[10px] hover:bg-gray-400 size-4">Friends</li>
                <li className="  transition-all ease-in-out duration-300  text-white  cursor-pointer w-[100px] h-[40px] flex items-center justify-center rounded-[10px] hover:bg-gray-400 size-4">Online</li>
                <li className=" transition-all ease-in-out duration-300  text-white  cursor-pointer w-[100px] h-[40px] flex items-center justify-center rounded-[10px] hover:bg-gray-400 size-4">All</li>
                <li className=" transition-all ease-in-out duration-300  text-white  cursor-pointer w-[100px] h-[40px] flex items-center justify-center rounded-[10px] bg-blue-500  hover:bg-blue-900 size-4">Add Friends</li>
            </ul>

            <li className='w-[40px] h-[40px] flex items-center justify-center rounded-2xl'>
                <MessageCirclePlus className='text-gray-400 cursor-pointer' />
            </li>

         
            
        </nav>
    )
} 