import {
  tableDataFetch,
  getInhosInHandle,
  findFeeResult,
  findInhosOutHandle,
  getSetlinfo,
  getOutSetlinfo,
  saveUploadInHandleInfo,
  saveUploadOutHandleInfo,
  preSettlement,
  settle,
  fetchDetail,
  expensesFetch,
  dischargeFetch,
  inpatientSettlementFetch,
  findFlow,
  parseData,
  saveFeeDetail,
  cancelFeeDetail,
  getFeeInfoByFeedetlSn,
  cancelFeeDetailByMdtrtId,
  cancelInhosInHandle,
  cancelInhosOutHandle,
  cancelOutSetle,
} from './services';
import { notification, message } from 'antd';

const PersonnelRecordModel = {
  namespace: 'hospitalizationSettlementModel',
  state: {
    tableData: [],
    inhosData: {},
    feeData: [],
    outhosData: {},
    setleData: {}, //出院结算信息
    outSetleData: {}, //住院结算详情
    detailData: {}, //明细审核详情
    parseDataList: [],
    feeDetailData: [],
    findFlowData: {}, // 撤销数据
  },
  effects: {
    *tableDataFetch({ payload, callback }, { call, put }) {
      const response = yield call(tableDataFetch, payload);
      if (response && response.success) {
        yield put({
          type: 'save',
          payload: response,
        });
      }
      if (callback) callback(response);
    },
    *getInhosInHandle({ payload, callback }, { call, put }) {
      const response = yield call(getInhosInHandle, payload);
      if (response && response.success) {
        yield put({
          type: 'saveInhosData',
          payload: response,
        });
      }
      if (callback) callback(response);
    },
    *findFeeResult({ payload, callback }, { call, put }) {
      const response = yield call(findFeeResult, payload);
      if (response && response.success) {
        yield put({
          type: 'saveFeeData',
          payload: response,
        });
      }
      if (callback) callback(response);
    },
    *findInhosOutHandle({ payload, callback }, { call, put }) {
      const response = yield call(findInhosOutHandle, payload);
      if (response && response.success) {
        yield put({
          type: 'saveOutHosData',
          payload: response,
        });
      }
      if (callback) callback(response);
    },
    *getSetlinfo({ payload, callback }, { call, put }) {
      const response = yield call(getSetlinfo, payload);
      if (response && response.success) {
        yield put({
          type: 'saveSetleData',
          payload: response,
        });
      }
      if (callback) callback(response);
    },
    *getOutSetlinfo({ payload, callback }, { call, put }) {
      const response = yield call(getOutSetlinfo, payload);
      if (response && response.success) {
        yield put({
          type: 'saveOutSetleData',
          payload: response,
        });
      }
      if (callback) callback(response);
    },
    *saveUploadInHandleInfo({ payload, callback }, { call, put }) {
      const response = yield call(saveUploadInHandleInfo, payload);
      if (response && response.success) {
        // yield put({
        //   type: 'saveSetleData',
        //   payload: response,
        // });
      }
      if (callback) callback(response);
    },
    *saveUploadOutHandleInfo({ payload, callback }, { call, put }) {
      const response = yield call(saveUploadOutHandleInfo, payload);
      if (response && response.success) {
      }
      if (callback) callback(response);
    },
    *preSettlement({ payload, callback }, { call, put }) {
      const response = yield call(preSettlement, payload);
      if (response && response.success) {
      }
      if (callback) callback(response);
    },
    *settle({ payload, callback }, { call, put }) {
      const response = yield call(settle, payload);
      if (response && response.success) {
        if (callback) callback(response);
        notification.success({
          message: response.message || '上传成功',
        });
      } else {
        notification.error({
          message: response.message || '上传失败',
        });
      }
    },
    *fetchDetail({ payload, callback }, { call, put }) {
      const response = yield call(fetchDetail, payload);
      if (response && response.success) {
        yield put({
          type: 'saveDetail',
          payload: response,
        });
      }
      if (callback) callback(response);
    },
    // *expensesFetch({ payload, callback }, { call, put }) {
    //   const response = yield call(expensesFetch, payload);
    //   if (response && response.success) {
    //     yield put({
    //       type: 'save',
    //       payload: response,
    //     });
    //   }
    //   if (callback) callback(response);
    // },
    // *dischargeFetch({ payload, callback }, { call, put }) {
    //   const response = yield call(dischargeFetch, payload);
    //   if (response && response.success) {
    //     yield put({
    //       type: 'save',
    //       payload: response,
    //     });
    //   }
    //   if (callback) callback(response);
    // },
    // *inpatientSettlementFetch({ payload, callback }, { call, put }) {
    //   const response = yield call(inpatientSettlementFetch, payload);
    //   if (response && response.success) {
    //     yield put({
    //       type: 'save',
    //       payload: response,
    //     });
    //   }
    //   if (callback) callback(response);
    // },
    *clearModalData({ payload, callback }, { call, put }) {
      yield put({
        type: 'clearModal',
        payload: payload,
      });
    },
    *findFlow({ payload, callback }, { call, put }) {
      const response = yield call(findFlow, payload);
      if (response && response.success) {
        yield put({
          type: 'saveFindFlowData',
          payload: response,
        });
      }

      if (callback) callback(response);
    },
    *parseData({ payload, callback }, { call, put }) {
      const form = new FormData();
      form.append('file', payload);
      const response = yield call(parseData, form);
      if (response && response.success) {
        yield put({
          type: 'saveParseData',
          payload: response,
        });
      }
      if (callback) callback(response);
    },
    *saveFeeDetail({ payload, callback }, { call, put }) {
      const response = yield call(saveFeeDetail, payload);
      if (response && response.success) {
        yield put({
          type: 'saveFeeDetailData',
          payload: response,
        });
      }
      if (callback) callback(response);
    },
    *cancelFeeDetail({ payload, callback }, { call, put }) {
      const form = new FormData();
      form.append('feedetl_sn', payload);
      const response = yield call(cancelFeeDetail, form);
      if (response && response.success) {
        notification.success({
          message: response.message || '撤销成功',
        });
      } else {
        notification.error({
          message: response && response.message ? response.message : '撤销失败',
        });
      }
      if (callback) callback(response);
    },
    *getFeeInfoByFeedetlSn({ payload, callback }, { call, put }) {
      const response = yield call(getFeeInfoByFeedetlSn, payload);
      if (response && response.success) {
        // yield put({
        //   type: 'saveFeeDetailData',
        //   payload: response,
        // });
      }
      if (callback) callback(response);
    },
    *cancelFeeDetailByMdtrtId({ payload, callback }, { call, put }) {
      const form = new FormData();
      form.append('mdtrt_id', payload);
      const response = yield call(cancelFeeDetailByMdtrtId, form);
      if (response && response.success) {
        notification.success({
          message: response.message || '撤销成功',
        });
      } else {
        notification.error({
          message: response && response.message ? response.message : '撤销失败',
        });
      }
      if (callback) callback(response);
    },
    *cancelInhosInHandle({ payload, callback }, { call, put }) {
      const form = new FormData();
      form.append('mdtrt_id', payload);
      const response = yield call(cancelInhosInHandle, form);
      if (response && response.success) {
        notification.success({
          message: response.message || '撤销成功',
        });
      } else {
        notification.error({
          message: response && response.message ? response.message : '撤销失败',
        });
      }
      if (callback) callback(response);
    },
    *cancelInhosOutHandle({ payload, callback }, { call, put }) {
      const form = new FormData();
      form.append('mdtrt_id', payload);
      const response = yield call(cancelInhosOutHandle, form);
      if (response && response.success) {
        notification.success({
          message: response.message || '撤销成功',
        });
      } else {
        notification.error({
          message: response && response.message ? response.message : '撤销失败',
        });
      }
      if (callback) callback(response);
    },
    *cancelOutSetle({ payload, callback }, { call, put }) {
      const form = new FormData();
      form.append('mdtrt_id', payload);
      const response = yield call(cancelOutSetle, form);
      if (response && response.success) {
        notification.success({
          message: response.message || '撤销成功',
        });
      } else {
        notification.error({
          message: response && response.message ? response.message : '撤销失败',
        });
      }
      if (callback) callback(response);
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        tableData: action.payload,
      };
    },
    saveInhosData(state, action) {
      return {
        ...state,
        inhosData: action.payload,
      };
    },
    saveFeeData(state, action) {
      return {
        ...state,
        feeData: action.payload.data,
      };
    },
    saveOutHosData(state, action) {
      return {
        ...state,
        outhosData: action.payload,
      };
    },
    saveSetleData(state, action) {
      return {
        ...state,
        setleData: action.payload,
      };
    },
    saveOutSetleData(state, action) {
      return {
        ...state,
        outSetleData: action.payload,
      };
    },
    saveDetail(state, action) {
      return {
        ...state,
        detailData: action.payload.data || {},
      };
    },
    clearModal(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    saveParseData(state, action) {
      return {
        ...state,
        parseDataList: action.payload.data,
      };
    },
    saveFeeDetailData(state, action) {
      return {
        ...state,
        feeDetailData: action.payload.data,
      };
    },
    saveFindFlowData(state, action) {
      return {
        ...state,
        findFlowData: action.payload,
      };
    },
  },
};
export default PersonnelRecordModel;
