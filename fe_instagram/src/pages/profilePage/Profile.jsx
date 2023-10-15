import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfileUserDetail from "~/components/profile/ProfileUserDetail";
import ProfileUserPost from "~/components/profile/ProfileUserPost";
import { isFollowing, isReqUser } from "~/config/logic";
import { getAllPostOfUser } from "~/redux/post/Action";
import { findUserByUserName, getUserProfileAction } from "~/redux/user/Action";

const Profile = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { username } = useParams();
  const user = useSelector((store) => store.user);
  const isRequser = isReqUser(user.reqUser?.id, user?.findByUsername?.id);
  const isFollowed = isFollowing(user.reqUser, user?.findByUsername);
  // console.log("id by username ", user?.findByUsername?.id);
  useEffect(() => {
    const data = {
      jwt: token,
      username,
      userId: user?.findByUsername?.id,
    };
    dispatch(getUserProfileAction(token));
    dispatch(getAllPostOfUser(data));
    dispatch(findUserByUserName(data));
  }, [username, user.follower, user.following]);

  return (
    <div className="px-20">
      <div>
        <ProfileUserDetail
          user={isRequser ? user.reqUser : user.findByUsername}
          isFollowing={isFollowed}
          isReqUser={isRequser}
        />
      </div>
      <div>
        <ProfileUserPost
          user={isRequser ? user.reqUser : user.findByUsername}
        />
      </div>
    </div>
  );
};

export default Profile;
