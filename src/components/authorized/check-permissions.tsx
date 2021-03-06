import React from 'react';
import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';
import isBoolean from 'lodash/isBoolean';
import PromiseRender from './promise-render';
import { CURRENT } from './render-authorize';

export type Authority =
  | string
  | string[]
  | Promise<any>
  | null
  | undefined
  | boolean
  | ((current?: string | string[]) => Promise<any> | boolean);

/**
 * 通用权限检查方法
 * Common check permissions method
 * @param { 权限判定 | Permission judgment } authority
 * @param { 已有权限 | Your permission description } currentAuthority
 * @param { 通过的组件 | Passing components } target
 * @param { 未通过的组件 | no pass components } Exception
 */
const checkPermissions = (
  authority?: Authority,
  currentAuthority?: string | string[],
  target?: React.ReactNode,
  Exception?: React.ReactNode,
): React.ReactNode => {
  // 没有判定权限.默认查看所有
  if (isUndefined(authority) || isNull(authority)) {
    return target;
  }

  // Boolean处理
  if (isBoolean(authority)) {
    return authority ? target : Exception;
  }

  // 数组处理
  if (Array.isArray(authority)) {
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.some(item => authority.includes(item))) {
        return target;
      }
    } else if (authority.includes(currentAuthority!)) {
      return target;
    }
    return Exception;
  }

  // string 处理
  if (typeof authority === 'string') {
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.some(item => authority === item)) {
        return target;
      }
    } else if (authority === currentAuthority) {
      return target;
    }
    return Exception;
  }

  // Promise 处理
  if (authority instanceof Promise) {
    return <PromiseRender ok={target} error={Exception} promise={authority} />;
  }

  // Function 处理
  if (typeof authority === 'function') {
    try {
      const bool = authority(currentAuthority);
      // 函数执行后返回值是 Promise
      if (bool instanceof Promise) {
        return <PromiseRender ok={target} error={Exception} promise={bool} />;
      }
      if (bool) {
        return target;
      }
      return Exception;
    } catch (error) {
      throw error;
    }
  }

  throw new Error('unsupported parameters');
};

const check = (
  authority?: Authority,
  target?: React.ReactNode,
  Exception?: React.ReactNode
) => {
  return checkPermissions(authority, CURRENT, target, Exception);
};

export default check;
