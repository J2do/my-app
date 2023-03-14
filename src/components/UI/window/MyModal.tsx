import React from "react";
import cl from "./MyModal.module.css";

interface ModalProps {
  children: any;
}

const MyModal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className={[cl.myModal, cl.active].join(" ")}>
      <div className={cl.myModelContent}>{children}</div>
    </div>
  );
};

export default MyModal;
