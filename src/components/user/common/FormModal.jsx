import React from "react";
import { Modal } from "antd";
import { closeModal, uiState } from "../../../features/ui/UiSlice";
import { useDispatch, useSelector } from "react-redux";

const FormModal = () => {
  const { isModal } = useSelector(uiState);
  const dispatch = useDispatch();
  const handleOk = () => {
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default FormModal;
