import ProfileUserDetail from "~/components/profile/ProfileUserDetail";
import ProfileUserPost from "~/components/profile/ProfileUserPost";

const Profile = () => {
  return (
    <div className="px-20">
      <div>
        <ProfileUserDetail />
      </div>
      <div>
        <ProfileUserPost />
      </div>
    </div>
  );
};

export default Profile;
