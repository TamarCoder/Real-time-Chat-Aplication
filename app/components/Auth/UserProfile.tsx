import React, { useState, useEffect } from "react";
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
} from "lucide-react";
import { useAuthStore } from "../../stores/authStore";
import ProfileField from "./ProfileField";

/**
 * მომხმარებლის პროფილის კომპონენტი
 * საშუალებას აძლევს მომხმარებელს ნახოს და შეცვალოს თავისი პროფილის ინფორმაცია
 */
const UserProfile: React.FC = () => {
  // AuthStore-იდან საჭირო ფუნქციები
  const { user, updateProfile, updateAvatar, isLoading } = useAuthStore();
  // რედაქტირების მდგომარეობა
  const [isEditing, setIsEditing] = useState(false);
  // რედაქტირებადი მონაცემების state
  const [editData, setEditData] = useState({
    userName: user?.userName || "",
    email: user?.email || "",
    bio: user?.profile?.bio || "",
    location: "",
    gender: "",
    instagram: "",
    linkedin: "",
  });

  /**
   * User შეცვლისას editData-ს განახლება
   */
  useEffect(() => {
    if (user) {
      setEditData({
        userName: user.userName,
        email: user.email,
        bio: user.profile?.bio || "",
        location: "",
        gender: "",
        instagram: "",
        linkedin: "",
      });
    }
  }, [user]);
  /**რედაქტირების რეჟიმის ჩართვა*/
  const handleEdit = () => setIsEditing(true)

  /**ცვლილებების შენახვა AuthStore-ში*/
  const handleSave = () => {
    if (!user) return;
    updateProfile({
      userName: editData.userName,
      email: editData.email,
      profile: {
        ...user.profile,
        bio: editData.bio,
        theme: user.profile?.theme || "light",
        language: user.profile?.language || "en"
      }
    });
    setIsEditing(false);
  };

  /**რედაქტირების გაუქმება და ძველი მონაცემების დაბრუნება*/
  const handleCancel = () => {
    setIsEditing(false);
    if (user) {
      setEditData({
        userName: user.userName,
        email: user.email,
        bio: user.profile?.bio || "",
        location: "",
        gender: "",
        instagram: "",
        linkedin: "",
      });
    }
  };

  /**ავატარის შემთხვევითი შეცვლა*/
  const handleAvatarChange = () => {
    if (!user) return;
    const styles = ['pixel-art', 'avataaars', 'lorelei', 'personas', 'bottts', 'identicon'];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    updateAvatar(randomStyle);
  };

  /**editData-ს განახლების helper ფუნქცია*/
  const updateEditData = (field: keyof typeof editData, value: string) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  // CSS კლასები
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

  // მომხმარებლის ონლაინ სტატუსი
  const isOnline = user?.status === "online";

  /**
   * სტატუსის ვიზუალური სტილები
   */
  const statusStyles = {
    indicator: isOnline ? "bg-green-500 shadow-green-500/50" : "bg-gray-500",
    badge: isOnline 
      ? "bg-green-500/20 text-green-400 border border-green-500/30"
      : "bg-gray-500/20 text-gray-400 border border-gray-500/30",
    dot: isOnline ? "bg-green-400" : "bg-gray-400"
  };

  return (
    <div className=" h-[800px] bg-gradient-to-br from-slate-600 via-slate-800 to-slate-900 p-4 ">
      <div className={containerClasses}>
        <div className="flex flex-col md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">

          <div className={cardClasses}>
            <div className="p-4 sm:p-6 md:p-8"
             style={{
               paddingTop:'30px'
             }}
            >
              <div className="text-center mb-6">
                <div className="relative inline-block group">
                  <img
                    src={user?.avatar}
                    alt="Profile photo"
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-purple-500/30 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
        
                  <button 
                    onClick={handleAvatarChange}
                    disabled={isLoading}
                    className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 p-1.5 sm:p-2 bg-purple-600 rounded-full text-white hover:bg-purple-500 transition-colors duration-200 shadow-lg disabled:opacity-50"
                    title="Change Avatar"
                  >
                    <Camera size={14} className="sm:w-4 sm:h-4" />
                  </button>

                  <div className={`absolute top-1 right-1 sm:top-2 sm:right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 sm:border-3 border-slate-800 ${statusStyles.indicator} shadow-lg`} />
                </div>

           
                <div className="mt-3">
                  <span className={`inline-flex w-[100px] h-[40px] items-center justify-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${statusStyles.badge}`}>
                    <div className={`w-2 h-2 rounded-full ${statusStyles.dot}`} />
                    {isOnline ? "Online" : "Offline"}
                  </span>
                </div>
              </div>

        
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">
                  About me
                </h3>
                {isEditing ? (
                  <textarea
                    value={editData.bio}
                    onChange={(e) => updateEditData('bio', e.target.value)}
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-xl text-gray-200 resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    rows={4}
                    placeholder="Tell us about you..."
                  />
                ) : (
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {editData.bio || "No bio available"}
                  </p>
                )}
              </div>
            </div>
          </div>

      
          <div className={cardClasses}>
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex justify-end mb-4 sm:mb-6">
                {isEditing ? (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      disabled={isLoading}
                      className="flex h-[45px] w-[150px] justify-center items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-lg text-sm disabled:opacity-50"
                    >
                      <Save size={14} />
                      <span className="hidden sm:inline">Save</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex h-[45px] w-[150px] justify-center items-center gap-2 px-3 sm:px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-500 transition-all duration-200 text-sm"
                    >
                      <X size={14} />
                      <span className="hidden sm:inline">Cancel</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleEdit}
                    className="flex h-[45px] w-[150px] justify-center items-center gap-2 px-3 sm:px-4 py-2 bg-slate-700 text-purple-300 rounded-xl hover:bg-slate-600 transition-all duration-200 border border-slate-600 text-sm"
                  >
                    <Edit size={14} />
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                )}
              </div>
              <div className="space-y-4 sm:space-y-6 flex flex-col gap-2">
                
              
                <ProfileField
                  icon={<User className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />}
                  label="Username"
                  value={editData.userName}
                  onChange={(value) => updateEditData('userName', value)}
                  isEditing={isEditing}
                />
 
                <ProfileField
                  icon={<Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />}
                  label="Email"
                  value={editData.email}
                  onChange={(value) => updateEditData('email', value)}
                  isEditing={isEditing}
                  type="email"
                  iconBgColor="bg-blue-600/20"
                  focusColor="focus:ring-blue-500"
                />

              
                <ProfileField
                  icon={<User className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />}
                  label="Gender"
                  value={editData.gender}
                  onChange={(value) => updateEditData('gender', value)}
                  isEditing={isEditing}
                  type="select"
                  options={["", "Woman", "Man", "Other"]}
                  iconBgColor="bg-pink-600/20"
                  focusColor="focus:ring-pink-500"
                />

              
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-purple-300">
                    Social Media
                  </h3>
                  <div className="flex items-center gap-10">
                    
                  
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full flex-shrink-0">
                        <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.instagram}
                            onChange={(e) => updateEditData('instagram', e.target.value)}
                            className="w-full h-[45px] p-2 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                            placeholder="@your_username"
                          />
                        ) : (
                          <p className="text-gray-200 text-sm sm:text-base truncate">
                            {editData.instagram || "Not set"}
                          </p>
                        )}
                      </div>
                    </div>

                   
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-600/20 rounded-full flex-shrink-0">
                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.linkedin}
                            onChange={(e) => updateEditData('linkedin', e.target.value)}
                            className="w-full h-[45px] p-2 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            placeholder="your-linkedin-profile"
                          />
                        ) : (
                          <p className="text-gray-200 text-sm sm:text-base truncate">
                            {editData.linkedin || "Not set"}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

             
                <div className="flex items-center gap-3 sm:gap-4 h-[60px]">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-green-600/20 rounded-full flex-shrink-0">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs sm:text-sm font-medium text-green-300 mb-1">
                      Registration Date
                    </label>
                    <p className="text-gray-200 text-sm sm:text-base">Recently joined</p>
                  </div>
                </div>

                <ProfileField
                  icon={<MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />}
                  label="Location"
                  value={editData.location}
                  onChange={(value) => updateEditData('location', value)}
                  isEditing={isEditing}
                  placeholder="Enter your location"
                  iconBgColor="bg-orange-600/20"
                  focusColor="focus:ring-orange-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;