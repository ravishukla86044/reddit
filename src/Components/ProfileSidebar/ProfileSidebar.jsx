import { Footer } from "../Sidebar/Footer/Footer";
import { ProfileDetails } from "./ProfileDetails/ProfileDetails";
import { TrophyCase } from "./TrophyCase/TrophyCase";

export const ProfileSidebar = () => {
  return (
    <>
      <ProfileDetails />
      <TrophyCase />
      <Footer />
    </>
  );
};
