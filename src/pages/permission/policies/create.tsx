import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Button, Card, Tooltip, Form, Input } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import PageHeaderWrapper from '@/components/page-header-wrapper';
import FooterToolbar from '@/components/footer-toolbar';
import StandardTable from '@/components/standard-table';
import { IModule, IAction } from '@/models/action';
import { ConnectProps } from '@/models/connect';
import StatementForm from '../components/statement-form';

interface IProps extends ConnectProps, FormComponentProps {
  modules: IModule[];
  actions: IAction[];
}

const CreatePolicy: React.FC<IProps> = (props) => {
  const { dispatch, form, modules, actions } = props;
  const { getFieldDecorator } = form;
  const [visible, setVisible] = React.useState<boolean>(false);

  React.useState(() => {
    dispatch({
      type: 'action/fetchModules'
    })
  });

  const showCreateView = () => {
    setVisible(true);
  };

  const closeCreateView = () => {
    setVisible(false);
  };

  const handleCreate = () => {
    form.validateFields((error, values) => {
      if (!error) {
        console.log(values);
      }
    });
  };

  const handelCancel = () => {
    router.push('/permission/policies');
  };

  const columns = [
    {
      title: '权限效力',
      dataIndex: 'effect'
    },
    {
      title: '模块',
      dataIndex: 'module'
    },
    {
      title: '操作名称',
      dataIndex: 'actionName'
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Tooltip placement="top" title="删除">
          <Button
            type="danger"
            size="small"
            icon="delete"
          />
        </Tooltip>
      )
    }
  ];

  return (
    <React.Fragment>
      <PageHeaderWrapper
        title="新建自定义权限策略"
        extra={[
          <Button key="1" type="primary" onClick={showCreateView}>
            添加授权语句
          </Button>
        ]}
      >
        <Form layout="inline">
          <Form.Item label="策略名称">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: '策略名称不能为空'
                },
              ],
            })(<Input placeholder="请输入策略名称" />)}
          </Form.Item>
          <Form.Item label="策略备注">
            {getFieldDecorator('remark', {

            })(<Input placeholder="请输入策略备注" />)}
          </Form.Item>
        </Form>
      </PageHeaderWrapper>

      <StatementForm
        visible={visible}
        formType="create"
        modules={modules}
        actions={actions}
        dispatch={dispatch}
        onClose={closeCreateView}
      />

      <Card bordered={false}>
        <StandardTable
          data={{
            list: []
          }}
          columns={columns}
        />
      </Card>

      <FooterToolbar>
        <Button type="primary" onClick={handleCreate}>确定</Button>
        <Button onClick={handelCancel}>返回</Button>
      </FooterToolbar>
    </React.Fragment>
  )
};

CreatePolicy.defaultProps = {
  modules: []
};

export default connect(({ action }) => ({
  modules: action.modules,
  actions: action.list
}))(Form.create()(CreatePolicy));
