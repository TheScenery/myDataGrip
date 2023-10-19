import React, { useState } from 'react';
import { Modal } from 'antd';
import { ConnectionPropertiesEditor } from './ConnectionPropertiesEditor';

export const EditorDialog = ({ isOpen, onOk, onClose }) => {

  const [data, setData] = useState({
    name: 'localhost',
  });
  const handleOk = () => {
    onOk(data);
  };
  return (
      <Modal title="Data Sources and Drivers" open={isOpen} onOk={handleOk}
             onCancel={onClose} destroyOnClose={true} maskClosable={false}>
        <ConnectionPropertiesEditor data={data} onChange={setData}/>
      </Modal>
  );
};