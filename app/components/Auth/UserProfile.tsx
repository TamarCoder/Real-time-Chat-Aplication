import React, { useState } from "react";
import {
  Camera,
  Edit,
  Mail,
  User,
  MapPin,
  Calendar,
  Instagram,
  Linkedin,
  Save,
  X,
  MessageSquare,
} from "lucide-react";

//  ინტერფეისები
interface UserData {
  username: string;
  email: string;
  bio: string;
  avatar: string;
  isOnline: boolean;
  joinDate: string;
  location: string;
  gender: string;
  instagram: string;
  linkedin: string;
}

interface UserProfileProps {
  userData?: UserData;
  onEdit?: () => void;
}

// მაგალითი იუზერის მონაცემები
const initialUserData: UserData = {
  username: "ნინო_გელაძე",
  email: "nino.geladze@example.com",
  bio: "ვებ დეველოპერი და დიზაინერი 🚀 მიყვარს ინოვაციური პროდუქტების შექმნა და ტექნოლოგიების ათვისება.",
  avatar:
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
  isOnline: true,
  joinDate: "იანვარი 2023",
  location: "თბილისი, საქართველო",
  gender: "ქალი",
  instagram: "@nino_geladze",
  linkedin: "nino-geladze",
};

// პროფილის კომპონენტი
const UserProfile: React.FC<UserProfileProps> = ({
  userData = initialUserData,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<UserData>(userData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(userData);
  };

  const handleSave = () => {
    // აქ შეიძლება API-ს გამოძახება მონაცემების შესანახად
    setIsEditing(false);
    console.log("save info:", editData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(userData);
  };

  // რესპონსიული კლასები
  const getContainerClasses =  () => `
    relative w-full
    max-w-[450px]
    xs:max-w-[550px]
    sm:max-w-[650px]
    md:max-w-[750px]
    lg:max-w-[950px]
    xl:max-w-[1150px]
    2xl:max-w-[1350px]
    3xl:max-w-[1550px]
    4xl:max-w-[1750px]
    5xl:max-w-[2000px]
    mx-auto
  `;

  const getCardClasses = () => `
    bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 
    rounded-2xl shadow-2xl w-full 
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900  p-4">
      <div className={getContainerClasses()}>
        {/* პროფილის მთავარი კონტეინერი */}
        <div className="flex flex-col md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* მარცხენა მხარე - ავატარი და ბიო */}
          <div className={getCardClasses()}>

            <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-3.5">
              {/* ავატარი */}
              <div className="text-center mb-6 ">
                <div className="relative inline-block group">
                  <img
                    src={editData.avatar}
                    alt="Profile photo"
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-purple-500/30 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* ავატარის შეცვლის ღილაკი */}
                  <button className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 p-1.5 sm:p-2 bg-purple-600 rounded-full text-white hover:bg-purple-500 transition-colors duration-200 shadow-lg">
                    <Camera size={14} className="sm:w-4 sm:h-4" />
                  </button>

                  {/* სტატუსის ინდიკატორი */}
                  <div
                    className={`absolute top-1 right-1 sm:top-2 sm:right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 sm:border-3 border-slate-800 ${
                      userData.isOnline
                        ? "bg-green-500 shadow-green-500/50"
                        : "bg-gray-500 "
                    } shadow-lg`}
                  ></div>
                </div>

                {/* სტატუსის ტექსტი */}
                <div className="mt-3">
                  <span
                    className={`inline-flex w-[100px] h-[40px] items-center justify-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      userData.isOnline
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        userData.isOnline ? "bg-green-400" : "bg-gray-400"
                      }`}
                    ></div>
                    {userData.isOnline ? "Online" : "Ofline"}
                  </span>
                </div>
                
              </div>

              {/* ბიო */}
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">
                  About me
                </h3>
                {isEditing ? (
                  <textarea
                    value={editData.bio}
                    onChange={(e) =>
                      setEditData({ ...editData, bio: e.target.value })
                    }
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-xl text-gray-200 resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    rows={4}
                    placeholder="tell us  about you..."
                  />
                ) : (
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {editData.bio}
                  </p>
                )}
              </div>
            </div>

          </div>

          {/* მარჯვენა მხარე - დეტალები */}
          <div className={getCardClasses()}>
            <div className="p-4 sm:p-6 md:p-8">
              {/* რედაქტირების ღილაკი */}
              <div className="flex justify-end mb-4 sm:mb-6">
                {isEditing ? (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex h-[45px] w-[150px] justify-center items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-lg text-sm"
                    >
                      <Save size={14} className="sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Save</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex h-[45px] w-[150px] justify-center items-center gap-2 px-3 sm:px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-500 transition-all duration-200 text-sm"
                    >
                      <X size={14} className="sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Cansel</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleEdit}
                    className="flex h-[45px] w-[150px] justify-center items-center gap-2 px-3 sm:px-4 py-2 bg-slate-700 text-purple-300 rounded-xl hover:bg-slate-600 transition-all duration-200 border border-slate-600 text-sm"
                  >
                    <Edit size={14} className="sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                )}
              </div>

              {/* იუზერის დეტალები */}
              <div className="space-y-4 sm:space-y-6 flex flex-col gap-2">
                {/* იუზერნეიმი */}
                <div className="flex items-center gap-3 sm:gap-4 h-[60px]  ">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 rounded-full flex-shrink-0">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0 ">
                    <label className="block text-xs sm:text-sm font-medium text-purple-300 mb-1">
                      UserName
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.username}
                        onChange={(e) =>
                          setEditData({ ...editData, username: e.target.value })
                        }
                        className="w-full h-[45px] p-2 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      />
                    ) : (
                      <p className="text-gray-200 font-medium text-sm sm:text-base truncate">
                        {editData.username}
                      </p>
                    )}
                  </div>
                </div>

                {/* ელფოსტა */}
                <div className="flex items-center gap-3 sm:gap-4 h-[60px]  ">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-600/20 rounded-full flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="block text-xs sm:text-sm font-medium text-blue-300 mb-1">
                      Email
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editData.email}
                        onChange={(e) =>
                          setEditData({ ...editData, email: e.target.value })
                        }
                        className="w-full  h-[45px] p-2 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    ) : (
                      <p className="text-gray-200 text-sm sm:text-base truncate">
                        {editData.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* გენდერი */}
                <div className="flex items-center gap-3 sm:gap-4 h-[60px]   ">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-pink-600/20 rounded-full flex-shrink-0">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs sm:text-sm font-medium text-pink-300 mb-1">
                      Gender
                    </label>
                    {isEditing ? (
                      <select
                        value={editData.gender}
                        onChange={(e) =>
                          setEditData({ ...editData, gender: e.target.value })
                        }
                        className="w-full  h-[45px] p-2 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      >
                        <option value="Woman">Woman</option>
                        <option value="Man">Man</option>
                        <option value="Other">Other</option>
                      </select>
                    ) : (
                      <p className="text-gray-200 text-sm sm:text-base">
                        {editData.gender}
                      </p>
                    )}
                  </div>
                </div>

                {/* სოციალური ქსელები */}
                <div className="space-y-3 h-[60px]">
                  <h3 className="text-base sm:text-lg font-semibold text-purple-300">
                    Social Media
                  </h3>

                  <div className="flex items-center gap-10">
                    {/* Instagram */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full flex-shrink-0">
                        <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.instagram}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                instagram: e.target.value,
                              })
                            }
                            className="w-full  h-[45px] p-2 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                            placeholder="@your_username"
                          />
                        ) : (
                          <p className="text-gray-200 text-sm sm:text-base truncate">
                            {editData.instagram}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-600/20 rounded-full flex-shrink-0">
                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.linkedin}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                linkedin: e.target.value,
                              })
                            }
                            className="w-full  h-[45px] p-2 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            placeholder="your-linkedin-profile"
                          />
                        ) : (
                          <p className="text-gray-200 text-sm sm:text-base truncate">
                            {editData.linkedin}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* რეგისტრაციის თარიღი */}
                <div className="flex items-center gap-3 sm:gap-4 h-[60px]">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-green-600/20 rounded-full flex-shrink-0">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs sm:text-sm font-medium text-green-300 mb-1">
                      Registration Date
                    </label>
                    <p className="text-gray-200 text-sm sm:text-base">
                      {editData.joinDate}
                    </p>
                  </div>
                </div>
                {/* ლოკაცია */}
                <div className="flex items-center gap-3 sm:gap-4 h-[60px]">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-orange-600/20 rounded-full flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="block text-xs sm:text-sm font-medium text-orange-300 mb-1">
                      Location
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.location}
                        onChange={(e) =>
                          setEditData({ ...editData, location: e.target.value })
                        }
                        className="w-full   h-[45px] p-2 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      />
                    ) : (
                      <p className="text-gray-200 text-sm sm:text-base truncate">
                        {editData.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// მთავარი კომპონენტი
export default function App() {
  return <UserProfile userData={initialUserData} />;
}
