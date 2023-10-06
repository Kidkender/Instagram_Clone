import SuggestionCard from "./SuggestionCard";

const HomeRight = () => {
  return (
    <div className="">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <div>
              <img
                src="https://images.pexels.com/photos/17327094/pexels-photo-17327094/free-photo-of-pac-man-protagonists-cutouts.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="ml-3">
              <p>Fullname</p>
              <p className="opacity-70">username</p>
            </div>
          </div>
          <div>
            <p className="text-blue-700 font-semibold">swith</p>
          </div>
        </div>
        <div className="space-y-5 mt-10">
          {[1, 1, 1, 1].map((item, index) => (
            <SuggestionCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
