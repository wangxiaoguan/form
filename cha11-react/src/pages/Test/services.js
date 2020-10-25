import request from '@/utils/request';
import { stringify } from 'qs';

// 查询住院结算
export async function tableDataFetch(params) {
  return request('/api/settle/inhos/findInhosSetl', {
    method: 'POST',
    data: params,
  });
}
//查询入院信息
export async function getInhosInHandle(params) {
  return request(`/api/settle/inhos/getInhosInHandle?mdtrt_id=${params}`, {
    method: 'GET',
    data: params,
  });
}
//查询费用结果信息
export async function findFeeResult(params) {
  return request(`/api/settle/inhos/findFeeResult?mdtrt_id=${params}`, {
    method: 'GET',
    data: params,
  });
}
//查询出院信息
export async function findInhosOutHandle(params) {
  return request(`/api/settle/inhos/findInhosOutHandle?mdtrt_id=${params}`, {
    method: 'GET',
    data: params,
  });
}
//查询出院结算信息
export async function getSetlinfo(params) {
  return request(`/api/settle/inhos/getSetlinfo?mdtrt_id=${params}`, {
    method: 'GET',
    data: params,
  });
}
//住院结算详情
export async function getOutSetlinfo(params) {
  return request(`/api/settle/inhos/getOutSetlinfo?mdtrt_id=${params}`, {
    method: 'GET',
    data: params,
  });
}
//办理入院并上传
export async function saveUploadInHandleInfo(params) {
  return request(`/api/settle/inhos/saveUploadInHandleInfo`, {
    method: 'POST',
    data: params,
  });
}
//办理出院
export async function saveUploadOutHandleInfo(params) {
  return request(`/api/settle/inhos/saveUploadOutHandleInfo`, {
    method: 'POST',
    data: params,
  });
}
//预结算
export async function preSettlement(params) {
  return request(`/api/settle/inhos/preSettlement`, {
    method: 'POST',
    data: params,
  });
}
//结算
export async function settle(params) {
  return request(`/api/settle/inhos/settle?mdtrt_id=${params}`, {
    method: 'POST',
  });
}
//明细审核详情
export async function fetchDetail(params) {
  return request(`/api/detailAudit/getDetail?${stringify(params)}`);
}
// // 查询费用明细信息
// export async function expensesFetch(params) {
//   return request('/api/inhos/findFeeDetailPage', {
//     method: 'POST',
//     data: params,
//   });
// }
// // 查询出院信息
// export async function dischargeFetch(params) {
//   return request('/api/inhos/findInhosOutHandlePage', {
//     method: 'POST',
//     data: params,
//   });
// }
// // 查询住院费用人员
// export async function inpatientSettlementFetch(params) {
//   return request('/api/inhos/findInhosPatientFee', {
//     method: 'POST',
//     data: params,
//   });
// }
// 查询购药信息
export async function getDrugInfo(params) {
  return request(`/api/drugSetle/getDrugInfo?${stringify(params)}`);
}
// 查询撤销流程
export async function findFlow(params) {
  return request(`/api/settle/inhos/findFlow?${stringify(params)}`);
}
// 解析导入的数据
export async function parseData(params) {
  return request('/api/settle/inhos/parseData', {
    method: 'POST',
    data: params,
  });
}
// 保存上传费用明细数据
export async function saveFeeDetail(params) {
  return request('/api/settle/inhos/saveFeeDetail', {
    method: 'POST',
    data: params,
  });
}
// 费用明细撤销
export async function cancelFeeDetail(params) {
  return request('/api/settle/inhos/cancelFeeDetail', {
    method: 'POST',
    data: params,
  });
}
// 查询费用信息
export async function getFeeInfoByFeedetlSn(params) {
  return request(`/api/settle/inhos/getFeeInfoByFeedetlSn?${stringify(params)}`);
}

// 撤销
// 按就诊id撤销所有的费用明细
export async function cancelFeeDetailByMdtrtId(params) {
  return request('/api/settle/inhos/cancelFeeDetailByMdtrtId', {
    method: 'POST',
    data: params,
  });
}
// 入院撤销
export async function cancelInhosInHandle(params) {
  return request('/api/settle/inhos/cancelInhosInHandle', {
    method: 'POST',
    data: params,
  });
}
// 出院撤销
export async function cancelInhosOutHandle(params) {
  return request('/api/settle/inhos/cancelInhosOutHandle', {
    method: 'POST',
    data: params,
  });
}
// 出院撤销
export async function cancelOutSetle(params) {
  return request('/api/settle/inhos/cancelOutSetle', {
    method: 'POST',
    data: params,
  });
}
