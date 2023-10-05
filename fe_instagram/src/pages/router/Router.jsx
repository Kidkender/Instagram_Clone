import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import Sidebar from "~/components/sidebar/Sidebar";
import { ProfilePage } from "..";

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
        </Routes>
      </div>
    </div>
  );
};
export default Router;
