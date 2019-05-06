import React from 'react';
import { Form, Input } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import DrawerWrapper from '@/components/drawer-wrapper';

export type TType = 'create' | 'update';

interface IProps extends FormComponentProps {
  type?: TType;
  visible?: boolean;
  onClose?: () => void;
}

const { TextArea } = Input;

const GroupDrawer: React.FC<IProps> = (props) => {
  const { visible, onClose, form, type } = props;
  const { getFieldDecorator } = form;

  const [title, setTitle] = React.useState<string>('');

  React.useEffect(() => {
    setTitle(type === 'create' ? '添加用户组' : '更新用户组');
  }, [props.type]);

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 15 },
    },
  };

  return (
    <DrawerWrapper
      visible={visible}
      onClose={onClose}
      onCancel={onClose}
      width={600}
      title={title}
    >
      <Form>
        <Form.Item
          {...formItemLayout}
          label="用户组名称"
          help="不超过64个字符，允许英文字母、数字，或'-'"
        >
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '用户组名称不能为空'
              },
            ]
          })(
            <Input placeholder="请输入用户组名称" />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="显示名称"
        >
          {getFieldDecorator('displayName', {
            rules: [
              {
                required: true,
                message: '显示名称不能为空'
              },
            ]
          })(
            <Input placeholder="请输入显示名称" />
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="备注">
          {getFieldDecorator('remark', {
            rules: []
          })(
            <TextArea rows={3} />
          )}
        </Form.Item>
      </Form>
    </DrawerWrapper>
  )
};

GroupDrawer.defaultProps = {
  visible: false
};

var UserDrawer;
export default Form.create()(GroupDrawer);
