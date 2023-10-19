import React from 'react';
import { Form, Input } from 'antd';

export const ConnectionPropertiesEditor = () => {
  return (
      <Form>
        <Form.Item label="Name">
          <Input/>
        </Form.Item>
        <Form.Item label="Comment">
          <Input/>
        </Form.Item>
      </Form>
  );
};