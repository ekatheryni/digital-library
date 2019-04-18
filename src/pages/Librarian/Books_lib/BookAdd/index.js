import React from 'react'
import "antd/dist/antd.css"
import './style.scss'
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Button, AutoComplete,
  } from 'antd';
  
  const { Option } = Select;
  
  
  class BookAdd extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
  
  
    render() {
      const { getFieldDecorator } = this.props.form;
     
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      
      return (
        <div className='bookadd'>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label={(
              <span>
                Book Title&nbsp;
              </span>
            )}
          >
            {getFieldDecorator('Name', {
              rules: [{ required: true, message: 'Please input title!', whitespace: true }],
            })(
              <Input type="text"/>
            )}
          </Form.Item>
          <Form.Item
            label={(
              <span>
                Author&nbsp;
              </span>
            )}
          >
            {getFieldDecorator('Author', {
              rules: [{ required: true, message: 'Please input author!', whitespace: true }],
            })(
              <Input type="text"/>
            )}
          </Form.Item>
          <Form.Item
            label={(
              <span>
                Description&nbsp;
              </span>
            )}
          >
            {getFieldDecorator('Description', {
              rules: [{ required: true, message: 'Please input description!', whitespace: true }],
            })(
              <Input type="text"/>
            )}
          </Form.Item>
          <Form.Item
            label={(
              <span>
                Genre&nbsp;
              </span>
            )}
          >
            {getFieldDecorator('Genre', {
              rules: [{ required: true, message: 'Please input genre!', whitespace: true }],
            })(
              <Input type="text"/>
            )}
          </Form.Item>
          
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Add</Button>
          </Form.Item>
        </Form>
        </div>
      );
    }
  }
  
  const WrappedApp = Form.create({ name: 'bookadd' })(BookAdd);
  
  export default WrappedApp