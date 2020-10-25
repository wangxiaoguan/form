import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { UploadOutlined } from '@ant-design/icons';
import {
  Card,
  Tabs,
  Popconfirm,
  Modal,
  Row,
  Col,
  Button,
  Form,
  Steps,
  Table,
  Input,
  InputNumber,
  Select,
  Upload,
  message,
  notification,
} from 'antd';
import styles from './index.less';
import SearchForm from '@/components/SearchForm';
import SearchTable from '@/components/SearchTable';
import EditableTable from '../component/EditableTable';
import DescriptionsDetails from '@/components/DescriptionsDetails';
import {
  columns,
  searchFormList,
  advancedSearchList,
  addModalInfo,
  costUploadInfo,
  previewInfo,
  revokeInfo,
  changeInfo,
  auditDetails,
  dictCode,
} from './column';
import moment from 'moment';
import _ from 'lodash';

const { TabPane } = Tabs;
const { Option } = Select;
const { Step } = Steps;
const HospitalizationSettlement = connect(
  ({ hospitalizationSettlementModel, dict, loading }) => ({
    hospitalizationSettlementModel,
    dict,
    loading: loading.effects['hospitalizationSettlementModel/fetch'],
  }),
  (dispatch) => ({
    handleDict(val) {
      dispatch({
        type: 'dict/batchDictByCode',
        payload: val,
      });
    },
    batchDictByCode(payload, callback) {
      dispatch({
        type: 'dict/batchDictByCode',
        payload,
      });
    },
    tableDataFetch(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/tableDataFetch',
        payload,
        callback,
      });
    },
    getInhosInHandle(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/getInhosInHandle',
        payload,
        callback,
      });
    },
    findFeeResult(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/findFeeResult',
        payload,
        callback,
      });
    },
    findInhosOutHandle(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/findInhosOutHandle',
        payload,
        callback,
      });
    },
    getSetlinfo(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/getSetlinfo',
        payload,
        callback,
      });
    },
    getOutSetlinfo(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/getOutSetlinfo',
        payload,
        callback,
      });
    },
    saveUploadInHandleInfo(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/saveUploadInHandleInfo',
        payload,
        callback,
      });
    },
    saveUploadOutHandleInfo(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/saveUploadOutHandleInfo',
        payload,
        callback,
      });
    },
    preSettlement(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/preSettlement',
        payload,
        callback,
      });
    },
    settle(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/settle',
        payload,
        callback,
      });
    },
    fetchDetail(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/fetchDetail',
        payload,
        callback,
      });
    },
    clearModalData(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/clearModalData',
        payload,
        callback,
      });
    },
    findFlow(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/findFlow',
        payload: { mdtrt_id: payload },
        callback,
      });
    },
    parseData(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/parseData',
        payload,
        callback,
      });
    },
    saveFeeDetail(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/saveFeeDetail',
        // payload: { details: payload },
        payload,
        callback,
      });
    },
    cancelFeeDetail(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/cancelFeeDetail',
        payload,
        callback,
      });
    },
    getFeeInfoByFeedetlSn(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/getFeeInfoByFeedetlSn',
        payload: { feedetl_sn: payload },
        callback,
      });
    },
    cancelFeeDetailByMdtrtId(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/cancelFeeDetailByMdtrtId',
        payload,
        callback,
      });
    },
    cancelInhosInHandle(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/cancelInhosInHandle',
        payload,
        callback,
      });
    },
    cancelInhosOutHandle(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/cancelInhosOutHandle',
        payload,
        callback,
      });
    },
    cancelOutSetle(payload, callback) {
      dispatch({
        type: 'hospitalizationSettlementModel/cancelOutSetle',
        payload,
        callback,
      });
    },
  }),
)((props) => {
  const {
    handleDict,
    tableDataFetch,
    getInhosInHandle,
    getOutSetlinfo,
    findFeeResult,
    findInhosOutHandle,
    getSetlinfo,
    saveUploadInHandleInfo,
    saveUploadOutHandleInfo,
    preSettlement,
    settle,
    fetchDetail,
    clearModalData,
    findFlow,
    parseData,
    saveFeeDetail,
    cancelFeeDetail,
    getFeeInfoByFeedetlSn,
    cancelFeeDetailByMdtrtId,
    cancelInhosInHandle,
    cancelInhosOutHandle,
    cancelOutSetle,
    loading,
    hospitalizationSettlementModel: {
      tableData,
      inhosData,
      feeData,
      outhosData,
      setleData,
      outSetleData,
      detailData,
      parseDataList,
      feeDetailData,
      findFlowData,
    },
    dict: { dictDataList },
  } = props;

  const [pagination, setPagination] = useState({ total: 0, pageNumber: 1, pageSize: 20 });
  const [searchInitialValues, setSearchInitialValues] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // 表格选中数据
  const [clickedId, setClickedId] = useState(''); //当前选择的行就诊id
  const [visibleAdd, setVisibleAdd] = useState(false); // 新增入院Modal
  const [visibleUpload, setVisibleUpload] = useState(false); // 入院信息上传Modal
  const [visiblePreview, setVisiblePreview] = useState(false); // 结算预览Modal
  const [visibleRevoke, setVisibleRevoke] = useState(false); // 撤销Modal
  const [visibleChange, setVisibleChange] = useState(false); // 变更Modal
  const [visibleDetailRevoke, setVisibleDetailRevoke] = useState(false); // 费用明细撤销Modal
  const [visibleDetailAdd, setVisibleDetailAdd] = useState(false); // 添加费用明细Modal
  const [visibleDetailAudit, setVisibleDetailAudit] = useState(false); // 明细审核详情Modal
  const [visibleDetailCost, setVisibleDetailCost] = useState(false); // 费用明细详情Modal

  const [current, setCurrent] = useState(0); // 详情 进度条
  const [revokeCurrent, setRevokeCurrent] = useState(0); // 撤销 进度条

  const [isAdd, setIsAdd] = useState(false); // 是否新增入院
  const [changeInitialValues, setChangeInitialValues] = useState({}); // 变更 表单默认值
  const [addData, setAddData] = useState([]); // 诊断信息Modal 可编辑Table 数据

  const [addUploadData, setAddUploadData] = useState([]); // 诊断信息Modal 可编辑Table 数据
  const [addUploadFormData, setAddUploadFormData] = useState({}); // 出院信息Modal form 数据
  const [settleFormData, setSettleFormData] = useState({}); // 出院信息Modal form 数据

  const [auditActiveKey, setAuditActiveKey] = useState('1'); // 明细审核详情 Tabs

  const [selectedRowKeysUpload, setSelectedRowKeysUpload] = useState([]); // 手动录入表格选中数据
  const [selectedRowKeysUploadData, setSelectedRowKeysUploadData] = useState([]); // 手动录入表格选中数据
  const [isDetailCheck, setIsDetailCheck] = useState(false); // 是否是查看费用明细  状态
  const [detailCheckData, setDetailCheckData] = useState([]); // 查看费用明细  单条数据
  const [showSetlinfoFlag, setShowSetlinfoFlag] = useState(0); // 为1时，表示查看结算详情
  const [isHomePage, setIsHomePage] = useState(false); // 是否是从首页查看费用明细  状态
  // const [addColumnBug, setAddColumnBug] = useState([]);

  const [formSearch] = Form.useForm();
  const [formUpload] = Form.useForm();
  const [formChange] = Form.useForm();
  const [formDischarge] = Form.useForm();

  const rowSelectionUpload = {
    selectedRowKeys: selectedRowKeysUpload,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeysUpload(selectedRowKeys);
      setSelectedRowKeysUploadData(selectedRows);
    },
  };
  const formLayout = {
    labelCol: {
      span: 22,
    },
    wrapperCol: {
      span: 22,
    },
  };
  const btnList = [
    {
      type: 'primary',
      name: '查询',
    },
    {
      type: 'denger',
      name: '重置',
      onClick: () => {
        setSearchInitialValues({});
      },
    },
    {
      type: 'primary',
      name: '新增入院',
      align: 'left',
      // className: 'green-btn',
      onClick: () => {
        clearModalData({ inhosData: {} });
        setIsAdd(true);
        // setVisibleAdd(true);
        setVisibleChange(true);
      },
    },
    {
      type: 'primary',
      name: '导出明细',
      align: 'left',
      className: 'black-btn',
      onClick: () => {
        setIsAdd(false);
        setVisibleUpload(true);
      },
    },
    {
      type: 'primary',
      name: '打印明细',
      align: 'left',
      className: 'yellow-btn',
      onClick: () => {
        // setVisiblePreview(true);
        setVisibleRevoke(true);
      },
    },
  ];
  const tableColumns = columns.map((item) => {
    if (item.title === '费用信息') {
      item.children.map((list) => {
        if (list.key === 'fee_status') {
          list.render = (text, record) => {
            const status = Number(text);
            let dom;
            switch (status) {
              case 1:
                dom = <div className={styles.statusWarning}>待上传</div>;
                break;
              case 2:
                dom = <div className={styles.statusError}>上传失败</div>;
                break;
              case 3:
                dom = (
                  <a
                    className={styles.statusSuccess}
                    onClick={() => {
                      findFeeResult(record.mdtrt_id, (res) => {
                        if (res && res.success) {
                          setVisibleDetailCost(true);
                          setIsHomePage(true);
                        }
                      });
                    }}
                  >
                    上传成功
                  </a>
                );
                break;
              case 4:
                dom = <div className={styles.statusError}>撤销失败</div>;
                break;
              case 5:
                dom = <div className={styles.statusWarning}>撤销成功</div>;
                break;
            }
            return dom;
          };
        }
      });
    }
    return item;
  });
  const Columns = [
    ...tableColumns,
    {
      title: '操作',
      align: 'center',
      children: [
        {
          title: '结算信息',
          align: 'center',
          key: 'detail',
          fixed: 'right',
          width: 180,
          render: (record) => {
            return (
              <div>
                {record.next_step == 1 ? (
                  <a
                    className={styles.tableBar}
                    onClick={() => {
                      setCurrent(0);
                      getInhosInHandle(record.mdtrt_id);
                      setClickedId(record.mdtrt_id);
                      setVisibleUpload(true);
                    }}
                  >
                    入院登记
                  </a>
                ) : record.next_step == 2 ? (
                  <a
                    className={styles.tableBar}
                    onClick={() => {
                      setCurrent(1);
                      setClickedId(record.mdtrt_id);
                      findFeeResult(record.mdtrt_id, () => {});
                      setVisibleUpload(true);
                    }}
                  >
                    费用明细上传
                  </a>
                ) : record.next_step == 3 ? (
                  <a
                    className={styles.tableBar}
                    onClick={() => {
                      setCurrent(2);
                      setClickedId(record.mdtrt_id);
                      findInhosOutHandle(record.mdtrt_id, (res) => {
                        if (res && res.success) {
                          if (res.diseinfos.length === 0) {
                            getInhosInHandle(record.mdtrt_id, (resData) => {
                              if (resData && resData.success) {
                                resData.inHandle.begntime = resData.inHandle.begntime
                                  ? moment(resData.inHandle.begntime)
                                  : '';
                                resData.inHandle.endtime = resData.inHandle.endtime
                                  ? moment(resData.inHandle.endtime)
                                  : '';

                                resData.inHandle['die_date'] = resData.inHandle['die_date']
                                  ? moment(resData.inHandle['die_date'])
                                  : '';
                                resData.inHandle['birctrl_matn_date'] = resData.inHandle[
                                  'birctrl_matn_date'
                                ]
                                  ? moment(resData.inHandle['birctrl_matn_date'])
                                  : '';
                                setAddUploadFormData(resData.inHandle);
                              }
                            });
                          }
                          setAddUploadData(res.diseinfos || []);
                        }
                      });
                      setVisibleUpload(true);
                    }}
                  >
                    出院办理
                  </a>
                ) : record.next_step == 4 ? (
                  <a
                    className={styles.tableBar}
                    onClick={() => {
                      setCurrent(3);
                      setClickedId(record.mdtrt_id);
                      getSetlinfo(record.mdtrt_id, (res) => {
                        if (res && res.success) {
                          if (!res.data) {
                            getInhosInHandle(record.mdtrt_id, (resData) => {
                              if (resData && resData.success) {
                                setSettleFormData({
                                  ...resData.inHandle,
                                  medfee_sumamt: resData.totalFee,
                                });
                              }
                            });
                          }
                        }
                      });
                      setVisibleUpload(true);
                    }}
                  >
                    出院结算
                  </a>
                ) : record.settle_status == 3 ? (
                  <a
                    className={styles.tableBar}
                    onClick={() => {
                      // setCurrent(4);
                      checkSettleDetail(record.mdtrt_id);
                    }}
                  >
                    结算详情
                  </a>
                ) : (
                  <a
                    className={styles.tableBar}
                    onClick={() => {
                      setCurrent(0);
                      setClickedId(record.mdtrt_id);
                      getInhosInHandle(record.mdtrt_id);
                      setVisibleUpload(true);
                    }}
                  >
                    error
                  </a>
                )}
                {/* <a className={styles.tableBar} onClick={() => {
                  setClickedId(record.mdtrt_id);
                  if (record.settle_status == 3) {
                    setCurrent(1);
                  } else if () {
                    // setCurrent(record.next_step - 1);
                    setCurrent(0);
                  }
                  setVisibleUpload(true);
                }}>
                  {record.next_step == 1 ? '入院登记' : record.next_step == 2 ? '费用明细上传' : record.next_step == 3 ?
                   '出院办理' : record.next_step == 4 ? '出院结算' : record.settle_status == 3 ? '结算详情' : 'wu'}
                </a> */}
                {record.cancel ? (
                  <Button
                    type="link"
                    danger
                    onClick={() => {
                      findFlow(record.mdtrt_id, (res) => {
                        if (res && res.success) {
                          setVisibleRevoke(true);
                          const arr = res.flowList.filter((item) => item.cancel);
                          arr.length === 1
                            ? setRevokeCurrent(arr[0].step - 1)
                            : setRevokeCurrent(0);
                        }
                      });
                    }}
                  >
                    撤销
                  </Button>
                ) : null}
              </div>
            );
          },
        },
      ],
    },
  ];
  const detailInfo = [
    ...costUploadInfo.step2.content,
    {
      title: '操作',
      key: 'active',
      dataIndex: 'active',
      align: 'center',
      render: (text, record) => {
        return (
          <div>
            <a
              className={styles.textPrimary}
              onClick={() => {
                getFeeInfoByFeedetlSn(record.feedetl_sn, (res) => {
                  if (res && res.success) {
                    setIsDetailCheck(true);
                    setDetailCheckData([res.data]);
                    // setVisibleDetailCheck(true);
                    setVisibleDetailAdd(true);
                  }
                });
              }}
            >
              查看
            </a>
            {record.fee_status != 5 && !isHomePage ? (
              <a
                style={{ marginLeft: 5 }}
                className={styles.textError}
                onClick={() => {
                  getFeeInfoByFeedetlSn(record.feedetl_sn, (res) => {
                    if (res && res.success) {
                      setDetailCheckData([res.data]);
                      setVisibleDetailRevoke(true);
                    }
                  });
                }}
              >
                撤销
              </a>
            ) : (
              ''
            )}
          </div>
        );
      },
    },
  ];
  // 可编辑Table Columns
  const setAddColumn = (tableColumndata = [], setTableColumndata, isDelete) => {
    const arr = changeInfo.columns.map((item) => {
      switch (item.titleString) {
        case '诊断排序号':
          item.render = (text, record, index) => {
            return <Input value={text}></Input>;
          };
          break;
        // case '操作':
        //   item.render = (text, record, index) => {
        //     return (
        //       <a
        //         onClick={() => {
        //           debugger;
        //           const newData = tableColumndata.filter((item, key) => key !== index);
        //           setTableColumndata(newData);
        //         }}
        //       >
        //         删除
        //       </a>
        //     );
        //   };
        //   break;
        case '人员编号':
          item.render = (text, record, index) => {
            return <Input value={text}></Input>;
          };
          break;
        case '诊断类别':
          // item.options = dictDataList['diag_type'];
          item.render = (text, row, index) => {
            return (
              <Input
                value={
                  dictDataList['diag_type'].filter((item) => item.dictItemValue === text)[0]
                    ? dictDataList['diag_type'].filter((item) => item.dictItemValue === text)[0]
                        .dictItemName
                    : ''
                }
              ></Input>
            );
          };
          break;
        case '主诊断标志':
          item.render = (text, record, index) => {
            return (
              <Input
                value={
                  dictDataList['maindiag_flag'].filter((item) => item.dictItemValue === text)[0]
                    ? dictDataList['maindiag_flag'].filter((item) => item.dictItemValue === text)[0]
                        .dictItemName
                    : ''
                }
              ></Input>
            );
          };
          break;
        case '诊断代码':
          item.render = (text, record, index) => {
            return <Input value={text}></Input>;
          };
          break;
        case '诊断名称':
          item.options = dictDataList['diag_code'];
          item.onChange = (value, index) => {
            const dataCode = [...tableColumndata];
            dataCode[index].diag_code = dictDataList['diag_code'].filter(
              (item) => item.dictItemName === value.diag_name,
            )[0].dictItemValue;
            dataCode[index] = { ...dataCode[index], ...value };
            setTableColumndata(dataCode);
          };
          item.render = (text, record, index) => {
            return (
              <Input
                value={
                  dictDataList['diag_code'].filter((list) => list.dictItemName === text)[0]
                    ? dictDataList['diag_code'].filter((list) => list.dictItemName === text)[0]
                        .dictItemName
                    : ''
                }
              ></Input>
            );
          };
          break;
        case '入院病情':
          item.options = dictDataList['tcmdrug_used_way'];
          item.render = (text, record, index) => {
            return <Input value={text}></Input>;
            // (
            //   <Select value={text} style={{ width: '100%' }}>
            //     {/* {dictDataList['tcmdrug_used_way'].map((option) => {
            //         <Option key={option.dictItemValue}>{option.dictItemName}</Option>;
            //       })} */}
            //   </Select>
            // );
          };
          break;
        case '诊断科室':
          item.render = (text, record, index) => {
            return <Input value={text}></Input>;
          };
          break;
        case '诊断医生编码':
          item.render = (text, record, index) => {
            return <Input value={text}></Input>;
          };
          break;
        case '诊断医生姓名':
          item.render = (text, record, index) => {
            return <Input value={text}></Input>;
          };
          break;
        case '诊断时间':
          item.render = (text, record, index) => {
            return <Input value={text}></Input>;
          };
          break;
      }
      return item;
    });
    return isDelete ? arr.filter((item) => item.titleString !== '入院病情') : arr;
  };

  const [columnsChangeTable, setColumnsChangeTable] = useState(Columns);

  const rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
    },
  };
  const fetchData = (params) => {
    tableDataFetch({ ...params }, (res) => {
      if (res && res.success) {
        setPagination({
          pageSize: params.sortPage.pageSize,
          pageNumber: params.sortPage.pageNumber,
          total: res.count,
        });
      }
    });
  };
  const tableOnChange = (paginations, filters, sorter) => {
    const Pagination = {
      pageSize: paginations.pageSize,
      pageNumber: paginations.current,
    };
    fetchData({ sortPage: Pagination });
  };
  const onSubmitFind = (values) => {
    setSearchInitialValues({ ...values });
    fetchData({ ...values, sortPage: pagination });
  };
  const onSubmitChange = (values) => {
    setChangeInitialValues({ ...values });
  };

  const onChooseTheadFinish = (values) => {
    const columnsChange = Columns.map((item) => {
      const lists = item.children.filter((list) => values[list.key]);
      return { ...item, children: lists };
    });

    setColumnsChangeTable(columnsChange.filter((item) => item.children.length > 0));
  };
  const onAdvancedSearchFinish = (values) => {
    fetchData({ ...values, sortPage: pagination });
  };
  const stepChange = (current) => {
    setCurrent(current);
  };

  //TODO数据提交
  //入院信息提交
  const submitFormChange = async () => {
    formChange.submit();
    let formData = await formChange.validateFields();
    formData.begntime = moment(formData.begntime).format('YYYY-MM-DD hh:mm:ss');
    formData['birctrl_matn_date'] = moment(formData['birctrl_matn_date']).format('YYYY-MM-DD');
    saveUploadInHandleInfo(
      { inHandle: { ...formData, mdtrt_id: clickedId }, diseinfos: addData },
      (res) => {
        if (res && res.success) {
          notification.success({
            message: res.message || '上传成功',
          });
          setVisibleChange(false);
          fetchData({ sortPage: pagination });
        }
      },
    );
  };
  //出院办理提交
  const submitFormDischarge = async (func) => {
    const formData = await formDischarge.validateFields();
    formData.begntime = formData.begntime ? moment(formData.begntime).format('YYYY-MM-DD') : '';
    formData['birctrl_matn_date'] = formData['birctrl_matn_date']
      ? moment(formData['birctrl_matn_date']).format('YYYY-MM-DD')
      : '';
    formData.endtime = formData.endtime
      ? moment(formData.endtime).format('YYYY-MM-DD hh:mm:ss')
      : '';
    formData['die_date'] = formData['die_date']
      ? moment(formData['die_date']).format('YYYY-MM-DD')
      : '';

    saveUploadOutHandleInfo({ outHandle: formData, diseinfos: addUploadData }, (res) => {
      if (res && res.success) {
        func();
      }
    });
  };
  //预结算
  const submitFormUpload = async () => {
    const formData = await formUpload.validateFields();
    preSettlement(formData, (res) => {
      if (res && res.success) {
        getOutSetlinfo(clickedId);
        setVisiblePreview(true);
      }
    });
  };
  //查看结算详情
  const checkSettleDetail = async (mdtrtId) => {
    getOutSetlinfo(mdtrtId);
    setShowSetlinfoFlag(1);
    setVisiblePreview(true);
  };
  //结算
  const submitSettle = () => {
    settle(clickedId, () => {
      setVisiblePreview(false);
      setVisibleUpload(false);
    });
  };

  const next = () => {
    let key = current;
    key++;
    switch (key) {
      case 1:
        findFeeResult(clickedId, (res) => {
          if (res && res.success) {
            setCurrent(key);
          }
        });
        break;
      case 2:
        findInhosOutHandle(clickedId, (res) => {
          if (res && res.success) {
            if (res.diseinfos.length === 0 && _.isEmpty(res.outHandle)) {
              getInhosInHandle(clickedId, (resData) => {
                if (resData && resData.success) {
                  resData.inHandle.begntime = resData.inHandle.begntime
                    ? moment(resData.inHandle.begntime)
                    : '';
                  resData.inHandle.endtime = resData.inHandle.endtime
                    ? moment(resData.inHandle.endtime)
                    : '';

                  resData.inHandle['die_date'] = resData.inHandle['die_date']
                    ? moment(resData.inHandle['die_date'])
                    : '';
                  resData.inHandle['birctrl_matn_date'] = resData.inHandle['birctrl_matn_date']
                    ? moment(resData.inHandle['birctrl_matn_date'])
                    : '';
                  setAddUploadFormData(resData.inHandle);
                }
              });
            }
            setAddUploadData(res.diseinfos || []);
            setCurrent(key);
          }
        });
        break;
      case 3:
        submitFormDischarge(() => {
          getSetlinfo(clickedId, (res) => {
            if (res && res.success) {
              if (!res.data) {
                getInhosInHandle(clickedId, (resData) => {
                  if (resData && resData.success) {
                    setSettleFormData({ ...resData.inHandle, medfee_sumamt: resData.totalFee });
                  }
                });
              }
              setCurrent(key);
            }
          });
        });
        break;
    }
    // const values = await uploadForm.validateFields();
  };

  const prev = () => {
    let key = current;
    key--;
    switch (key) {
      case 0:
        getInhosInHandle(clickedId, (res) => {
          if (res && res.success) {
            setCurrent(key);
          }
        });
        break;
      case 1:
        findFeeResult(clickedId, (res) => {
          if (res && res.success) {
            setCurrent(key);
          }
        });
        break;
      case 2:
        findInhosOutHandle(clickedId, (res) => {
          if (res && res.success) {
            if (res.diseinfos.length === 0 && _.isEmpty(res.outHandle)) {
              getInhosInHandle(clickedId, (resData) => {
                if (resData && resData.success) {
                  resData.inHandle.begntime = resData.inHandle.begntime
                    ? moment(resData.inHandle.begntime)
                    : '';
                  resData.inHandle.endtime = resData.inHandle.endtime
                    ? moment(resData.inHandle.endtime)
                    : '';

                  resData.inHandle['die_date'] = resData.inHandle['die_date']
                    ? moment(resData.inHandle['die_date'])
                    : '';
                  resData.inHandle['birctrl_matn_date'] = resData.inHandle['birctrl_matn_date']
                    ? moment(resData.inHandle['birctrl_matn_date'])
                    : '';
                  setAddUploadFormData(resData.inHandle);
                }
              });
            }
            setAddUploadData(res.diseinfos || []);
            setCurrent(key);
          }
        });
        break;
    }
  };
  const auditTabsChange = (key) => {
    setAuditActiveKey(key);
  };
  const addContent = (
    <>
      <Row style={{ width: '100%' }}>
        <Col span={24} className={styles.cardTitle}>
          <span className={styles.title}>
            基本信息
            {isAdd ? (
              <>
                <Button type="primary" size="small" style={{ marginLeft: 10 }}>
                  读取身份证
                </Button>
                <Button type="primary" size="small" style={{ marginLeft: 8 }}>
                  读取社保卡
                </Button>
              </>
            ) : (
              <Button
                type="primary"
                size="small"
                style={{ marginLeft: 10 }}
                onClick={() => {
                  let changeData;
                  if (inhosData) {
                    changeData = inhosData.inHandle;
                    changeData['begntime'] = changeData.begntime && moment(changeData.begntime);
                  } else {
                    changeData = {};
                  }
                  setChangeInitialValues(changeData);
                  setAddData(inhosData ? inhosData.diseinfos : []);
                  setVisibleChange(true);
                }}
              >
                变更
              </Button>
            )}
          </span>
        </Col>
        <Col span={24}>
          <DescriptionsDetails
            descriptionsItem={addModalInfo.essentialInfo}
            descriptionsData={inhosData ? inhosData.inHandle : {}}
            // descriptionsData={{}}
            dictDataList={dictDataList}
          />
        </Col>
      </Row>
      <Row style={{ width: '100%' }}>
        <Col span={24} className={styles.cardTitle}>
          <span className={styles.title}>入院诊断信息</span>
        </Col>
        <SearchTable
          columns={addModalInfo.diagnosisInfo}
          dataSource={inhosData ? inhosData.diseinfos : []}
        />
      </Row>
    </>
  );
  const steps = [
    {
      title: '入院信息上传',
      content: <Row>{addContent}</Row>,
    },
    {
      title: '费用信息上传',
      content: (
        <Row style={{ width: '100%' }}>
          <Col span={24} className={styles.cardTitle}>
            <span className={styles.title}>费用明细信息</span>
          </Col>
          <SearchTable columns={detailInfo} dataSource={[...feeData, ...feeDetailData]} />
          <Button
            style={{ width: '100%', marginTop: 20 }}
            type="dashed"
            onClick={() => {
              setVisibleDetailAdd(true);
            }}
          >
            添加上传
          </Button>
        </Row>
      ),
    },
    {
      title: '出院办理',
      content: (
        <div style={{ height: 680, overflow: 'auto' }}>
          {/* <Button type="primary">导入</Button> */}
          <Row style={{ width: '100%' }}>
            <Col span={24} className={styles.cardTitle}>
              <span className={styles.title}>出院信息</span>
            </Col>
            <Col span={24}>
              <SearchForm
                form={formDischarge}
                initialValues={
                  outhosData && outhosData.outHandle
                    ? {
                        ...outhosData.outHandle,
                        die_date: outhosData.outHandle.die_date
                          ? moment(outhosData.outHandle.die_date)
                          : '',
                        birctrl_matn_date: outhosData.outHandle.birctrl_matn_date
                          ? moment(outhosData.outHandle.birctrl_matn_date)
                          : '',
                        endtime: outhosData.outHandle.endtime
                          ? moment(outhosData.outHandle.endtime)
                          : '',
                      }
                    : { ...addUploadFormData }
                }
                formList={costUploadInfo.step3.dischargeInfo}
                onSubmit={onSubmitFind}
                layout="vertical"
                span={6}
                formLayout={formLayout}
              />
            </Col>
          </Row>
          <Row style={{ width: '100%' }}>
            <Col span={24} className={styles.cardTitle}>
              <span className={styles.title}>诊断信息</span>
            </Col>
            <Col span={24} key={`${new Date()}_diagnosticInfo`}>
              <EditableTable
                columns={setAddColumn(addUploadData, setAddUploadData, true)}
                // columns={addColumnBug}
                editableTableData={addUploadData}
                setEditableTableData={setAddUploadData}
                scroll={{ y: 280 }}
              />
            </Col>
            {/* <SearchTable columns={costUploadInfo.step3.diagnosticInfo} dataSource={[{}]} /> */}
          </Row>
        </div>
      ),
    },
    {
      title: '出院结算',
      content: (
        <Row style={{ width: '100%' }}>
          <Col span={24} className={styles.cardTitle}>
            <span className={styles.title}>结算信息</span>
          </Col>
          <SearchForm
            form={formUpload}
            formList={costUploadInfo.step4}
            initialValues={setleData && setleData.data ? setleData.data : settleFormData}
            onSubmit={onSubmitFind}
          />
        </Row>
      ),
    },
  ];
  const revokeStepChange = (current) => {
    setRevokeCurrent(current);
  };

  //TODO 字典查询、下拉菜单初始化
  const dictListString = dictCode.join(',');
  useEffect(() => {
    handleDict(dictListString);
  }, []);
  useEffect(() => {
    changeInfo.formList.forEach((item) => {
      if (dictListString.indexOf(item.name) >= 0) {
        item.options = dictDataList[item.name];
      }
      if (item.name === 'med_type') {
        item.options = dictDataList['med_type_3'];
      }
      if (item.name === 'dscg_maindiag_name') {
        item.options = dictDataList['diag_code'];
        item.onChange = (values, option) => {
          const keys = dictDataList['diag_code'].filter((list) => list.dictItemValue === values);
          // const formValues = formChange.getFieldsValue();
          // setChangeInitialValues({
          //   ...formValues,
          //   dscg_maindiag_code: keys[0] ? keys[0].dictItemValue : '',
          // });
          formChange.setFieldsValue({
            dscg_maindiag_code: keys[0] ? keys[0].dictItemValue : '',
          });
        };
      }
      if (item.name === 'dise_name') {
        item.options = dictDataList['opsp_dise'];
        item.onChange = (values, option) => {
          const keys = dictDataList['opsp_dise'].filter((list) => list.dictItemValue === values);
          // const formValues = formChange.getFieldsValue();
          // setChangeInitialValues({
          //   ...formValues,
          //   dise_no: keys[0] ? keys[0].dictItemValue : '',
          // });
          formChange.setFieldsValue({
            dise_no: keys[0] ? keys[0].dictItemValue : '',
          });
        };
      }
      if (item.name === 'oprn_oprt_name') {
        item.options = dictDataList['oprn_oprt'];
        item.onChange = (values, option) => {
          const keys = dictDataList['oprn_oprt'].filter((list) => list.dictItemValue === values);
          // const formValues = formChange.getFieldsValue();
          // setChangeInitialValues({
          //   ...formValues,
          //   oprn_oprt_code: keys[0] ? keys[0].dictItemValue : '',
          // });
          formChange.setFieldsValue({
            oprn_oprt_code: keys[0] ? keys[0].dictItemValue : '',
          });
        };
      }
    });
    changeInfo.columns.forEach((item) => {
      if (dictListString.indexOf(item.key) >= 0) {
        item.options = dictDataList[item.key];
      }
    });
    costUploadInfo.step3.dischargeInfo.forEach((item) => {
      if (dictListString.indexOf(item.name) >= 0) {
        item.options = dictDataList[item.name];
      }
      if (item.name === 'dise_name') {
        item.options = dictDataList['opsp_dise'];
        item.onChange = (values, option) => {
          const keys = dictDataList['opsp_dise'].filter((list) => list.dictItemValue === values);
          // const formValues = formChange.getFieldsValue();
          // setChangeInitialValues({
          //   ...formValues,
          //   dise_no: keys[0] ? keys[0].dictItemValue : '',
          // });
          formDischarge.setFieldsValue({
            dise_no: keys[0] ? keys[0].dictItemValue : '',
          });
        };
      }
      if (item.name === 'dscg_maindiag_name') {
        item.options = dictDataList['diag_code'];
        item.onChange = (values, option) => {
          const keys = dictDataList['diag_code'].filter((list) => list.dictItemValue === values);
          formDischarge.setFieldsValue({
            dscg_maindiag_code: keys[0] ? keys[0].dictItemValue : '',
          });
        };
      }
      if (item.name === 'oprn_oprt_name') {
        item.options = dictDataList['oprn_oprt'];
        item.onChange = (values, option) => {
          const keys = dictDataList['oprn_oprt'].filter((list) => list.dictItemValue === values);
          formDischarge.setFieldsValue({
            oprn_oprt_code: keys[0] ? keys[0].dictItemValue : '',
          });
        };
      }
    });
    costUploadInfo.step4.forEach((item) => {
      if (dictListString.indexOf(item.name) >= 0) {
        item.options = dictDataList[item.name];
      }
    });
  }, []);

  useEffect(() => {
    fetchData({ sortPage: pagination });
  }, []);
  // useEffect(() => {
  //   setAddColumnBug(setAddColumn(addUploadData, setAddUploadData, true));
  // }, [addUploadData]);

  return (
    <PageContainer>
      <Card>
        <SearchForm
          form={formSearch}
          formList={searchFormList}
          btnList={btnList}
          initialValues={searchInitialValues}
          onSubmit={onSubmitFind}
          isChooseThead={true}
          columnsThead={Columns}
          onChooseTheadFinish={onChooseTheadFinish}
          isAdvancedSearch={true}
          advancedSearchList={advancedSearchList}
          onAdvancedSearchFinish={onAdvancedSearchFinish}
        />
        <SearchTable
          columns={columnsChangeTable.map((item) => {
            if (item.title === '医保信息') {
              item.children &&
                item.children.forEach((list) => {
                  if (list.key === 'insutype') {
                    list.render = (text) => {
                      const obj =
                        dictDataList['insutype'] &&
                        dictDataList['insutype'].filter((item) => item.dictItemValue == text);
                      return obj ? (obj[0] ? obj[0].dictItemName : '') : '';
                    };
                  }
                });
            }
            return item;
          })}
          // loading={loading}
          dataSource={tableData.data || []}
          pagination={{ ...pagination, showTotal: (total) => `共 ${total} 条记录` }}
          rowSelection={rowSelection}
          rowKey="id"
          onChange={tableOnChange}
        />
      </Card>
      <Modal
        title={'入院办理'}
        width={'80%'}
        maskClosable={false}
        centered={true}
        getContainer={false}
        visible={visibleAdd}
        destroyOnClose={true}
        onCancel={() => {
          setVisibleAdd(false);
        }}
        footer={
          <Row justify="center">
            <Col>
              <Button
                onClick={() => {
                  setVisibleAdd(false);
                }}
              >
                关闭
              </Button>
              <Button type="primary" onClick={() => {}}>
                确认办理并上传
              </Button>
            </Col>
          </Row>
        }
      >
        {addContent}
      </Modal>
      <Modal
        title={
          current === 0
            ? '医保登记'
            : current === 1
            ? '费用上传'
            : current === 2
            ? '出院办理'
            : '出院结算'
        }
        width={'80%'}
        maskClosable={false}
        centered={true}
        getContainer={false}
        visible={visibleUpload}
        destroyOnClose={true}
        onCancel={() => {
          setVisibleUpload(false);
        }}
        footer={null}
      >
        <Steps
          size="small"
          style={{ padding: '0 15%' }}
          current={current}
          onChange={(current) => {
            stepChange(current);
          }}
        >
          {steps.map((item) => (
            <Step disabled={true} key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className={styles.stepsContent}>{steps[current].content}</div>

        <div className={styles.stepsAction}>
          {current === 0 && (
            <Row justify="center" style={{ marginTop: 30 }}>
              <Button style={{ margin: '0 12px' }} onClick={() => setVisibleUpload(false)}>
                取消
              </Button>
              <Button type="primary" onClick={() => next()}>
                上传并下一步
              </Button>
            </Row>
          )}
          {current > 0 && current < 3 && (
            <Row justify="center" style={{ marginTop: 30 }}>
              <Button style={{ margin: '0 12px' }} onClick={() => prev()}>
                上一步
              </Button>
              <Button type="primary" onClick={() => next()}>
                上传并下一步
              </Button>
            </Row>
          )}
          {current === 3 && (
            <Row justify="center" style={{ marginTop: 30 }}>
              <Button style={{ margin: '0 12px' }} onClick={() => prev()}>
                上一步
              </Button>
              <Button type="primary" onClick={submitFormUpload}>
                结算预览
              </Button>
            </Row>
          )}
        </div>
      </Modal>
      <Modal
        title={'结算预览'}
        style={{ height: '90%' }}
        width={'80%'}
        maskClosable={false}
        centered={true}
        getContainer={false}
        visible={visiblePreview}
        onCancel={() => {
          setShowSetlinfoFlag(0);
          setVisiblePreview(false);
        }}
        footer={
          <Row justify="center">
            <Col>
              <Button
                onClick={() => {
                  setShowSetlinfoFlag(0);
                  setVisiblePreview(false);
                }}
              >
                关闭
              </Button>
              {showSetlinfoFlag == 0 ? (
                <Button type="primary" onClick={submitSettle}>
                  结算
                </Button>
              ) : (
                ''
              )}
              {showSetlinfoFlag == 0 ? (
                <Button
                  type="primary"
                  className={'black-btn'}
                  onClick={() => {
                    fetchDetail({ mdtrt_id: clickedId }, (res) => {
                      if (res && res.success) {
                        setVisibleDetailAudit(true);
                      }
                    });
                  }}
                >
                  明细审核分析
                </Button>
              ) : (
                ''
              )}
              {showSetlinfoFlag == 1 ? (
                <Button type="primary" className={'yellow-btn'}>
                  打印结算单
                </Button>
              ) : (
                ''
              )}
            </Col>
          </Row>
        }
      >
        <Row style={{ width: '100%' }}>
          <Col span={24} className={styles.cardTitle}>
            <span className={styles.title}>清单信息</span>
          </Col>

          <Col span={24}>
            <DescriptionsDetails
              descriptionsItem={previewInfo.inventoryInfo}
              descriptionsData={outSetleData.setlListing}
              dictDataList={dictDataList}
            />
          </Col>
          <Col span={24} className={styles.cardTitle}>
            <span className={styles.title}>基本信息</span>
          </Col>

          <Col span={24} className={styles.infoStyle}>
            <DescriptionsDetails
              descriptionsItem={previewInfo.essentialInfo}
              descriptionsData={outSetleData.setlListing}
              column={{ xxl: 5, xl: 5, lg: 5, md: 4, sm: 3, xs: 1 }}
              dictDataList={dictDataList}
            />
          </Col>
          <Col span={24} className={styles.cardTitle}>
            <span className={styles.title}>诊疗信息</span>
          </Col>

          <Col span={24}>
            <DescriptionsDetails
              descriptionsItem={previewInfo.treatmentInfo.step1}
              descriptionsData={outSetleData.setlListing}
              column={{ xxl: 5, xl: 5, lg: 5, md: 4, sm: 3, xs: 1 }}
              dictDataList={dictDataList}
            />
          </Col>
          <Col span={24} className={styles.tableCellBgcColor} style={{ padding: 6 }}>
            <Row>
              <Col style={{ textAlign: 'left', fontWeight: '700' }} span={6}>
                门（急）诊诊断-西医诊断：
                {outSetleData.setlListing ? outSetleData.setlListing.tp_wm_dise : ''}
              </Col>
              <Col style={{ textAlign: 'left', fontWeight: '700' }} span={6}>
                疾病代码：
                {outSetleData.setlListing ? outSetleData.setlListing.wm_dise_code : ''}
              </Col>
              <Col style={{ textAlign: 'left', fontWeight: '700' }} span={6}>
                门（急）诊诊断-中医诊断：
                {outSetleData.setlListing ? outSetleData.setlListing.otp_tcm_dise : ''}
              </Col>
              <Col style={{ textAlign: 'left', fontWeight: '700' }} span={6}>
                疾病代码：
                {outSetleData.setlListing ? `${outSetleData.setlListing.tcm_dise_code}` : ''}
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <SearchTable
              columns={previewInfo.treatmentInfo.step2}
              dataSource={outSetleData.patientDataSetlinfoOprninfo || []}
              summary={() => (
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={100}>
                    <p style={{ textAlign: 'left', margin: 0 }}>
                      诊断代码计数:
                      {outSetleData.setlListing ? outSetleData.setlListing.diag_code_cnt : ''}
                    </p>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              )}
            />
          </Col>
          <Col span={24}>
            <SearchTable
              columns={previewInfo.treatmentInfo.step3}
              dataSource={outSetleData.patientDataSetlinfoOprninfo}
              summary={() => (
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={100}>
                    <p style={{ textAlign: 'left', margin: 0 }}>
                      手术及操作代码计数:
                      {outSetleData.setlListing ? outSetleData.setlListing.oprn_oprt_code_cnt : ''}
                    </p>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              )}
            />
          </Col>
          <Col span={24} className={styles.tableCellBgcColor} style={{ padding: 6 }}>
            <Row>
              <Col style={{ textAlign: 'left', fontWeight: '700' }} span={8}>
                呼吸机使用时长：
                {outSetleData.setlListing ? outSetleData.setlListing.vent_used_dura : ''}
              </Col>
              <Col style={{ textAlign: 'left', fontWeight: '700' }} span={8}>
                颅脑损伤患者昏迷时间（入院前）：
                {outSetleData.setlListing ? outSetleData.setlListing.pwcry_bfadm_coma_dura : ''}
              </Col>
              <Col style={{ textAlign: 'left', fontWeight: '700' }} span={8}>
                颅脑损伤患者昏迷时间（入院后）：
                {outSetleData.setlListing ? outSetleData.setlListing.pwcry_afadm_coma_dura : ''}
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <SearchTable
              columns={previewInfo.treatmentInfo.step4}
              dataSource={outSetleData.patientDataSetlinfoIcuinfo}
            />
          </Col>
          <Col span={24}>
            <DescriptionsDetails
              descriptionsItem={previewInfo.treatmentInfo.step5}
              descriptionsData={outSetleData.setlListing}
              dictDataList={dictDataList}
            />
          </Col>
          <Col span={24} className={styles.tableCellBgcColor} style={{ padding: 6 }}>
            <Row>
              <Col style={{ textAlign: 'left', fontWeight: '700' }} span={12}>
                主诊医师姓名:
                {outSetleData.setlListing ? outSetleData.setlListing.chfpdr_name : ''}
              </Col>
              <Col style={{ textAlign: 'left', fontWeight: '700' }} span={12}>
                主诊医师代码
                {outSetleData.setlListing ? outSetleData.setlListing.chfpdr_code : ''}
              </Col>
            </Row>
          </Col>
          <Col span={24} className={styles.cardTitle}>
            <span className={styles.title}>医疗收费信息</span>
          </Col>
          <Col span={24} className={styles.tableCellBgcColor} style={{ padding: 6 }}>
            <Row>
              <Col style={{ textAlign: 'left', fontWeight: '700' }} span={6}>
                业务流水号：
                {outSetleData.setlListing ? outSetleData.setlListing.iz_sn : ''}
              </Col>
              <Col style={{ textAlign: 'left', fontWeight: '700' }} span={6}>
                票据代码：
                {outSetleData.setlListing ? outSetleData.setlListing.bill_code : ''}
              </Col>
              <Col style={{ textAlign: 'left', fontWeight: '700' }} span={6}>
                票据号码：
                {outSetleData.setlListing ? outSetleData.setlListing.bill_no : ''}
              </Col>
              <Col style={{ textAlign: 'left', fontWeight: '700' }} span={6}>
                结算期间：
                {outSetleData.setlListing
                  ? `${outSetleData.setlListing.setl_begn_date}-${outSetleData.setlListing.setl_end_date}`
                  : ''}
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <SearchTable
              columns={previewInfo.medicalChargeInfo.step1}
              dataSource={[outSetleData]}
            />
          </Col>
          <Col span={24}>
            <DescriptionsDetails
              descriptionsItem={previewInfo.medicalChargeInfo.step2}
              descriptionsData={outSetleData}
              dictDataList={dictDataList}
            />
          </Col>
          <Col span={24} className={styles.tableCellBgcColor}>
            <Row>
              <Col span={12}>
                <Row>
                  <Col span={24} className={styles.medicalChargeInfo}>
                    基金支付
                  </Col>
                  <Col span={12} className={styles.medicalChargeInfo}>
                    基金支付类型
                  </Col>
                  <Col span={12} className={styles.medicalChargeInfo}>
                    金额
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={24} className={styles.medicalChargeInfo}>
                    个人支付
                  </Col>
                  <Col span={12} className={styles.medicalChargeInfo}>
                    个人支付类型
                  </Col>
                  <Col span={12} className={styles.medicalChargeInfo}>
                    金额
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24} className={styles.descriptionsBox}>
            <Row style={{ height: '100%' }}>
              <Col span={12}>
                <DescriptionsDetails
                  descriptionsItem={previewInfo.medicalChargeInfo.step3.fundPay}
                  descriptionsData={outSetleData.setlInfo}
                  dictDataList={dictDataList}
                  column={1}
                />
              </Col>
              <Col span={12} style={{ height: '100%' }}>
                <DescriptionsDetails
                  descriptionsItem={previewInfo.medicalChargeInfo.step3.personPay}
                  descriptionsData={outSetleData.setlInfo}
                  dictDataList={dictDataList}
                  column={1}
                />
              </Col>
            </Row>
          </Col>
          <Col
            span={24}
            className={styles.tableCellBgcColor}
            style={{ padding: 5, paddingLeft: 8, border: '1px solid #f0f0f0' }}
          >
            医保支付方式：{detailData.setlInfo ? detailData.setlInfo.hi_paymtd : ''}
          </Col>
          <Col
            span={24}
            className={styles.tableCellBgcColor}
            style={{ padding: 3, paddingLeft: 8 }}
          >
            <Row>
              <Col style={{ textAlign: 'left', margin: 0 }} span={6}>
                医疗机构填报部门：{detailData.setlInfo ? detailData.setlInfo.medins_fill_dept : ''}
              </Col>
              <Col style={{ textAlign: 'left', margin: 0 }} span={6}>
                医疗机构填报人：{detailData.setlInfo ? detailData.setlInfo.medins_fill_psn : ''}
              </Col>
              <Col style={{ textAlign: 'left', margin: 0 }} span={6}>
                医保机构：{detailData.setlInfo ? detailData.setlInfo.hsorg : ''}
              </Col>
              <Col style={{ textAlign: 'left', margin: 0 }} span={6}>
                医保机构经办人：{detailData.setlInfo ? detailData.setlInfo.hsorg_opter : ''}
              </Col>
            </Row>
          </Col>
          <Col span={24} className={styles.cardTitle}>
            <span className={styles.title}>结算基金分项</span>
          </Col>
          <Col span={24}>
            <SearchTable columns={previewInfo.settlementFInfound} dataSource={[outSetleData]} />
          </Col>
        </Row>
      </Modal>

      <Modal
        title={'撤销'}
        width={'50%'}
        maskClosable={false}
        centered={true}
        getContainer={false}
        visible={visibleRevoke}
        onCancel={() => {
          setVisibleRevoke(false);
        }}
        footer={null}
      >
        <Row>
          <Col span={10} style={{ paddingRight: 50 }}>
            <Row>
              <Col span={24} className={styles.cardTitle}>
                <span className={styles.title}>人员信息</span>
              </Col>
              <Col span={24}>
                <DescriptionsDetails
                  descriptionsItem={revokeInfo.personnelInfo}
                  descriptionsData={findFlowData.inHandle}
                  column={1}
                  dictDataList={dictDataList}
                />
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <Row>
              <Col span={24} className={styles.cardTitle}>
                <span className={styles.title}>状态信息</span>
              </Col>
              <Col span={24}>
                <Steps
                  progressDot={true}
                  direction="vertical"
                  size="small"
                  current={revokeCurrent}
                  onChange={(current) => {
                    revokeStepChange(current);
                  }}
                >
                  {findFlowData.flowList &&
                    findFlowData.flowList.length > 0 &&
                    findFlowData.flowList.map((item) => {
                      return (
                        <Step
                          disabled={true}
                          title={item.step_name}
                          description={
                            <>
                              {item.list.map((list) => {
                                return (
                                  <p>
                                    {list.operator_time} [{list.operator_name}]
                                  </p>
                                );
                              })}
                              {item.cancel && (
                                <Button
                                  danger
                                  type="primary"
                                  onClick={() => {
                                    switch (item.step) {
                                      case 1:
                                        cancelInhosInHandle(
                                          findFlowData.inHandle.mdtrt_id,
                                          (res) => {
                                            if (res && res.success) {
                                              setVisibleRevoke(false);
                                              fetchData({ sortPage: pagination });
                                            }
                                          },
                                        );
                                        break;
                                      case 2:
                                        cancelFeeDetailByMdtrtId(
                                          findFlowData.inHandle.mdtrt_id,
                                          (res) => {
                                            if (res && res.success) {
                                              setVisibleRevoke(false);
                                              fetchData({ sortPage: pagination });
                                            }
                                          },
                                        );
                                        break;
                                      case 3:
                                        cancelInhosOutHandle(
                                          findFlowData.inHandle.mdtrt_id,
                                          (res) => {
                                            if (res && res.success) {
                                              setVisibleRevoke(false);
                                              fetchData({ sortPage: pagination });
                                            }
                                          },
                                        );
                                        break;
                                      case 4:
                                        cancelOutSetle(findFlowData.inHandle.mdtrt_id, (res) => {
                                          if (res && res.success) {
                                            setVisibleRevoke(false);
                                            fetchData({ sortPage: pagination });
                                          }
                                        });
                                        break;
                                    }
                                  }}
                                >
                                  撤销
                                </Button>
                              )}
                            </>
                          }
                        />
                      );
                    })}
                </Steps>

                <Row justify="center">
                  <Button
                    style={{ marginTop: 50 }}
                    size="large"
                    onClick={() => setVisibleRevoke(false)}
                  >
                    关闭
                  </Button>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
      <Modal
        title={isAdd ? '入院办理' : '入院信息变更'}
        width={'80%'}
        style={{ height: '89%' }}
        maskClosable={false}
        centered={true}
        getContainer={false}
        visible={visibleChange}
        destroyOnClose={true}
        onCancel={() => {
          // setChangeInitialValues({});
          // setAddData([]);
          setVisibleChange(false);
        }}
        footer={
          <Row justify="center">
            <Col>
              <Button
                onClick={() => {
                  setVisibleChange(false);
                }}
              >
                取消
              </Button>
              <Button type="primary" onClick={submitFormChange}>
                完成
              </Button>
            </Col>
          </Row>
        }
      >
        <Row style={{ width: '100%' }}>
          <Col span={24} className={styles.cardTitle}>
            <span className={styles.title}>
              基本信息
              <Button type="primary" size="small" style={{ marginLeft: 10 }}>
                读取身份证
              </Button>
              <Button type="primary" size="small" style={{ marginLeft: 8 }}>
                读取社保卡
              </Button>
            </span>
          </Col>
          <Col span={24} className={styles.changeForm}>
            <SearchForm
              form={formChange}
              formList={changeInfo.formList}
              initialValues={changeInitialValues}
              layout="vertical"
              span={6}
              formLayout={formLayout}
              onSubmit={onSubmitChange}
            />
          </Col>
          <Col span={24} className={styles.cardTitle}>
            <span className={styles.title}>诊断信息</span>
          </Col>
          <Col span={24} className={styles.changeEditableTable}>
            <EditableTable
              columns={setAddColumn(addData, setAddData)}
              editableTableData={addData}
              setEditableTableData={setAddData}
              scroll={{ y: 250 }}
            />
          </Col>
        </Row>
      </Modal>
      <Modal
        title={'费用明细撤销'}
        zIndex={1007}
        width={'80%'}
        centered={true}
        getContainer={false}
        maskClosable={false}
        visible={visibleDetailRevoke}
        onCancel={() => {
          setVisibleDetailRevoke(false);
        }}
        footer={
          <Row justify="center">
            <Button onClick={() => setVisibleDetailRevoke(false)}>取消</Button>
            <Button
              type="primary"
              onClick={() => {
                cancelFeeDetail(detailCheckData[0] && detailCheckData[0].feedetl_sn, (res) => {
                  if (res && res.success) {
                    setVisibleDetailRevoke(false);
                  }
                });
              }}
            >
              确认撤销
            </Button>
          </Row>
        }
      >
        <SearchTable dataSource={detailCheckData} columns={costUploadInfo.step2.contentRevoke} />
      </Modal>
      <Modal
        title={!isDetailCheck ? '添加费用明细' : '查看费用明细'}
        width={'80%'}
        zIndex={1006}
        maskClosable={false}
        centered={true}
        getContainer={false}
        visible={visibleDetailAdd}
        onCancel={() => {
          setVisibleDetailAdd(false);
        }}
        footer={
          <Row justify="center">
            {!isDetailCheck ? (
              <Col>
                <Button
                  onClick={() => {
                    setVisibleDetailAdd(false);
                    setIsDetailCheck(false);
                  }}
                >
                  取消
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    if (parseDataList.length === 0) {
                      message.error('请导入费用上传明细');
                    } else if (selectedRowKeysUpload.length === 0) {
                      message.warning('请选择要上传的数据');
                    } else {
                      saveFeeDetail(selectedRowKeysUploadData, (res) => {
                        if (res && res.success) {
                          setVisibleDetailAdd(false);
                        }
                      });
                    }
                  }}
                >
                  确认上传
                </Button>
              </Col>
            ) : (
              <Button
                onClick={() => {
                  setVisibleDetailAdd(false);
                  setIsDetailCheck(false);
                }}
              >
                关闭
              </Button>
            )}
          </Row>
        }
      >
        {!isDetailCheck ? (
          <Row style={{ marginBottom: 8 }}>
            <Col>
              <Upload
                showUploadList={false}
                onChange={(info) => {
                  if (info.file.status === 'done') {
                    parseData(info.file.originFileObj, (res) => {
                      if (res && res.success) {
                        const arr = [];
                        const arrData = [];
                        res.data.forEach((item) => {
                          arr.push(item.trade_no);
                          arrData.push(item);
                        });
                        setSelectedRowKeysUpload(arr);
                        setSelectedRowKeysUploadData(arrData);
                      }
                    });
                  }
                }}
              >
                <Button type="primary" icon={<UploadOutlined />}>
                  明细导入
                </Button>
              </Upload>
            </Col>
          </Row>
        ) : null}
        <SearchTable
          columns={
            !isDetailCheck
              ? costUploadInfo.step2.contentUpload
              : costUploadInfo.step2.contentCheck.map((item) => {
                  if (item.key === 'med_type') {
                    item.render = (text) => {
                      const obj = dictDataList['med_type_3'].filter(
                        (item) => item.dictItemValue == text,
                      );
                      return obj[0] ? obj[0].dictItemName : '';
                    };
                  }
                  return item;
                })
          }
          dataSource={!isDetailCheck ? parseDataList : detailCheckData}
          rowSelection={!isDetailCheck ? rowSelectionUpload : null}
          rowKey="trade_no"
        />
      </Modal>

      <Modal
        title={'明细审核详情'}
        width={'80%'}
        maskClosable={false}
        centered={true}
        getContainer={false}
        visible={visibleDetailAudit}
        onCancel={() => {
          setVisibleDetailAudit(false);
        }}
        footer={
          <Row justify="center">
            <Col>
              <Button
                onClick={() => {
                  setVisibleDetailAudit(false);
                }}
              >
                关闭
              </Button>
            </Col>
          </Row>
        }
      >
        <Tabs activeKey={auditActiveKey} onChange={auditTabsChange}>
          <TabPane tab="分析信息" key="1">
            <Row>
              <Col span={24} className={styles.cardTitle}>
                <span className={styles.title}>分析信息</span>
              </Col>
              <Col span={24}>
                <DescriptionsDetails
                  descriptionsItem={auditDetails.analysisInfo.info}
                  descriptionsData={detailData.anylinfo}
                  column={{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 1, xs: 1 }}
                  dictDataList={dictDataList}
                />
              </Col>
              <Col span={24} className={styles.cardTitle}>
                <span className={styles.title}>违规信息</span>
              </Col>
              <Col span={24}>
                <SearchTable
                  columns={auditDetails.analysisInfo.violationInfo}
                  dataSource={detailData.judgeinfo}
                />
              </Col>
              <Col span={24} className={styles.cardTitle}>
                <span className={styles.title}>违规信息明细</span>
              </Col>
              <Col span={24}>
                <SearchTable
                  columns={auditDetails.analysisInfo.violationDetail}
                  dataSource={detailData.judgedetls}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="就诊信息" key="2">
            <DescriptionsDetails
              descriptionsItem={auditDetails.visitInfo}
              descriptionsData={detailData.mdtrtinfo}
              column={{ xxl: 5, xl: 5, lg: 5, md: 4, sm: 3, xs: 1 }}
              dictDataList={dictDataList}
            />
          </TabPane>
          <TabPane tab="诊断信息" key="3">
            <SearchTable columns={auditDetails.diagnosticInfo} dataSource={detailData.diseinfos} />
          </TabPane>
          <TabPane tab="费用明细" key="4">
            <SearchTable columns={auditDetails.expenseDetails} dataSource={detailData.feedetls} />
          </TabPane>
        </Tabs>
      </Modal>
      <Modal
        title={'费用明细详情'}
        width={'80%'}
        zIndex={1004}
        maskClosable={false}
        centered={true}
        getContainer={false}
        visible={visibleDetailCost}
        onCancel={() => {
          setVisibleDetailCost(false);
        }}
        footer={
          <Row justify="center">
            <Col>
              <Button
                onClick={() => {
                  setVisibleDetailCost(false);
                  setIsHomePage(false);
                }}
              >
                关闭
              </Button>
            </Col>
          </Row>
        }
      >
        <SearchTable columns={detailInfo} dataSource={[...feeData]} />
      </Modal>
    </PageContainer>
  );
});

export default HospitalizationSettlement;
