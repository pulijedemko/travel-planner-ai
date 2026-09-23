import { useState } from "react";
import PersonalInfoForm from "../components/PersonalInfoForm";
import Preferences from "../components/Preferences";
import ProfileHeader from "../components/ProfileHeader";
import ProfileSecurity from "../components/ProfileSecurity";
import ProfileSidebar from "../components/ProfileSidebar";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="flex rounded-3xl bg-white shadow-sm">
      <ProfileSidebar activeTab={activeTab} onChange={setActiveTab} />

      <div className="flex-1 p-10">
        <ProfileHeader />

        {activeTab === "personal" && <PersonalInfoForm />}

        {activeTab === "preferences" && <Preferences />}

        {activeTab === "security" && <ProfileSecurity />}
      </div>
    </div>
  );
};

export default ProfilePage;
