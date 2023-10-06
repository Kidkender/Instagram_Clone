const SearchUserCard = () => {
  return (
    <div className="py-2 cursor-pointer">
      <div className="flex items-center">
        <img
          src="https://images.pexels.com/photos/5850083/pexels-photo-5850083.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p>Full name</p>
          <p className="opacity-70">username</p>
        </div>
      </div>
    </div>
  );
};

export default SearchUserCard;
