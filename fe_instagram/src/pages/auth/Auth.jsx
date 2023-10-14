import Signin from "~/components/login/Signin";
import "./Auth.css";
import { useLocation } from "react-router-dom";
import Singup from "~/components/login/Singup";

const Auth = () => {
  const location = useLocation();

  return (
    <div className="">
      <div className="flex items-center justify-center h-[100vh] space-x-5">
        <div className="relative hidden lg:block">
          <div className="h-[635px] w-[465px]">
            <img
              className="w-full h-full"
              src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png"
              alt=""
            />
            <div
              className="mobileWallpaper h-[541px] w-[250px] absolute top-[1.6rem]
             right-[60px]"
            ></div>
          </div>
        </div>
        <div className="w-[40vw]  lg:w-[23vw]">
          {location.pathname === "/login" ? <Signin /> : <Singup />}
          {/* <Signin /> */}
        </div>
      </div>
    </div>
  );
};

export default Auth;
