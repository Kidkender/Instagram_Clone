import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import "./CreatePostModal.css";
import { GrEmoji } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import PropTypes from "prop-types";

const CreatePostModal = ({ onClose, isOpen }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [file, setFile] = useState();
  const [caption, setCaption] = useState("");
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.file[0];
    if (
      file &&
      (droppedFile.type.startsWith("image/") ||
        droppedFile.type.startsWith("video/"))
    ) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    setIsDragOver(false);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleOnChange = (e) => {
    const file = e.target.files[0];
    if (
      (file && file.type.startsWith("image/")) ||
      file.type.startsWith("video/")
    ) {
      setFile(file);
    } else {
      setFile(null);
      alert("Please select an image or video");
    }
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className="flex justify-between py-1 px-10 items-center">
            <p>Create new post</p>
            <Button className="" variant={"ghost"} size="sm" colorScheme="blue">
              Share
            </Button>
          </div>
          <hr />
          <ModalBody>
            <div className="h-[70vh] justify-between pb-5 flex">
              <div className="w-[50%]">
                {!file && (
                  <div
                    className="drag-drop h-full"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                  >
                    <div>
                      <FaPhotoVideo className="text-3xl" />
                      <p>Drag Photos or videos here</p>
                    </div>
                    <label htmlFor="file-upload" className="custom-file-upload">
                      Select from computer
                    </label>
                    <input
                      className="fileInput"
                      type="file"
                      id="file-upload"
                      accept="image/*,video/*"
                      onChange={handleOnChange}
                    />
                  </div>
                )}
                {file && (
                  <img
                    className="max-h-full"
                    src={URL.createObjectURL(file)}
                    alt=""
                  />
                )}
              </div>
              <div className="w-[1px] border  h-full"></div>
              <div className="w-[50%]">
                <div className="flex items-center px-2">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://images.pexels.com/photos/5708072/pexels-photo-5708072.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                  <p className="font-semibold ml-4">username</p>
                </div>
                <div className="px-2">
                  <textarea
                    placeholder="Write a caption"
                    onChange={handleCaptionChange}
                    className="captionInput"
                    name="caption"
                    rows="8"
                  ></textarea>
                </div>
                <div className="flex justify-between px-2">
                  <GrEmoji />
                  <p className="opacity-70">{caption?.length}/2,200</p>
                </div>
                <hr />
                <div className="flex p-2 justify-between items-center">
                  <input
                    type="text"
                    placeholder="location"
                    name="location"
                    className="localtionInput"
                  />
                  <GoLocation />
                </div>
                <hr />
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

CreatePostModal.PropTypes = {
  onClose: PropTypes.bool,
  isOpen: PropTypes.bool,
};

export default CreatePostModal;
