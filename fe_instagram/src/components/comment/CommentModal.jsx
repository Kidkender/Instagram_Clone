import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";

import PropTypes from "prop-types";
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import CommentCard from "./CommentCard";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import "./CommentModal.css";

const CommentModal = ({
  handlePostLike,
  onClose,
  isOpen,
  handleSavePost,
  isPostLiked,
  isSaved,
}) => {
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh] ">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full"
                  alt=""
                  src="https://images.pexels.com/photos/17893929/pexels-photo-17893929/free-photo-of-food-fishing-light-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
              <div className="w-[55%] pl-10 relative">
                <div className="flex justify-between items-center py-5">
                  <div className="flex items-center">
                    <div>
                      <img
                        src="https://images.pexels.com/photos/17801570/pexels-photo-17801570/free-photo-of-dag-gezisi.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className="w-9 h-9 rounded-full"
                      />
                    </div>
                    <div className="ml-2">
                      <p>username</p>
                    </div>
                  </div>
                  <BsThreeDots />
                </div>

                <hr />
                <div className="comment">
                  {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                    <CommentCard key={index} />
                  ))}
                </div>

                <div className="absolute bottom-0 w-[90%]   ">
                  <div className="flex justify-between items-center w-full py-4">
                    <div className="flex items-center space-x-2">
                      {isPostLiked ? (
                        <AiFillHeart
                          className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                          onClick={handlePostLike}
                        />
                      ) : (
                        <AiOutlineHeart
                          className="text-2xl hover:opacity-50 cursor-pointer"
                          onClick={handlePostLike}
                        />
                      )}

                      <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
                      <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
                    </div>
                    <div className="cursor-pointer">
                      {isSaved ? (
                        <BsBookmarkFill
                          onClick={handleSavePost}
                          className="text-xl hover:opacity-50 cursor-pointer"
                        />
                      ) : (
                        <BsBookmark
                          onClick={handleSavePost}
                          className="text-xl hover:opacity-50 cursor-pointer"
                        />
                      )}
                    </div>
                  </div>
                  <div className="w-full py-2 ">
                    <p>10 likes</p>
                    <p className="opacity-50 text-sm">1 minute ago</p>
                  </div>

                  <div className="flex  items-center w-full   ">
                    <BsEmojiSmile />
                    <input
                      type="text"
                      className="commnetInput"
                      placeholder="Add a comment..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

CommentModal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.func,
  handlePostLike: PropTypes.func,
  isSaved: PropTypes.bool,
  handleSavePost: PropTypes.func,
  isPostLiked: PropTypes.bool,
};

export default CommentModal;
