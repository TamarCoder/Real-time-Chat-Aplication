import {Globe, Hash, Smile, Sparkles} from "lucide-react";
import {useState} from "react";


const RoomsModal = () => {
    const [roomsName, setRoomsName] = useState('');
    const [Description, setDescription] = useState('')

    const emojis = ['💬', '📚', '🎨', '💼',  '🍕', '🌟', '🎯', '🚀', '❤️'];
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#06b6d4'];
    const categories = ['General',  'Study', 'Drvelopers', 'Desing', 'Tech', ];


    return (
        <div className=" h-[700px] bg-gradient-to-br from-slate-600 via-slate-800 to-slate-900 p-4 ">
            <div className='relative w-full max-w-[450px] xs:max-w-[550px] sm:max-w-[650px] md:max-w-[750px] lg:max-w-[950px] xl:max-w-[1150px] 2xl:max-w-[1350px]
                 3xl:max-w-[1550px] 4xl:max-w-[1750px] 5xl:max-w-[2000px] mx-auto flex flex-col gap-3.5 '
                 style={{padding: '15px'}}>

                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse"></div>
                </div>

                {/*header*/}
                <div
                    className="relative h-[70px] flex flex-col  justify-center border-b  rounded-2xl shadow-2xl max-w-4xl w-full   overflow-auto border-slate-700/50 p-6 bg-gradient-to-r from-slate-800 to-slate-700">
                    <div className="flex items-center justify-between " style={{paddingLeft: '15px'}}>
                        <div className="flex items-center gap-3">
                            {/*icon*/}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg transform hover:scale-110 transition-all duration-300"
                                style={{backgroundColor: '#6366f1' + '20', border: `2px solid #6366f1`}}
                            >
                                💬
                            </div>
                            {/*title*/}
                            <div>
                                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                    Create New Room
                                    <Sparkles className="w-5 h-5 text-yellow-400 animate-bounce"/>
                                </h2>
                                <p className="text-slate-400 text-sm">Design your perfect chat space</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-6 max-h-96 overflow-y-auto flex flex-col gap-[20px]"
                     style={{paddingLeft: '6px'}}>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Smile className="w-5 h-5 text-yellow-400"/>
                            Room Appearance
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className='flex  flex-col gap-[20px]'>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Choose Emoji</label>
                            <div className="grid grid-cols-9 gap-2">
                                {emojis.map((emoji) => (
                                    <button
                                        key={emoji}
                                        // TODO: Add emoji selection handler
                                        className="w-10 h-10 rounded-lg text-lg hover:scale-110 transition-all duration-200 bg-slate-700 hover:bg-slate-600"
                                    >
                                        {emoji}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='flex  flex-col gap-[20px]'>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Choose Color</label>
                            <div className="grid grid-cols-8 gap-2">
                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        // TODO: Add color selection handler
                                        className="w-10 h-10 rounded-lg transition-all duration-200 hover:scale-110"
                                        style={{backgroundColor: color}}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/*Rooms*/}

                <div className="space-y-2 ">
                    <label className=" h-[50px] text-sm font-medium text-slate-300 flex items-center gap-2">
                        <Hash className="w-4 h-4"/>
                        Room Name
                    </label>
                    <input
                        type="text"
                        value={roomsName}
                        onChange={(e) => setRoomsName(e.target.value)}
                        placeholder="Enter room name..."
                        className="w-full h-[50px] px-4 py-3 placeholder:pl-[10px]  bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        style={{
                            position: 'relative',
                            zIndex: 10,
                            pointerEvents: 'auto'
                        }}
                    />
                </div>

                {/* Description */}
                <div className="  flex flex-col gap-[15px] ">
                    <label className="block text-sm font-medium text-slate-300">Description</label>
                    <textarea
                        // TODO: Add value and onChange handler
                        placeholder="What's this room about?"

                        value={Description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full h-[100px] px-6 py-4  placeholder:pl-[10px] placeholder:pt-[10px]  bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        style={{
                            position: 'relative',
                            zIndex: 10,
                            pointerEvents: 'auto'

                        }}
                    />
                </div>


                {/* Privacy & Settings */}
                <div className="grid grid-cols-2   gap-4">
                    <div className="space-y-2 flex flex-col gap-[15px]">
                        <label className="  text-sm font-medium text-slate-300 flex items-center gap-2">
                            <Globe className="w-4 h-4"/>
                            Privacy
                        </label>
                        <select
                            // TODO: Add value and onChange handler
                            className="w-full h-[40px] px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"

                            style={{
                                position: 'relative',
                                zIndex: 20,
                                pointerEvents: 'auto'
                            }}>
                            <option value="public">🌐 Public</option>
                            <option value="private">🔒 Private</option>
                            <option value="invite">📩 Invite Only</option>
                        </select>
                    </div>

                    <div className="space-y-2 flex flex-col gap-[15px]">
                        <label className="block text-sm font-medium text-slate-300">Category</label>
                        <select
                            // TODO: Add value and onChange handler
                            className="w-full h-[40px]  px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                            style={{
                                position: 'relative',
                                zIndex: 10,
                                pointerEvents: 'auto'
                            }}>
                            {categories.map((cat) => (
                                <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                            ))}
                        </select>
                    </div>
                </div>

            </div>
        </div>
    )

}


export default RoomsModal


