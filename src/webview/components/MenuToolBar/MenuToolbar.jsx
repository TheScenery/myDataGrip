import React, { useState } from 'react';
import styled from 'styled-components';
import { DatabaseOutlined, PlusOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { EditorDialog } from '../ConnectionPropertiesEditor/EditorDialog';
import { useDispatch } from 'react-redux';
import { addConnection } from '../../store/connectionSlice';

const Container = styled.div`
  padding: 8px;
  color: white;
  display: flex;
  align-items: center;

  .menu-icon {
    cursor: pointer;
  }
`;

export const MenuToolbar = () => {
  const items = [
    {
      icon: <DatabaseOutlined/>,
      label: 'Data Source',
      key: '0',
      children: [
        { key: 'mySql', label: 'MySql' },
      ],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const onClick = (menuItem) => {
    console.log(menuItem.key);
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOk = (value) => {
    console.log('save connections', value);
    dispatch(addConnection(value));
    handleClose();
  };

  const menu = {
    items,
    onClick,
    style: { width: 200 },
  };

  return (
      <Container>
        <Dropdown
            menu={menu} trigger={['click']}>
          <PlusOutlined className="menu-icon"/>
        </Dropdown>
        <EditorDialog isOpen={isModalOpen} onClose={handleClose} onOk={handleOk}/>
      </Container>
  );
};