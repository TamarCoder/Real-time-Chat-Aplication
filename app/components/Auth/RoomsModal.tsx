import {Globe, Hash, Smile, Sparkles, Users} from "lucide-react";
import {useState} from "react";

interface RoomsModalProps {
    onClose: () => void;
}

const getModalClasses = () => `
  relative w-full
  min-h-auto h-auto
  max-w-[400px]
  xs:max-w-[450px]
  sm:max-w-[500px]
  md:max-w-[550px]
  lg:max-w-[600px]
  xl:max-w-[600px]
  2xl:max-w-[600px]
  3xl:max-w-[600px]
  4xl:max-w-[600px]
  5xl:max-w-[600px]
  mx-auto
`;

const getContainerClasses = () => `
  bg-gradient-to-br from-slate-600 via-slate-800 to-slate-900
  backdrop-blur-xl border border-slate-700/50 
  rounded-2xl shadow-2xl w-full h-auto
  flex flex-col justify-center
  mx-4 my-3
  xs:mx-6 xs:my-4
  sm:mx-8 sm:my-5
  md:mx-10 md:my-6
  lg:mx-12 lg:my-7
  xl:mx-16 xl:my-8
  2xl:mx-20 2xl:my-10
  3xl:mx-24 3xl:my-12
  4xl:mx-28 4xl:my-14
  5xl:mx-32 5xl:my-16
`;

const RoomsModal = ({onClose}: RoomsModalProps) => {
    const [roomsName, setRoomsName] = useState('');
    const [Description, setDescription] = useState('')
    const [privacy, setPrivacy] = useState('public');
    const [category, setCategory] = useState('General');
    const [maxMembers, setMaxMembers] = useState(50);
    const [selectedEmoji, setSelectedEmoji] = useState('💬');
    const [selectedColor, setSelectedColor] = useState('#6366f1');

    const closeModal = () => {
        onClose();
    };

    const emojis = ['💬', '📚', '🎨', '💼', '🍕', '🌟', '🎯', '🚀', '❤️'];
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#06b6d4'];
    const categories = ['General', 'Study', 'Developers', 'Design', 'Tech'];

    return (
        <div className={getContainerClasses()}>
            <div className='relative h-[700px] w-full flex flex-col gap-1' style={{padding: '15px'}}>

                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse"></div>
                </div>

                {/*header*/}
                <div className="relative h-[70px] flex flex-col justify-center border-b rounded-2xl shadow-2xl max-w-4xl w-full overflow-auto border-slate-700/50 p-6 bg-gradient-to-r from-slate-800 to-slate-700">
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
                <div className="relative p-4 space-y-4 flex flex-col gap-[15px]" style={{paddingLeft: '6px'}}>
                    {/*Title*/}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Smile className="w-5 h-5 text-yellow-400"/>
                            Room Appearance
                        </h3>
                    </div>

                    {/*emoji and colors in one row*/}
                    <div className="flex flex-col gap-4">
                        <div className='flex gap-8'>
                            <div className='flex flex-col gap-2'>
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

                    {/*Room Name*/}
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
                            value={Description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full h-[100px] px-6 py-4 placeholder:pl-[10px] placeholder:pt-[10px] bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                            style={{
                                position: 'relative',
                                zIndex: 10,
                                pointerEvents: 'auto'
                            }}
                        />
                    </div>

                    {/* Privacy & Settings */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                        <label className="block text-sm font-medium text-slate-300 items-center gap-2">
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
                <div className="relative w-full h-[130px] border-t border-slate-700/50 p-6 bg-slate-800/50">
                    <div className="flex w-full h-[130px] justify-between items-center"
                         style={{paddingLeft: '30px', paddingRight: '30px'}}>
                        <button
                            onClick={closeModal}
                            className="px-6 py-3 text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            className="w-[200px] h-[60px] flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 gap-2"
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

export default RoomsModal