import { Effect } from 'dva';
import store from 'store';
import isArray from 'lodash/isArray';
import { Reducer } from 'redux';
import { fetchNotices } from '@/services/global';
import { ITab } from '@/components/tab-pages';
import { STORAGE_KEY_DEFAULT_CONFIG } from '@/config';

export interface IGlobalModelState {
  notices: [];
  tabList: ITab[];
  tabActiveKey: string;
}

export interface IGlobalModel {
  name: 'global',
  state: IGlobalModelState,
  effects: {
    fetchQueryNotices: Effect;
    fetchAddTab: Effect;
    fetchRemoveTab: Effect;
  },
  reducers: {
    saveNotices: Reducer<any>;
    saveTabList: Reducer<any>;
    saveTabActiveKey: Reducer<any>;
  }
}

const { tabListKey, storageTabActiveKey } = STORAGE_KEY_DEFAULT_CONFIG;

const GlobalModel: IGlobalModel = {
  name: 'global',
  state: {
    notices: [],
    tabList: [],
    tabActiveKey: ''
  },
  effects: {
    *fetchQueryNotices(_, { call, put, select }) {
      const response = yield call(fetchNotices);
      if (response && response.code === 200) {
        const notices = response.data || [];
        yield put({
          type: 'saveNotices',
          payload: notices
        });
        const unreadCount = yield select(
          (state) => state.global.notices.filter((item) => !item.read).length
        );
        yield put({
          type: 'user/changeNotifyCount',
          payload: {
            totalCount: notices.length,
            unreadCount
          }
        });
      }
    },
    *fetchAddTab({ payload }, { call, put, select }) {
      // 获取当前TabList数据
      const currentTabList = yield select((state) => state.global.tabList);
      const { location } = payload;
      const pathname = location!.pathname;
      if (!pathname) return;

      // 页面已存在则返回
      let result = false;
      currentTabList.forEach(item => {
        if (item.location.pathname === pathname) {
          result = true;
        }
      });
      if (result) return;

      let nextTabList = [];

      if (isArray(currentTabList)) {
        nextTabList = [...currentTabList, payload]
      } else {
        nextTabList.push(payload);
      }

      store.set(tabListKey, nextTabList);

      yield put({
        type: 'saveTabList',
        payload: nextTabList
      });
    },
    *fetchRemoveTab({ payload }, { call, put, select }) {
      let tabList = yield select((state) => state.global.tabList);

      const tabId = payload;
      if (!tabId) return;

      tabList = tabList.filter(item => item.id !== tabId);

      store.set(tabListKey, tabList);

      yield put({
        type: 'saveTabList',
        payload: tabList
      });
    }
  },
  reducers: {
    saveNotices(state, { payload }) {
      return {
        ...state,
        notices: payload
      };
    },
    saveTabList(state, { payload }) {
      return {
        ...state,
        tabList: payload
      };
    },
    saveTabActiveKey(state, { payload }) {
      store.set(storageTabActiveKey, payload);
      return {
        ...state,
        activeKey: payload
      };
    },
  }
};

export default GlobalModel;
