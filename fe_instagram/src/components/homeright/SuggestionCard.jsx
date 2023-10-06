import React from "react";

const SuggestionCard = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-9 h-9 rounded-full"
        />
        <div className="ml-2">
          <p className="text-sm font-semibold ">username</p>
          <p className="text-sm font-semibold opacity-70">Follows you</p>
        </div>
      </div>
      <p className="text-blue-700 text-sm font-semibold">Follow</p>
    </div>
  );
};

export default SuggestionCard;
