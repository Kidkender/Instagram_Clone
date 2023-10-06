import { Route, Routes } from "react-router-dom";
import Sidebar from "~/components/sidebar/Sidebar";
import { HomePage, ProfilePage } from "~/pages";
import StoryPage from "~/pages/storyPage/StoryPage";

const Router = () => {
  return (
    <div className="flex">
      <div className="w-[20%] border border-l-slate-500 ">
        <Sidebar />
      </div>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/username" element={<ProfilePage />} />
          <Route path="/story" element={<StoryPage />} />
        </Routes>
      </div>
    </div>
  );
};
export default Router;