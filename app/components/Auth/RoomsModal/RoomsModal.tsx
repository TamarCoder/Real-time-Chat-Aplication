import {Globe, Hash, Smile, Sparkles, Users} from "lucide-react";
import {getContainerClasses} from "../brackePoints";
import { useRoomForm } from "./useRoomForm"; // Import custom hook

interface RoomsModalProps {
    onClose: () => void;
}

const RoomsMedia = getContainerClasses;

const RoomsModal = ({onClose}: RoomsModalProps) => {

    const { roomsName, description, privacy, category, maxMembers, selectedEmoji, selectedColor,
        setRoomsName, setDescription, setPrivacy, setCategory, setMaxMembers, setSelectedEmoji, setSelectedColor,
        isFormValid, resetForm, getFormData, emojis, colors, categories } = useRoomForm();

    const closeModal = () => {
        resetForm();
        onClose();
    };

    const handleCreateRoom = () => {
        if (!isFormValid()) {
            alert('Please first create room!');
            return;
        }
        const formData = getFormData();
        console.log('Room created:', formData);

        closeModal();
    };

    return (
        <div className={RoomsMedia()}>
            <div className='h-auto w-full flex flex-col gap-1' style={{padding: '15px'}}>

                <div className="absolute inset-0 opacity-10">
                    <div className=" top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse"></div>
                </div>

                {/*header*/}
                <div className="relative  w-full flex flex-col justify-center border-b rounded-2xl shadow-2xl    overflow-auto border-slate-700/50 p-6 bg-gradient-to-r from-slate-800 to-slate-700">
                    <div className="flex items-center justify-between" style={{paddingLeft: '15px'}}>
                        <div className="flex items-center gap-3">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg transform hover:scale-110 transition-all duration-300"
                                style={{backgroundColor: selectedColor + '20', border: `2px solid ${selectedColor}`}}
                            >
                                {selectedEmoji}
                            </div>
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
                <div className="relative p-4 space-y-4 flex flex-col gap-[10px]" style={{paddingLeft: '6px'}}>
                    {/*Title*/}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Smile className="w-5 h-5 text-yellow-400"/>
                            Room Appearance
                        </h3>
                    </div>

                    {/*emoji and colors in one row*/}
                    <div className="flex flex-col gap-4 ">
                        <div className='flex gap-8'>
                            {/*emoji*/}
                            <div className='flex  flex-col gap-2'>
                                <label className="block text-sm font-medium text-slate-300">Choose Emoji</label>
                                <div className="flex flex-wrap gap-2">
                                    {emojis.map((emoji) => (
                                        <button
                                            key={emoji}
                                            onClick={() => setSelectedEmoji(emoji)}
                                            className={`w-10 h-10 rounded-lg text-lg hover:scale-110 transition-all duration-200 ${
                                                selectedEmoji === emoji
                                                    ? 'bg-purple-600 shadow-lg'
                                                    : 'bg-slate-700 hover:bg-slate-600'
                                            }`}
                                        >
                                            {emoji}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/*colors*/}
                            <div className='flex flex-col gap-2'>
                                <label className="block text-sm font-medium text-slate-300">Choose Color</label>
                                <div className="flex flex-wrap gap-2">
                                    {colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-10 h-10 rounded-lg transition-all duration-200 hover:scale-110 ${
                                                selectedColor === color ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-800' : ''
                                            }`}
                                            style={{backgroundColor: color}}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-2">
                        <label className="h-[50px] text-sm font-medium text-slate-300 flex items-center gap-2">
                            <Hash className="w-4 h-4"/>
                            Room Name
                        </label>
                        <input
                            type="text"
                            value={roomsName}
                            onChange={(e) => setRoomsName(e.target.value)}
                            placeholder="Enter room name..."
                            className="w-full h-[50px] px-4 py-3 placeholder:pl-[10px] bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                            style={{
                                position: 'relative',
                                zIndex: 10,
                                pointerEvents: 'auto'
                            }}
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-[15px]">
                        <label className="block text-sm font-medium text-slate-300">Description</label>
                        <textarea
                            placeholder="What's this room about?"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full   px-6 py-4 placeholder:pl-[10px] placeholder:pt-[10px] bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                            style={{
                                position: 'relative',
                                zIndex: 10,
                                pointerEvents: 'auto'
                            }}
                        />
                    </div>

                    {/* Privacy & Settings */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {/*privacy*/}
                        <div className="space-y-2 flex flex-col gap-[15px]">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                <Globe className="w-4 h-4"/>
                                Privacy
                            </label>
                            <select
                                className="w-full h-[40px] px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                onChange={(e) => setPrivacy(e.target.value)}
                                value={privacy}
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
                        {/*category*/}
                        <div className="space-y-2 flex flex-col gap-[15px]">
                            <label className="block text-sm font-medium text-slate-300">Category</label>
                            <select
                                onChange={(e) => setCategory(e.target.value)}
                                value={category}
                                className="w-full h-[40px] px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
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

                    {/* Max Members */}
                    <div className="space-y-2">
                        <label className="flex text-sm font-medium text-slate-300 items-center gap-2">
                            <Users className="w-4 h-4"/>
                            Max Members: {maxMembers}
                        </label>
                        <input
                            type="range"
                            min="5"
                            max="100"
                            onChange={(e) => setMaxMembers(parseInt(e.target.value))}
                            value={maxMembers}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                            style={{
                                position: 'relative',
                                zIndex: 20,
                                pointerEvents: 'auto',
                                background: `linear-gradient(to right, ${selectedColor} 0%, ${selectedColor} ${maxMembers}%, #374151 ${maxMembers}%, #374151 100%)`
                            }}
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="relative w-full h-[70px] border-t border-slate-700/50 p-6 bg-slate-800/50 border-b rounded-2xl shadow-2xl  ">
                    <div className="flex w-full h-[70px] justify-between items-center"
                         style={{paddingLeft: '30px', paddingRight: '30px'}}>
                        <button
                            onClick={closeModal}
                            className="px-6 py-3 text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleCreateRoom}
                            className="h-[60px] flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 gap-2"
                            style={{backgroundColor: selectedColor}}
                        >
                            <Sparkles className="w-5 h-5"/>
                            Create Room
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomsModal;