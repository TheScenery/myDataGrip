import React from 'react';
import { Form, Input } from 'antd';

export const ConnectionPropertiesEditor = ({ data, onChange }) => {
  const handleValueChange = (changedValues, allValues) => {
    onChange(allValues);
  };
  return (
      <Form labelCol={{ span: 4 }} onValuesChange={handleValueChange}
            wrapperCol={{ span: 20 }} labelAlign="left" initialValues={data}>
        <Form.Item label="Name" name='name'>
          <Input/>
        </Form.Item>
        <Form.Item label="Comment" name='comment'>
          <Input/>
        </Form.Item>
      </Form>
  );
};