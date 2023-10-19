import React, { useRef } from 'react';
import { Modal } from 'antd';
import { ConnectionPropertiesEditor } from './ConnectionPropertiesEditor';

export const EditorDialog = ({ isOpen, onOk, onClose }) => {
  const initialValues = {
    name: 'localhost',
    host: 'localhost',
    port: 3306,
  };

  const editor = useRef(null);
  const handleOk = async () => {
    const data = await editor.current.submit();
    onOk(data);
  };
  return (
      <Modal title="Data Sources and Drivers" open={isOpen} onOk={handleOk}
             onCancel={onClose} destroyOnClose={true} maskClosable={false}>
        <ConnectionPropertiesEditor initialValues={initialValues} ref={editor}/>
      </Modal>
  );
};