import { useEffect } from "react";

type ModalProps = {
  show: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
  position?: "center" | "right"; // Optional position prop
  closeOnBackdropClick?: boolean;
};

const Modal = ({
  show,
  toggleModal,
  children,
  position = "center",
  closeOnBackdropClick = true,
}: ModalProps) => {
  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      {show && (
        <div
          className="z-50 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closeOnBackdropClick ? toggleModal : undefined}
        ></div>
      )}

      {/* Modal Content */}
      <div
        className={`fixed inset-0 flex ${
          position === "center"
            ? "items-center justify-center"
            : "items-center justify-end"
        } z-50`} // Higher z-index than backdrop
      >
        <div
          className={`bg-white rounded-lg overflow-hidden shadow-lg max-w-md mx-auto p-4 relative ${
            position === "right" ? "mr-2" : ""
          }`}
        >
          {/* <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={toggleModal}
          >
            &times;
          </button> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
