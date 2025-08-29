import React, { ReactNode, useState } from "react";
import { GrClose } from "react-icons/gr";

interface ModalProps {
  children: ReactNode;
  toggleModal: boolean;
  handleToggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  toggleModal,
  handleToggleModal,
}) => {
  const [showModal, setShowModal] = useState(true);

  console.log(showModal);

  const handleCloseModal = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === "modalWrapper") {
      // alert("parent modal clicked");
      setShowModal(false);
      handleToggleModal();
    }
  };

  return (
    <div
      id="modalWrapper"
      className={`${
        toggleModal
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      } transform transition-all duration-1000 fixed top-0 right-0 w-full h-screen bg-black/50 cursor-pointer z-50`}
      onClick={(e) => handleCloseModal(e)}
    >
      {/* modal dialog */}
      <div
        className={`relative w-[80%] max-h-[84%] h-fit flex flex-col justify-center items-center mt-20 bg-white mx-auto rounded-lg lg:rounded-2xl`}
      >
        {children}
        <button
          className="absolute -top-4  -right-4  w-8 h-8 lg:w-10 lg:h-10  bg-black rounded-full cursor-pointer flex flex-col justify-center items-center"
          onClick={() => {
            setShowModal(false);
            handleToggleModal();
          }}
        >
          <GrClose size={18} color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
