import React, { forwardRef, useImperativeHandle } from 'react';
import { Divider, Form, Input } from 'antd';

export const ConnectionPropertiesEditor = forwardRef(({ initialValues }, ref) => {
  const [form] = Form.useForm();
  const submit = async () => {
    return await form.validateFields();
  };

  useImperativeHandle(ref, () => ({
    submit,
  }));

  return (
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} form={form}
            labelAlign="left" initialValues={initialValues}>
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input/>
        </Form.Item>
        <Form.Item label="Comment" name="comment">
          <Input/>
        </Form.Item>
        <Divider/>
        <Form.Item label="Host" name="host" rules={[{ required: true }]}>
          <Input/>
        </Form.Item>
        <Form.Item label="Port" name="port" rules={[{ required: true }]}>
          <Input/>
        </Form.Item>
        <Form.Item label="User" name="user" rules={[{ required: true }]}>
          <Input/>
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password/>
        </Form.Item>
        <Form.Item label="Database" name="database">
          <Input/>
        </Form.Item>
      </Form>
  );
});