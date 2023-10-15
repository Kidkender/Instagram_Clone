import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

function ChangeProfilePhotoModal({
  isOpen,
  onClose,
  handleProfileImageChange,
}) {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Modal Title</ModalHeader>

          <ModalBody>
            <div className="flex flex-col items-center">
              <label
                htmlFor="profileImage"
                className="font-bold py-3 text-blue-600 text-center cursor-pointer text-xs w-full"
              >
                Upload Photo
              </label>

              <input
                onChange={handleProfileImageChange}
                type="file"
                id="profileImage"
                name="profileImage"
              />
            </div>

            <hr />

            <p className="font-bold py-3 text-red-600 text-center">
              Remove Photo
            </p>
            <hr />
            <p className=" py-3 text-center" onClick={onClose}>
              Cancel
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

ChangeProfilePhotoModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  handleProfileImageChange: PropTypes.func,
};

export default ChangeProfilePhotoModal;
