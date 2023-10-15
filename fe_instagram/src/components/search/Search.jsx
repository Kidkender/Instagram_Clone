import { useDispatch, useSelector } from "react-redux";
import "./Search.css";
import SearchUserCard from "./SearchUserCard";
import { searchUser } from "~/redux/user/Action";
const Search = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const user = useSelector((store) => store.user);

  // dispatch(searchUser());
  const handleSearch = (e) => {
    dispatch(searchUser({ jwt: token, query: e.target.value }));
  };

  return (
    <div className="searchContainer">
      <div className="px-3 pb-5">
        <h1 className="text-xl pb-5">Search</h1>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search..."
          className="searchInput"
        />
      </div>
      <hr />
      <div className="px-3 pt-5">
        {user.searchUser?.map((item, index) => (
          <SearchUserCard user={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Search;
