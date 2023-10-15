import { Route, Routes, useLocation } from "react-router-dom";
import EditProfileDetail from "~/components/profile/EditProfile/EditProfileDetail";
import Sidebar from "~/components/sidebar/Sidebar";
import { HomePage, ProfilePage } from "~/pages";
import Auth from "~/pages/auth/Auth";
import StoryPage from "~/pages/storyPage/StoryPage";

const Router = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/singup" ? (
        <div className="flex">
          <div className="w-[20%] border border-l-slate-500 ">
            <Sidebar />
          </div>
          <div className="w-full">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/:username" element={<ProfilePage />} />
              <Route path="/story/:userId" element={<StoryPage />} />
              <Route path="/comment/:postId" element={<HomePage />} />
              <Route path="/account/edit" element={<EditProfileDetail />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/singup" element={<Auth />} />
            <Route path="/login" element={<Auth />} />
          </Routes>
        </div>
      )}
    </div>
  );
};
export default Router;
