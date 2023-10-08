import React from 'react';
import styled from 'styled-components';
import { DatabaseOutlined, PlusOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';

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

  const onClick = (menuItem) => {
    console.log(menuItem.key);
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
      </Container>
  );
};