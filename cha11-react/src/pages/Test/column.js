import { Row, Col } from 'antd';
import styles from './index.less';

export const searchFormList = [
  {
    label: '',
    type: 'input',
    name: 'keyWords',
  },
];
export const dictCode = [
  'mdtrt_cert_type',
  'insutype',
  'med_type_3',
  'matn_type',
  'birctrl_type',
  'psn_setlway',
  'diag_type',
  'maindiag_flag',
  'latechb_flag',
  'pret_flag',
  'cop_flag',
  'dscg_way',
  'opsp_dise',
  'diag_code',
  'oprn_oprt',
  'mid_setl_flag',
];
///
export const advancedSearchList = [
  {
    label: '关键词',
    type: 'input',
    name: 'keyWords',
  },
  {
    label: '人员编号',
    type: 'input',
    name: 'psn_no',
  },
];
export const columns = [
  {
    title: '基本信息',
    children: [
      {
        title: '序号',
        key: 'index',
        dataIndex: 'index',
        align: 'center',
        render: (text, record, index) => {
          return index < 9 ? `0${index + 1}` : index + 1;
        },
      },
      {
        title: '人员姓名',
        key: 'psn_name',
        dataIndex: 'psn_name',
        align: 'center',
      },
      {
        title: '联系电话',
        key: 'tel',
        dataIndex: 'tel',
        align: 'center',
      },
      {
        title: '住院号',
        key: 'ipt_no',
        dataIndex: 'ipt_no',
        align: 'center',
      },
      {
        title: '医师姓名',
        key: 'chfpdr_name',
        dataIndex: 'chfpdr_name',
        align: 'center',
      },
      {
        title: '科室名称',
        key: 'adm_dept_name',
        dataIndex: 'adm_dept_name',
        align: 'center',
      },
      {
        title: '床号',
        key: 'adm_bed',
        dataIndex: 'adm_bed',
        align: 'center',
      },
      {
        title: '入院时间',
        key: 'begntime',
        dataIndex: 'begntime',
        align: 'center',
      },
    ],
  },
  {
    title: '医保信息',
    children: [
      {
        title: '人员编号',
        key: 'psn_no',
        dataIndex: 'psn_no',
        align: 'center',
      },
      {
        title: '险种类型',
        key: 'insutype',
        dataIndex: 'insutype',
        align: 'center',
      },
      {
        title: '上传时间',
        key: 'in_upload_time',
        dataIndex: 'in_upload_time',
        align: 'center',
      },
      {
        title: '入院登记状态',
        key: 'inhos_status',
        dataIndex: 'inhos_status',
        align: 'center',
        render: (text, record) => {
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
              dom = <div className={styles.statusSuccess}>上传成功</div>;
              break;
            case 4:
              dom = <div className={styles.statusError}>撤销失败</div>;
              break;
            case 5:
              dom = <div className={styles.statusWarning}>撤销成功</div>;
              break;
          }
          return dom;
        },
      },
    ],
  },
  {
    title: '费用信息',
    children: [
      // {
      //   title: '医疗费总额（元）',
      //   key: 'det_item_fee_sumamt',
      //   dataIndex: 'det_item_fee_sumamt',
      //   align: 'center',
      // },
      {
        title: '支付方式',
        key: 'pay_method',
        dataIndex: 'pay_method',
        align: 'center',
        render: (text, record) => {
          const status = Number(text);
          let dom;
          switch (status) {
            case 1:
              dom = <div>现金</div>;
              break;
            case 2:
              dom = <div>支付宝</div>;
              break;
            case 3:
              dom = <div>微信</div>;
              break;
            case 4:
              dom = <div>银行卡</div>;
              break;
          }
          return dom;
        },
      },
      // {
      //   title: '上传时间',
      //   key: 'fee_upload_time',
      //   dataIndex: 'fee_upload_time',
      //   align: 'center',
      // },
      {
        title: '费用上传状态',
        key: 'fee_status',
        dataIndex: 'fee_status',
        align: 'center',
      },
    ],
  },
  {
    title: '出院信息',
    children: [
      {
        title: '出院科室名称',
        key: 'dscg_dept_name',
        dataIndex: 'dscg_dept_name',
        align: 'center',
      },
      {
        title: '出院床位号',
        key: 'dscg_bed',
        dataIndex: 'dscg_bed',
        align: 'center',
      },
      {
        title: '出院时间',
        key: 'endtime',
        dataIndex: 'endtime',
        align: 'center',
      },
      {
        title: '出院登记状态',
        key: 'out_status',
        dataIndex: 'out_status',
        align: 'center',
        render: (text, record) => {
          const status = Number(text);
          let dom;
          switch (status) {
            case 1:
              dom = <div className={styles.statusWarning}>未登记</div>;
              break;
            case 2:
              dom = <div className={styles.statusError}>登记失败</div>;
              break;
            case 3:
              dom = <div className={styles.statusSuccess}>已登记</div>;
              break;
            case 4:
              dom = <div className={styles.statusError}>撤销失败</div>;
              break;
            case 5:
              dom = <div className={styles.statusWarning}>撤销成功</div>;
              break;
          }
          return dom;
        },
      },
    ],
  },
  {
    title: '结算信息',
    children: [
      {
        title: '医疗费总额（元）',
        key: 'medfee_sumamt',
        dataIndex: 'medfee_sumamt',
        align: 'center',
      },
      {
        title: '基金支付总额（元）',
        key: 'fund_pay_sumamt',
        dataIndex: 'fund_pay_sumamt',
        align: 'center',
      },
      {
        title: '个人负担总金额（元）',
        key: 'psn_part_amt',
        dataIndex: 'psn_part_amt',
        align: 'center',
      },
      {
        title: '结算时间',
        key: 'setl_time',
        dataIndex: 'setl_time',
        align: 'center',
      },
      {
        title: '结算人',
        key: 'setl_operator_name',
        dataIndex: 'setl_operator_name',
        align: 'center',
      },
      {
        title: '结算状态',
        key: 'settle_status',
        dataIndex: 'settle_status',
        align: 'center',
        render: (text, record) => {
          const status = Number(text);
          let dom;
          switch (status) {
            case 1:
              dom = <div className={styles.statusWarning}>未结算</div>;
              break;
            case 2:
              dom = <div className={styles.statusError}>结算失败</div>;
              break;
            case 3:
              dom = <div className={styles.statusSuccess}>已结算</div>;
              break;
            case 4:
              dom = <div className={styles.statusError}>撤销失败</div>;
              break;
            case 5:
              dom = <div className={styles.statusWarning}>撤销成功</div>;
              break;
          }
          return dom;
        },
      },
    ],
  },
  {
    title: '清算信息',
    children: [
      {
        title: '清算时间',
        key: 'clear_time',
        dataIndex: 'clear_time',
        align: 'center',
      },
      {
        title: '清算人',
        key: 'clear_user',
        dataIndex: 'clear_user',
        align: 'center',
      },
      {
        title: '清算状态',
        key: 'clear_satus',
        dataIndex: 'clear_satus',
        align: 'center',
        render: (text, record) => {
          const status = Number(text);
          let dom;
          switch (status) {
            case 0:
              dom = <div className={styles.statusWarning}>未清算</div>;
              break;
            case 1:
              dom = <div className={styles.statusError}>已完成</div>;
              break;
          }
          return dom;
        },
      },
    ],
  },
];
export const addModalInfo = {
  essentialInfo: [
    {
      label: '人员编号',
      name: 'psn_no',
    },
    {
      label: '人员姓名',
      name: 'psn_name',
    },
    {
      label: '联系人姓名',
      name: 'coner_name',
    },
    {
      label: '联系电话',
      name: 'tel',
    },
    {
      label: '就诊ID',
      name: 'mdtrt_id',
    },
    {
      label: '就诊凭证类型',
      name: 'mdtrt_cert_type',
    },
    {
      label: '就诊凭证编号',
      name: 'mdtrt_cert_no',
    },
    {
      label: '电子凭证令牌',
      name: 'ec_token',
    },
    {
      label: '医疗类别',
      name: 'med_type',
      render: (data, dictData) => {
        return dictData['med_type_3'] &&
          dictData['med_type_3'].filter((item) => item.dictItemValue === data)[0]
          ? dictData['med_type_3'].filter((item) => item.dictItemValue === data)[0].dictItemName
          : data;
      },
    },
    {
      label: '险种类型',
      name: 'insutype',
    },
    {
      label: '住院号',
      name: 'ipt_no',
    },
    {
      label: '主治医生编码',
      name: 'atddr_no',
    },
    {
      label: '主诊医师姓名',
      name: 'chfpdr_name',
    },
    {
      label: '入院科室编码',
      name: 'adm_dept_codg',
    },
    {
      label: '入院科室名称',
      name: 'adm_dept_name',
    },
    {
      label: '主要病情描述',
      name: 'main_cond_dscr',
      span: 3,
    },
    {
      label: '入院诊断描述',
      name: 'adm_diag_dscr',
      span: 2,
    },
    {
      label: '入院床位',
      name: 'adm_bed',
    },
    {
      label: '住院主诊断代码',
      name: 'dscg_maindiag_code',
    },
    {
      label: '住院主诊断名称',
      name: 'dscg_maindiag_name',
    },
    {
      label: '病种编号',
      name: 'dise_no',
    },
    {
      label: '病种名称',
      name: 'dise_name',
    },
    {
      label: '手术操作代码',
      name: 'oprn_oprt_code',
    },
    {
      label: '手术操作名称',
      name: 'oprn_oprt_name',
    },
    {
      label: '计划生育服务证号',
      name: 'fpsc_no',
    },
    {
      label: '生育类别',
      name: 'matn_type',
    },
    {
      label: '计划生育手术类别',
      name: 'birctrl_type',
    },
    {
      label: '晚育标志',
      name: 'latechb_flag',
      render: (data, dictData) => {
        return dictData['latechb_flag'] &&
          dictData['latechb_flag'].filter((item) => item.dictItemValue === data)[0]
          ? dictData['latechb_flag'].filter((item) => item.dictItemValue === data)[0].dictItemName
          : data;
      },
    },
    {
      label: '孕周数',
      name: 'geso_val',
    },
    {
      label: '胎次',
      name: 'fetts',
    },
    {
      label: '胎儿数',
      name: 'fetus_cnt',
    },
    {
      label: '早产标志',
      name: 'pret_flag',
      render: (data, dictData) => {
        return dictData['pret_flag'] &&
          dictData['pret_flag'].filter((item) => item.dictItemValue === data)[0]
          ? dictData['pret_flag'].filter((item) => item.dictItemValue === data)[0].dictItemName
          : data;
      },
    },
    {
      label: '计划生育手术或生育日期',
      name: 'birctrl_matn_date',
    },
    {
      label: '入院时间',
      name: 'begntime',
    },
    {
      label: '病历号',
      name: 'medrcdno',
    },
  ],
  diagnosisInfo: [
    {
      title: '诊断排序号',
      key: 'index',
      dataIndex: 'index',
      align: 'center',
      render: (text, record, index) => {
        return index < 9 ? `0${index + 1}` : index + 1;
      },
    },
    {
      title: '人员编号',
      key: 'psn_no',
      dataIndex: 'psn_no',
      align: 'center',
    },
    {
      title: '诊断类别',
      key: 'diag_type',
      dataIndex: 'diag_type',
      align: 'center',
    },
    {
      title: '主诊断标志',
      key: 'maindiag_flag',
      dataIndex: 'maindiag_flag',
      align: 'center',
    },
    {
      title: '诊断代码',
      key: 'diag_code',
      dataIndex: 'diag_code',
      align: 'center',
    },
    {
      title: '诊断名称',
      key: 'diag_name',
      dataIndex: 'diag_name',
      align: 'center',
    },
    {
      title: '入院病情',
      key: 'adm_cond',
      dataIndex: 'adm_cond',
      align: 'center',
    },
    {
      title: '诊断科室',
      key: 'diag_dept',
      dataIndex: 'diag_dept',
      align: 'center',
    },
    {
      title: '诊断医生编码',
      key: 'dise_dor_no',
      dataIndex: 'dise_dor_no',
      align: 'center',
    },
    {
      title: '诊断医生姓名',
      key: 'dise_dor_name',
      dataIndex: 'dise_dor_name',
      align: 'center',
    },
    {
      title: '诊断时间',
      key: 'diag_time',
      dataIndex: 'diag_time',
      align: 'center',
    },
  ],
};
export const costUploadInfo = {
  step2: {
    content: [
      {
        title: '序号',
        key: 'aa',
        dataIndex: 'aa',
        align: 'center',
        render: (text, record, index) => {
          return index < 9 ? `0${index + 1}` : index + 1;
        },
      },
      {
        title: '上传时间',
        key: 'create_time',
        dataIndex: 'create_time',
        align: 'center',
      },
      {
        title: '项目费用总额（元）',
        key: 'det_item_fee_sumamt',
        dataIndex: 'det_item_fee_sumamt',
        align: 'center',
      },
      {
        title: '定价上限金额（元）',
        key: 'pric_uplmt_amt',
        dataIndex: 'pric_uplmt_amt',
        align: 'center',
      },
      {
        title: '自付比例（%）',
        key: 'selfpay_prop',
        dataIndex: 'selfpay_prop',
        align: 'center',
      },
      {
        title: '全自费金额（元）',
        key: 'fulamt_ownpay_amt',
        dataIndex: 'fulamt_ownpay_amt',
        align: 'center',
      },
      {
        title: '先行自付金额（元）',
        key: 'preselfpay_amt',
        dataIndex: 'preselfpay_amt',
        align: 'center',
      },
      {
        title: '超限价金额（元）',
        key: 'overlmt_amt',
        dataIndex: 'overlmt_amt',
        align: 'center',
      },
      {
        title: '状态',
        key: 'fee_status',
        dataIndex: 'fee_status',
        align: 'center',
        render: (text, record) => {
          return (
            <div>
              {text == 5 ? (
                <p className={styles.statusError}>已撤销</p>
              ) : text == 1 ? (
                <p className={styles.statusWarning}>待完成</p>
              ) : (
                <p className={styles.statusSuccess}>已完成</p>
              )}
            </div>
          );
        },
      },
    ],
    contentCheck: [
      {
        title: () => {
          return <div style={{ textAlign: 'left' }}>输入</div>;
        },
        children: [
          {
            title: '序号',
            key: 'aa',
            dataIndex: 'aa',
            align: 'center',
            render: (text, record, index) => {
              return index < 9 ? `0${index + 1}` : index + 1;
            },
          },
          {
            title: '费用明细流水号',
            key: 'feedetl_sn',
            dataIndex: 'feedetl_sn',
            align: 'center',
          },
          {
            title: '原费用流水号',
            key: 'init_feedetl_sn',
            dataIndex: 'init_feedetl_sn',
            align: 'center',
          },
          {
            title: '就诊 ID',
            key: 'mdtrt_id',
            dataIndex: 'mdtrt_id',
            align: 'center',
          },
          {
            title: '人员编号',
            key: 'psn_no',
            dataIndex: 'psn_no',
            align: 'center',
          },
          {
            title: '医疗类别',
            key: 'med_type',
            dataIndex: 'med_type',
            align: 'center',
          },
          {
            title: '费用发生时间',
            key: 'fee_ocur_time',
            dataIndex: 'fee_ocur_time',
            align: 'center',
          },
          {
            title: '医疗目录编码',
            key: 'med_list_codg',
            dataIndex: 'med_list_codg',
            align: 'center',
          },
          {
            title: '医药机构目录编码',
            key: 'medins_list_codg',
            dataIndex: 'medins_list_codg',
            align: 'center',
          },
          {
            title: '明细项目费用总额',
            key: 'det_item_fee_sumamt',
            dataIndex: 'det_item_fee_sumamt',
            align: 'center',
          },
          {
            title: '数量',
            key: 'cnt',
            dataIndex: 'cnt',
            align: 'center',
          },
          {
            title: '单价',
            key: 'pric',
            dataIndex: 'pric',
            align: 'center',
          },
          {
            title: '医嘱号',
            key: 'drord_no',
            dataIndex: 'drord_no',
            align: 'center',
          },
          {
            title: '开单科室编码',
            key: 'bilg_dept_codg',
            dataIndex: 'bilg_dept_codg',
            align: 'center',
          },
          {
            title: '开单科室名称',
            key: 'bilg_dept_name',
            dataIndex: 'bilg_dept_name',
            align: 'center',
          },
          {
            title: '开单医生编码',
            key: 'bilg_dr_codg',
            dataIndex: 'bilg_dr_codg',
            align: 'center',
          },
          {
            title: '开单医师姓名',
            key: 'bilg_dr_name',
            dataIndex: 'bilg_dr_name',
            align: 'center',
          },
          {
            title: '受单科室编码',
            key: 'acord_dept_codg',
            dataIndex: 'acord_dept_codg',
            align: 'center',
          },
          {
            title: '受单科室名称',
            key: 'acord_dept_name',
            dataIndex: 'acord_dept_name',
            align: 'center',
          },
          {
            title: '受单医生编码',
            key: 'orders_dr_code',
            dataIndex: 'orders_dr_code',
            align: 'center',
          },
          {
            title: '受单医生姓名',
            key: 'orders_dr_name',
            dataIndex: 'orders_dr_name',
            align: 'center',
          },
          {
            title: '医院审批标志',
            key: 'hosp_appr_flag',
            dataIndex: 'hosp_appr_flag',
            align: 'center',
          },
          {
            title: '中药使用方式',
            key: 'tcmdrug_used_way',
            dataIndex: 'tcmdrug_used_way',
            align: 'center',
          },
          {
            title: '外检标志',
            key: 'etip_flag',
            dataIndex: 'etip_flag',
            align: 'center',
          },
          {
            title: '外检医院编码',
            key: 'etip_hosp_code',
            dataIndex: 'etip_hosp_code',
            align: 'center',
          },
          {
            title: '出院带药标志',
            key: 'dscg_tkdrug_flag',
            dataIndex: 'dscg_tkdrug_flag',
            align: 'center',
          },
          {
            title: '生育费用标志',
            key: 'matn_fee_flag',
            dataIndex: 'matn_fee_flag',
            align: 'center',
          },
          {
            title: '备注',
            key: 'memo',
            dataIndex: 'memo',
            align: 'center',
          },
        ],
      },
      {
        title: () => {
          return <div style={{ textAlign: 'left' }}>输出</div>;
        },
        children: [
          {
            title: '费用明细流水号',
            key: 'feedetl_sn',
            dataIndex: 'feedetl_sn',
            align: 'center',
          },
          {
            title: '明细项目费用总额',
            key: 'det_item_fee_sumamt',
            dataIndex: 'det_item_fee_sumamt',
            align: 'center',
          },
          {
            title: '数量',
            key: 'cnt',
            dataIndex: 'cnt',
            align: 'center',
          },
          {
            title: '单价',
            key: 'pric',
            dataIndex: 'pric',
            align: 'center',
          },
          {
            title: '定价上限金额',
            key: 'pric_uplmt_amt',
            dataIndex: 'pric_uplmt_amt',
            align: 'center',
          },
          {
            title: '自付比例',
            key: 'selfpay_prop',
            dataIndex: 'selfpay_prop',
            align: 'center',
          },
          {
            title: '全自费金额',
            key: 'fulamt_ownpay_amt',
            dataIndex: 'fulamt_ownpay_amt',
            align: 'center',
          },
          {
            title: '超限价金额',
            key: 'overlmt_amt',
            dataIndex: 'overlmt_amt',
            align: 'center',
          },
          {
            title: '先行自付金额',
            key: 'preselfpay_amt',
            dataIndex: 'preselfpay_amt',
            align: 'center',
          },
          {
            title: '符合政策范围金额',
            key: 'inscp_scp_amt',
            dataIndex: 'inscp_scp_amt',
            align: 'center',
          },
          {
            title: '收费项目等级',
            key: 'chrgitm_lv',
            dataIndex: 'chrgitm_lv',
            align: 'center',
          },
          {
            title: '医疗收费项目类别',
            key: 'med_chrgitm_type',
            dataIndex: 'med_chrgitm_type',
            align: 'center',
          },
          {
            title: '基本药物标志',
            key: 'bas_medn_flag',
            dataIndex: 'bas_medn_flag',
            align: 'center',
          },
          {
            title: '医保谈判药品标志',
            key: 'hi_nego_drug_flag',
            dataIndex: 'hi_nego_drug_flag',
            align: 'center',
          },
          {
            title: '儿童用药标志',
            key: 'chld_medc_flag',
            dataIndex: 'chld_medc_flag',
            align: 'center',
          },
          {
            title: '目录特项标志',
            key: 'list_sp_item_flag',
            dataIndex: 'list_sp_item_flag',
            align: 'center',
          },
          {
            title: '限制使用标志',
            key: 'aa',
            dataIndex: 'aa',
            align: 'center',
          },
          {
            title: '直报标志',
            key: 'drt_reim_flag',
            dataIndex: 'drt_reim_flag',
            align: 'center',
          },
          {
            title: '备注',
            key: 'memo',
            dataIndex: 'memo',
            align: 'center',
          },
        ],
      },
    ],
    contentRevoke: [
      {
        title: '人员编号',
        key: 'psn_no',
        dataIndex: 'psn_no',
        align: 'center',
      },
      {
        title: '就诊ID',
        key: 'mdtrt_id',
        dataIndex: 'mdtrt_id',
        align: 'center',
      },
      {
        title: '费用明细流水号',
        key: 'feedetl_sn',
        dataIndex: 'feedetl_sn',
        align: 'center',
      },
      {
        title: '人员姓名',
        key: 'psn_name',
        dataIndex: 'psn_name',
        align: 'center',
      },
    ],
    contentUpload: [
      {
        title: '序号',
        key: 'index',
        dataIndex: 'index',
        align: 'center',
        render: (text, record, index) => {
          return index < 9 ? `0${index + 1}` : index + 1;
        },
      },
      {
        title: '费用明细流水号',
        key: 'feedetl_sn',
        dataIndex: 'feedetl_sn',
        align: 'center',
      },
      {
        title: '就诊ID',
        key: 'mdtrt_id',
        dataIndex: 'mdtrt_id',
        align: 'center',
      },
      {
        title: '收费批次号',
        key: 'chrg_bchno',
        dataIndex: 'chrg_bchno',
        align: 'center',
      },
      {
        title: '费用发生时间',
        key: 'fee_ocur_time',
        dataIndex: 'fee_ocur_time',
        align: 'center',
      },
      {
        title: '医疗目录编码',
        key: 'med_list_codg',
        dataIndex: 'med_list_codg',
        align: 'center',
      },
      {
        title: '医药机构目录编码',
        key: 'medins_list_codg',
        dataIndex: 'medins_list_codg',
        align: 'center',
      },
      {
        title: '明细项目费用总额',
        key: 'det_item_fee_sumamt',
        dataIndex: 'det_item_fee_sumamt',
        align: 'center',
      },
      {
        title: '数量',
        key: 'cnt',
        dataIndex: 'cnt',
        align: 'center',
      },
      {
        title: ' 单价',
        key: 'pric',
        dataIndex: 'pric',
        align: 'center',
      },
      {
        title: '开单科室编码',
        key: 'bilg_dept_codg',
        dataIndex: 'bilg_dept_codg',
        align: 'center',
      },
      {
        title: '开单科室名称',
        key: 'bilg_dept_name',
        dataIndex: 'bilg_dept_name',
        align: 'center',
      },
      {
        title: '开单医生编码',
        key: 'bilg_dr_codg',
        dataIndex: 'bilg_dr_codg',
        align: 'center',
      },
      {
        title: '开单医师姓名',
        key: 'bilg_dr_name',
        dataIndex: 'bilg_dr_name',
        align: 'center',
      },
      {
        title: '医院审批标志',
        key: 'aa',
        dataIndex: 'aa',
        align: 'center',
      },
      {
        title: '病种编号',
        key: 'dise_no',
        dataIndex: 'dise_no',
        align: 'center',
      },
      {
        title: '处方号',
        key: 'rxno',
        dataIndex: 'rxno',
        align: 'center',
      },
      {
        title: '单次剂量描述',
        key: 'sin_dos_dscr',
        dataIndex: 'sin_dos_dscr',
        align: 'center',
      },
      {
        title: '使用频次描述',
        key: 'used_frqu_dscr',
        dataIndex: 'used_frqu_dscr',
        align: 'center',
      },
      {
        title: '周期天数',
        key: 'prd_days',
        dataIndex: 'prd_days',
        align: 'center',
      },
      {
        title: '用药途径描述',
        key: 'medc_way_dscr',
        dataIndex: 'medc_way_dscr',
        align: 'center',
      },
      {
        title: '受单科室编码',
        key: 'acord_dept_codg',
        dataIndex: 'acord_dept_codg',
        align: 'center',
      },
      {
        title: '受单科室名称',
        key: 'acord_dept_name',
        dataIndex: 'acord_dept_name',
        align: 'center',
      },
      {
        title: '受单医生编码',
        key: 'orders_dr_code',
        dataIndex: 'orders_dr_code',
        align: 'center',
      },
      {
        title: '受单医生姓名',
        key: 'orders_dr_name',
        dataIndex: 'orders_dr_name',
        align: 'center',
      },
      {
        title: '中药使用方式',
        key: 'tcmdrug_used_way',
        dataIndex: 'tcmdrug_used_way',
        align: 'center',
      },
      {
        title: '外检标志',
        key: 'etip_flag',
        dataIndex: 'etip_flag',
        align: 'center',
      },
      {
        title: '外检医院编码',
        key: 'etip_hosp_code',
        dataIndex: 'etip_hosp_code',
        align: 'center',
      },
      {
        title: '出院带药标志',
        key: 'dscg_tkdrug_flag',
        dataIndex: 'dscg_tkdrug_flag',
        align: 'center',
      },
      {
        title: '生育费用标志',
        key: 'matn_fee_flag',
        dataIndex: 'matn_fee_flag',
        align: 'center',
      },
    ],
  },
  step3: {
    dischargeInfo: [
      {
        label: '人员编号',
        type: 'input',
        name: 'psn_no',
        required: true,
      },
      {
        label: '就诊ID',
        type: 'input',
        name: 'mdtrt_id',
        required: true,
      },
      {
        label: '人员姓名',
        type: 'input',
        name: 'psn_name',
        required: true,
      },
      {
        label: '险种类型',
        type: 'select',
        name: 'insutype',
        required: true,
        key: 'dictItemValue',
        value: 'dictItemName',
      },
      {
        label: '结束时间',
        type: 'datePicker',
        name: 'endtime',
        showTime: true,
      },
      {
        label: '病种名称',
        type: 'select',
        name: 'dise_name',
        key: 'dictItemValue',
        value: 'dictItemName',
      },
      {
        label: '病种编号',
        type: 'input',
        name: 'dise_no',
      },
      {
        label: '手术操作名称',
        type: 'select',
        name: 'oprn_oprt_name',
        key: 'dictItemValue',
        value: 'dictItemName',
      },
      {
        label: '手术操作代码',
        type: 'input',
        name: 'oprn_oprt_code',
      },
      {
        label: '计划生育服务证号',
        type: 'input',
        name: 'fpsc_no',
      },
      {
        label: '生育类别',
        type: 'select',
        name: 'matn_type',
        key: 'dictItemValue',
        value: 'dictItemName',
      },
      {
        label: '计划生育手术类别',
        type: 'select',
        name: 'birctrl_type',
        key: 'dictItemValue',
        value: 'dictItemName',
      },
      {
        label: '晚育标志',
        type: 'select',
        name: 'latechb_flag',
        key: 'dictItemValue',
        value: 'dictItemName',
      },
      {
        label: '孕周数',
        type: 'input',
        name: 'geso_val',
      },
      {
        label: '胎次',
        type: 'input',
        name: 'fetts',
      },
      {
        label: '胎儿数',
        type: 'input',
        name: 'fetus_cnt',
      },
      {
        label: '早产标志',
        type: 'select',
        name: 'pret_flag',
        key: 'dictItemValue',
        value: 'dictItemName',
      },
      {
        label: '计划生育手术或生育日期',
        type: 'datePicker',
        name: 'birctrl_matn_date',
      },
      {
        label: '伴有并发症标志',
        type: 'select',
        name: 'cop_flag',
        key: 'dictItemValue',
        value: 'dictItemName',
      },
      {
        label: '出院科室名称',
        type: 'input',
        name: 'dscg_dept_name',
        required: true,
      },
      {
        label: '出院科室编码',
        type: 'input',
        name: 'dscg_dept_codg',
        required: true,
      },
      {
        label: '出院床位',
        type: 'input',
        name: 'dscg_bed',
      },
      {
        label: '离院方式',
        type: 'select',
        name: 'dscg_way',
        required: true,
        key: 'dictItemValue',
        value: 'dictItemName',
      },
      {
        label: '死亡日期',
        type: 'datePicker',
        name: 'die_date',
      },
      {
        label: '出院状态',
        type: 'input',
        name: 'out_status',
        //1：待上传，2：上传失败，3：上传成功，4：撤销失败，5：撤销成功
        // render: (data) => {
        //   if (data === 1) {
        //     return <span className={styles.statusPrimary}>q</span>;
        //   } else {
        //     return <span className={styles.statusError}>q</span>;
        //   }
        // },
      },
    ],
    diagnosticInfo: [
      {
        title: '诊断排序号',
        key: 'diag_srt_no',
        dataIndex: 'diag_srt_no',
        align: 'center',
        render: (text, record, index) => {
          return index < 9 ? `0${index + 1}` : index + 1;
        },
      },
      {
        title: '就诊ID',
        key: 'mdtrt_id',
        dataIndex: 'mdtrt_id',
        align: 'center',
      },
      {
        title: '人员编号',
        key: 'psn_no',
        dataIndex: 'psn_no',
        align: 'center',
      },
      {
        title: '诊断类别',
        key: 'diag_type',
        dataIndex: 'diag_type',
        align: 'center',
      },
      {
        title: '主诊断标志',
        key: 'maindiag_flag',
        dataIndex: 'maindiag_flag',
        align: 'center',
      },
      {
        title: '诊断代码',
        key: 'diag_code',
        dataIndex: 'diag_code',
        align: 'center',
      },
      {
        title: '诊断名称',
        key: 'diag_name',
        dataIndex: 'diag_name',
        align: 'center',
      },
      {
        title: '入院病情',
        key: 'adm_cond',
        dataIndex: 'adm_cond',
        align: 'center',
      },
      {
        title: '诊断科室',
        key: 'diag_dept',
        dataIndex: 'diag_dept',
        align: 'center',
      },
      {
        title: '诊断医生编码',
        key: 'dise_dor_no',
        dataIndex: 'dise_dor_no',
        align: 'center',
      },
      {
        title: '诊断医生姓名',
        key: 'dise_dor_name',
        dataIndex: 'dise_dor_name',
        align: 'center',
      },
      {
        title: '诊断时间',
        key: 'diag_time',
        dataIndex: 'diag_time',
        align: 'center',
      },
    ],
  },
  step4: [
    {
      label: '就诊凭证类型',
      type: 'select',
      name: 'mdtrt_cert_type',
      required: true,
      options: [],
      key: 'dictItemValue',
      value: 'dictItemName',
    },
    {
      label: '就诊凭证编号',
      type: 'input',
      name: 'mdtrt_cert_no',
    },
    {
      label: '人员编号',
      type: 'input',
      name: 'psn_no',
      required: true,
    },
    {
      label: '人员姓名',
      type: 'input',
      name: 'psn_name',
    },
    {
      label: '电子凭证令牌',
      type: 'input',
      name: 'ec_token',
    },
    {
      label: '险种类型',
      type: 'select',
      name: 'insutype',
      required: true,
      key: 'dictItemValue',
      value: 'dictItemName',
    },
    {
      label: '医疗费总额',
      type: 'input',
      name: 'medfee_sumamt',
      required: true,
    },
    {
      label: '就诊 ID',
      type: 'input',
      name: 'mdtrt_id',
      required: true,
    },
    {
      label: '中途结算标志',
      name: 'mid_setl_flag',
      type: 'select',
      key: 'dictItemValue',
      value: 'dictItemName',
      required: true,
    },
    {
      label: '发票号',
      type: 'input',
      name: 'invono',
    },
    {
      label: '个人结算方式',
      type: 'select',
      name: 'psn_setlway',
      required: true,
      key: 'dictItemValue',
      value: 'dictItemName',
    },
  ],
};
//结算详情
export const previewInfo = {
  inventoryInfo: [
    {
      label: '定点医疗机构名称',
      name: 'fixmedins_name',
    },
    {
      label: '定点医疗机构代码',
      name: 'fixmedins_no',
    },
    {
      label: '清单流水号',
      name: 'setl_list_id',
    },
    {
      label: '医保编号',
      name: 'hi_no',
    },
    {
      label: '病案号',
      name: 'medcasno',
    },
    {
      label: '医保结算等级',
      name: 'hi_setl_lv',
    },
    {
      label: '申报日期',
      name: 'dcla_time',
    },
    {
      label: '清算方式',
      name: 'clr_way',
    },
    {
      label: '清算类别',
      name: 'clr_type',
    },
    {
      label: '清算经办机构',
      name: 'clr_optins',
    },
  ],
  essentialInfo: [
    {
      label: '人员编号',
      name: 'psn_no',
    },
    {
      label: '人员姓名',
      name: 'psn_name',
    },
    {
      label: '性别',
      name: 'gend',
    },
    {
      label: '出生日期',
      name: 'brdy',
    },
    {
      label: '年龄',
      name: 'age',
    },
    {
      label: '国籍',
      name: 'ntly',
    },
    {
      label: '民族',
      name: 'naty',
    },
    {
      label: '人员证件类型',
      name: 'patn_cert_type',
    },
    {
      label: '证件号码',
      name: 'certno',
    },
    {
      label: '就诊ID',
      name: 'mdtrt_id',
    },
    {
      label: '结算ID',
      name: 'setl_id',
    },
    {
      label: '人员类别',
      name: 'psn_type',
    },
    {
      label: '险种类型',
      name: 'insutype',
    },
    {
      label: '参保地',
      name: 'insuplc',
    },
    {
      label: '职业',
      name: 'prfs',
    },
    {
      label: '现住址',
      name: 'curr_addr',
    },
    {
      label: '工作单位名称',
      name: 'emp_name',
    },
    {
      label: '工作单位地址',
      name: 'emp_addr',
    },
    {
      label: '单位电话',
      name: 'emp_tel',
    },
    {
      label: '邮编',
      name: 'poscode',
    },
    {
      label: '联系人姓名',
      name: 'coner_name',
    },
    {
      label: '关系',
      name: 'patn_rlts',
    },
    {
      label: '地址',
      name: 'coner_addr',
    },
    {
      label: '电话',
      name: 'coner_tel',
    },
    {
      label: '特殊人员类型',
      name: 'sp_psn_type',
    },
    {
      label: '新生儿入院类型',
      name: 'nwb_adm_type',
    },
    {
      label: '新生儿出生体重',
      name: 'nwb_bir_wt',
    },
    {
      label: '公务员标志',
      name: 'cvlserv_flag',
    },
  ],
  treatmentInfo: {
    step1: [
      {
        label: '住院医疗类型',
        name: 'ipt_med_type',
      },
      {
        label: '入院途径',
        name: 'adm_way',
      },
      {
        label: '治疗类别',
        name: 'trt_type',
      },
      {
        label: '入院时间',
        name: 'adm_time',
      },
      {
        label: '出院时间',
        name: 'dscg_time',
      },
      {
        label: '入院科别',
        name: 'adm_caty',
      },
      {
        label: '转科科别',
        name: 'refldept_dept',
      },
      {
        label: '出院科别',
        name: 'dscg_caty',
      },
      {
        label: '实际住院',
        name: 'act_ipt_days',
      },
    ],
    step2: [
      {
        title: '序号',
        key: 'index',
        dataIndex: 'index',
        align: 'center',
        render: (text, record, index) => {
          return index < 9 ? `0${index + 1}` : index + 1;
        },
      },
      {
        title: '出院西医诊断',
        key: 'otp_wm_dise',
        dataIndex: 'otp_wm_dise',
        align: 'center',
      },
      {
        title: '疾病代码',
        key: 'wm_dise_code',
        dataIndex: 'wm_dise_code',
        align: 'center',
      },
      {
        title: '入院病情',
        key: 'adm_cond',
        dataIndex: 'adm_cond',
        align: 'center',
      },
      {
        title: '序号',
        key: 'index1',
        dataIndex: 'index1',
        align: 'center',
        render: (text, record, index) => {
          return index < 9 ? `0${index + 1}` : index + 1;
        },
      },
      {
        title: '出院中医诊断',
        key: 'otp_tcm_dise',
        dataIndex: 'otp_tcm_dise',
        align: 'center',
      },
      {
        title: '疾病代码',
        key: 'tcm_dise_code',
        dataIndex: 'tcm_dise_code',
        align: 'center',
      },
      {
        title: '入院病情',
        key: 'adm_cond',
        dataIndex: 'adm_cond',
        align: 'center',
      },
    ],
    step3: [
      {
        title: '序号',
        key: 'index',
        dataIndex: 'index',
        align: 'center',
        render: (text, record, index) => {
          return index < 9 ? `0${index + 1}` : index + 1;
        },
      },
      {
        title: '手术及操作名称',
        key: 'oprn_oprt_name',
        dataIndex: 'oprn_oprt_name',
        align: 'center',
      },
      {
        title: '手术及操作代码',
        key: 'oprn_oprt_code',
        dataIndex: 'oprn_oprt_code',
        align: 'center',
      },
      {
        title: '手术及操作日期',
        key: 'oprn_oprt_date',
        dataIndex: 'oprn_oprt_date',
        align: 'center',
      },
      {
        title: '麻醉方式',
        key: 'anst_way',
        dataIndex: 'anst_way',
        align: 'center',
      },
      {
        title: '术者医师姓名',
        key: 'oper_dr_name',
        dataIndex: 'oper_dr_name',
        align: 'center',
      },
      {
        title: '术者医师代码',
        key: 'oper_dr_code',
        dataIndex: 'oper_dr_code',
        align: 'center',
      },
      {
        title: '麻醉医师姓名',
        key: 'anst_dr_name',
        dataIndex: 'anst_dr_name',
        align: 'center',
      },
      {
        title: '麻醉医师代码',
        key: 'anst_dr_code',
        dataIndex: 'anst_dr_code',
        align: 'center',
      },
    ],
    step4: [
      {
        title: '序号',
        key: 'index',
        dataIndex: 'index',
        align: 'center',
        render: (text, record, index) => {
          return index < 9 ? `0${index + 1}` : index + 1;
        },
      },
      {
        title: '重症监护病房类型（CCU、NICU、EICU、SICU、PICU、RICU、其他）',
        key: 'scs_cutd_ward_type',
        dataIndex: 'scs_cutd_ward_type',
        align: 'center',
        width: 220,
      },
      {
        title: '进重症监护室时间（_年_月_日_时_分）',
        key: 'scs_cutd_inpool_time',
        dataIndex: 'scs_cutd_inpool_time',
        align: 'center',
        width: 250,
      },
      {
        title: '出重症监护室时间(_年_月_日_时_分）',
        key: 'scs_cutd_exit_time',
        dataIndex: 'scs_cutd_exit_time',
        align: 'center',
        width: 250,
      },
      {
        title: '合计（小时）',
        key: 'scs_cutd_sum_dura',
        dataIndex: 'scs_cutd_sum_dura',
        align: 'center',
      },
    ],
    step5: [
      {
        label: '输血品种',
        name: 'bld_cat',
      },
      {
        label: '输血量',
        name: 'bld_amt',
      },
      {
        label: '输血计量单位',
        name: 'bld_unt',
      },
      {
        label: '特级护理天数*',
        name: 'spga_nurscare_days',
      },
      {
        label: '一级护理天数*',
        name: 'lv1_nurscare_days',
      },
      {
        label: '二级护理天数*',
        name: 'scd_nurscare_days',
      },
      {
        label: '三级护理天数*',
        name: 'lv3_nurscare_days',
      },
      {
        label: '离院方式',
        name: 'dscg_way',
      },
      {
        label: '拟接收机构名称',
        name: 'acp_medins_name',
      },
      {
        label: '拟接收机构代码',
        name: 'acp_medins_code',
      },
      {
        label: '是否有出院31天内再住院计划',
        name: 'days_rinp_flag_31',
      },
      {
        label: '目的',
        name: 'days_rinp_pup_31',
      },
      {
        label: '主诊医师姓名*',
        name: 'chfpdr_name',
      },
      {
        label: '主诊医师代码*',
        name: 'chfpdr_code',
      },
    ],
  },
  medicalChargeInfo: {
    step1: [
      {
        title: '医疗收费项目',
        key: 'med_chrgitm_type',
        dataIndex: 'med_chrgitm_type',
        align: 'center',
        // render: (text, record, index) => {
        //   let str;
        //   switch (index) {
        //     case 0:
        //       str = '床位费';
        //       break;
        //     case 1:
        //       str = '诊察费';
        //       break;
        //     case 2:
        //       str = '检查费';
        //       break;
        //     case 3:
        //       str = '化验费';
        //       break;
        //     case 4:
        //       str = '治疗费';
        //       break;
        //     case 5:
        //       str = '手术费';
        //       break;
        //     case 6:
        //       str = '护理费';
        //       break;
        //     case 7:
        //       str = '卫生材料费';
        //       break;
        //     case 8:
        //       str = '西药费';
        //       break;
        //     case 9:
        //       str = '中药饮片费';
        //       break;
        //     case 10:
        //       str = '中成药费';
        //       break;
        //     case 11:
        //       str = '一般诊疗费';
        //       break;
        //     case 12:
        //       str = '挂号费';
        //       break;
        //     case 13:
        //       str = '其他费';
        //       break;
        //   }
        //   return str;
        // },
      },
      {
        title: '金额',
        key: 'amt',
        dataIndex: 'amt',
        align: 'center',
      },
      {
        title: '甲类',
        key: 'claa_sumfee',
        dataIndex: 'claa_sumfee',
        align: 'center',
      },
      {
        title: '乙类',
        key: 'clab_amt',
        dataIndex: 'clab_amt',
        align: 'center',
      },
      {
        title: '自费',
        key: 'fulamt_ownpay_amt',
        dataIndex: 'fulamt_ownpay_amt',
        align: 'center',
      },
      {
        title: '其他',
        key: 'oth_amt',
        dataIndex: 'oth_amt',
        align: 'center',
      },
    ],
    step2: [
      {
        label: '医疗费总额',
        name: 'medfee_sumamt',
      },
      {
        label: '医院负担金额',
        name: 'hosp_part_amt',
      },
      {
        label: '全自费金额',
        name: 'fulamt_ownpay_amt',
      },
      {
        label: '超限价自费费用',
        name: 'overlmt_selfpay',
      },
      {
        label: '先行自付金额',
        name: 'preselfpay_amt',
      },
      {
        label: '符合政策范围金额',
        name: 'inscp_scp_amt',
      },
      {
        label: '实际支付起付线',
        name: 'act_pay_dedc',
      },
      {
        label: '基本医疗统筹支付比例',
        name: 'hifp_pay',
      },
      {
        label: '账户共济支付金额',
        name: 'acct_mulaid_pay',
      },
      {
        label: '余额',
        name: 'balc',
      },
    ],
    step3: {
      fundPay: [
        {
          label: '医保统筹基金支付',
          name: 'hifp_pay',
        },
        {
          label: '大病保险',
          name: 'hifmi_pay',
        },
        {
          label: '医疗救助',
          name: 'maf_pay',
        },
        {
          label: '公务员医疗补助',
          name: 'cvlserv_pay',
        },
        {
          label: '大额补充',
          name: 'hifob_pay',
        },
        {
          label: '企业补充',
          name: '1111',
        },
        {
          label: '补充医疗保险基金支出',
          name: 'hifes_pay',
        },
        {
          label: '伤残人员医疗保障基金支出',
          name: 'hifdm_pay',
        },
        {
          label: '其他基金支出',
          name: 'oth_pay',
        },
        {
          label: '金额合计',
          name: 'fund_pay_sumamt',
        },
      ],
      personPay: [
        {
          label: '个人自付',
          name: 'preselfpay_amt',
        },
        {
          label: '个人自费',
          name: 'fulamt_ownpay_amt',
        },
        {
          label: '个人账户支付',
          name: 'acct_pay',
        },
        {
          label: '个人现金支付',
          name: 'psn_cash_pay',
        },
        {
          label: '金额合计',
          name: 'psn_part_amt',
        },
      ],
    },
  },
  settlementFInfound: [
    {
      title: '序号',
      key: 'index',
      dataIndex: 'index',
      align: 'center',
      render: (text, record, index) => {
        return index < 9 ? `0${index + 1}` : index + 1;
      },
    },
    {
      title: '基金支付类型',
      key: 'fund_pay_type',
      dataIndex: 'fund_pay_type',
      align: 'center',
    },
    {
      title: '符合政策范围金额',
      key: 'inscp_scp_amt',
      dataIndex: 'inscp_scp_amt',
      align: 'center',
    },
    {
      title: '本次可支付限额金额（结算前限额）',
      key: 'crt_payb_lmt_amt',
      dataIndex: 'crt_payb_lmt_amt',
      align: 'center',
    },
    {
      title: '基金支付金额',
      key: 'fund_payamt',
      dataIndex: 'fund_payamt',
      align: 'center',
    },
    {
      title: '结算过程信息',
      key: 'setl_proc_info',
      dataIndex: 'setl_proc_info',
      align: 'center',
    },
  ],
};
export const revokeInfo = {
  personnelInfo: [
    {
      label: '人员编号',
      name: 'psn_no',
    },
    {
      label: '就诊 ID',
      name: 'mdtrt_id',
    },
    {
      label: '人员姓名',
      name: 'psn_name',
    },
    {
      label: '险种类型',
      name: 'insutype',
    },
    {
      label: '入院时间',
      name: 'adm_time',
    },
    {
      label: '当前状态',
      name: 'clr_optins',
    },
  ],
};
export const changeInfo = {
  formList: [
    {
      label: '就诊凭证类型',
      type: 'select',
      name: 'mdtrt_cert_type',
      required: true,
      key: 'dictItemValue',
      value: 'dictItemName',
    },
    {
      label: '就诊凭证编号',
      type: 'input',
      name: 'mdtrt_cert_no',
    },
    {
      label: '人员编号',
      type: 'input',
      name: 'psn_no',
      required: true,
    },
    {
      label: '人员姓名',
      type: 'input',
      name: 'psn_name',
    },
    {
      label: '联系人姓名',
      type: 'input',
      name: 'coner_name',
    },
    {
      label: '联系电话',
      type: 'numberInput',
      name: 'tel',
    },
    {
      label: '险种类型',
      type: 'select',
      name: 'insutype',
      required: true,
      key: 'dictItemValue',
      value: 'dictItemName',
    },
    {
      label: '开始日期',
      type: 'datePicker',
      name: 'begntime',
      required: true,
    },
    {
      label: '电子凭证令牌',
      type: 'input',
      name: 'ec_token',
    },
    {
      label: '医疗类别',
      type: 'select',
      name: 'med_type',
      required: true,
      key: 'dictItemValue',
      value: 'dictItemName',
    },
    {
      label: '住院号',
      type: 'input',
      name: 'ipt_no',
      required: true,
    },
    {
      label: '病历号',
      type: 'input',
      name: 'medrcdno',
    },
    {
      label: '主治医生编码',
      type: 'input',
      name: 'atddr_no',
      required: true,
    },
    {
      label: '主诊医师姓名',
      type: 'input',
      name: 'chfpdr_name',
      required: true,
    },
    {
      label: '入院诊断描述',
      type: 'input',
      name: 'adm_diag_dscr',
      required: true,
    },
    {
      label: '入院科室名称',
      type: 'input',
      name: 'adm_dept_name',
      required: true,
    },
    {
      label: '入院科室编码',
      type: 'input',
      name: 'adm_dept_codg',
      required: true,
    },
    {
      label: '入院床位',
      type: 'input',
      name: 'adm_bed',
      required: true,
    },
    {
      label: '住院主诊断名称',
      type: 'select',
      name: 'dscg_maindiag_name',
      required: true,
      value: 'dictItemName',
      key: 'dictItemValue',
      span: 12,
      layout: {
        labelCol: {
          span: 22,
        },
        wrapperCol: {
          span: 23,
        },
      },
    },
    {
      label: '住院主诊断代码',
      type: 'input',
      name: 'dscg_maindiag_code',
      required: true,
    },
    {
      label: '主要病情描述',
      type: 'input',
      name: 'main_cond_dscr',
      span: 12,
      layout: {
        labelCol: {
          span: 22,
        },
        wrapperCol: {
          span: 23,
        },
      },
    },
    {
      label: '病种名称',
      type: 'select',
      name: 'dise_name',
      value: 'dictItemName',
      key: 'dictItemValue',
    },
    {
      label: '病种编号',
      type: 'input',
      name: 'dise_no',
    },
    {
      label: '手术操作名称',
      type: 'select',
      name: 'oprn_oprt_name',
      value: 'dictItemName',
      key: 'dictItemValue',
    },
    {
      label: '手术操作代码',
      type: 'input',
      name: 'oprn_oprt_code',
    },
    {
      label: '计划生育服务证号',
      type: 'input',
      name: 'fpsc_no',
    },
    {
      label: '生育类别',
      type: 'select',
      name: 'matn_type',
      key: 'dictItemValue',
      value: 'dictItemName',
    },
    {
      label: '计划生育手术类别',
      type: 'select',
      name: 'birctrl_type',
      key: 'dictItemValue',
      value: 'dictItemName',
    },
    {
      label: '晚育标志',
      type: 'select',
      name: 'latechb_flag',
      key: 'dictItemValue',
      value: 'dictItemName',
    },
    {
      label: '孕周数',
      type: 'input',
      name: 'geso_val',
    },
    {
      label: '胎次',
      type: 'input',
      name: 'fetts',
    },
    {
      label: '胎儿数',
      type: 'input',
      name: 'fetus_cnt',
    },
    {
      label: '早产标志',
      type: 'select',
      name: 'pret_flag',
      key: 'dictItemValue',
      value: 'dictItemName',
    },
    {
      label: '计划生育手术或生育日期',
      type: 'datePicker',
      name: 'birctrl_matn_date',
    },
  ],
  columns: [
    {
      title: () => {
        return (
          <div>
            <span style={{ color: '#f56c6c' }}>*</span>诊断排序号
          </div>
        );
      },
      titleString: '诊断排序号',
      key: 'diag_srt_no',
      dataIndex: 'diag_srt_no',
      align: 'center',
      editable: true,
      required: true,
      type: 'input',
      // width: 80,
      // render: (text, record, index) => {
      //   return index < 9 ? `0${index + 1}` : index + 1;
      // },
      render: (text, record, index) => {
        return index < 9 ? `0${index + 1}` : index + 1;
      },
    },
    {
      title: () => {
        return (
          <div>
            <span style={{ color: '#f56c6c' }}>*</span>人员编号
          </div>
        );
      },
      titleString: '人员编号',
      key: 'psn_no',
      dataIndex: 'psn_no',
      align: 'center',
      editable: true,
      required: true,
      type: 'input',
      // width: 110,
    },
    {
      title: () => {
        return (
          <div>
            <span style={{ color: '#f56c6c' }}>*</span>诊断类别
          </div>
        );
      },
      titleString: '诊断类别',
      key: 'diag_type',
      dataIndex: 'diag_type',
      align: 'center',
      editable: true,
      required: true,
      type: 'select',
      optionKey: 'dictItemValue',
      optionValue: 'dictItemName',
      // width: 70,
    },
    {
      title: () => {
        return (
          <div>
            <span style={{ color: '#f56c6c' }}>*</span>主诊断标志
          </div>
        );
      },
      titleString: '主诊断标志',
      key: 'maindiag_flag',
      dataIndex: 'maindiag_flag',
      align: 'center',
      editable: true,
      required: true,
      type: 'select',
      optionKey: 'dictItemValue',
      optionValue: 'dictItemName',
      // width: 80,
    },
    {
      title: () => {
        return (
          <div>
            <span style={{ color: '#f56c6c' }}>*</span>诊断名称
          </div>
        );
      },
      titleString: '诊断名称',
      key: 'diag_name',
      dataIndex: 'diag_name',
      align: 'center',
      editable: true,
      required: true,
      type: 'select',
      optionKey: 'dictItemName',
      optionValue: 'dictItemName',
      // width: 140,
    },
    {
      title: () => {
        return (
          <div>
            <span style={{ color: '#f56c6c' }}>*</span>诊断代码
          </div>
        );
      },
      titleString: '诊断代码',
      key: 'diag_code',
      dataIndex: 'diag_code',
      align: 'center',
      editable: true,
      required: true,
      type: 'input',
      // width: 90,
    },
    {
      title: () => {
        return (
          <div>
            <span style={{ color: '#f56c6c' }}>*</span>入院病情
          </div>
        );
      },
      titleString: '入院病情',
      key: 'adm_cond',
      dataIndex: 'adm_cond',
      align: 'center',
      editable: true,
      required: true,
      type: 'input',
      // width: 100,
    },
    {
      title: () => {
        return (
          <div>
            <span style={{ color: '#f56c6c' }}>*</span>诊断科室
          </div>
        );
      },
      titleString: '诊断科室',
      key: 'diag_dept',
      dataIndex: 'diag_dept',
      align: 'center',
      editable: true,
      required: true,
      type: 'input',
      // width: 140,
    },
    {
      title: () => {
        return (
          <div>
            <span style={{ color: '#f56c6c' }}>*</span>诊断医生编码
          </div>
        );
      },
      titleString: '诊断医生编码',
      key: 'dise_dor_no',
      dataIndex: 'dise_dor_no',
      align: 'center',
      editable: true,
      required: true,
      type: 'input',
      // width: 100,
    },
    {
      title: () => {
        return (
          <div>
            <span style={{ color: '#f56c6c' }}>*</span>诊断医生姓名
          </div>
        );
      },
      titleString: '诊断医生姓名',
      key: 'dise_dor_name',
      dataIndex: 'dise_dor_name',
      align: 'center',
      editable: true,
      required: true,
      type: 'input',
      // width: 90,
    },
    {
      title: () => {
        return (
          <div>
            <span style={{ color: '#f56c6c' }}>*</span>诊断时间
          </div>
        );
      },
      titleString: '诊断时间',
      key: 'diag_time',
      dataIndex: 'diag_time',
      align: 'center',
      editable: true,
      required: true,
      type: 'datePicker',
      // width: 160,
    },
    {
      title: '操作',
      titleString: '操作',
      key: 'active',
      dataIndex: 'active',
      align: 'center',
    },
  ],
};
export const auditDetails = {
  analysisInfo: {
    info: [
      {
        label: '分析状态码',
        name: 'code',
      },
      {
        label: '分析状态描述',
        name: 'message',
      },
      // {
      //   label: '违反规则信息集合',
      //   name: 'mdtrt_id',
      // },
    ],
    violationInfo: [
      {
        title: '违规标识',
        key: 'jr_id',
        dataIndex: 'jr_id',
        align: 'center',
      },
      {
        title: '规则 ID',
        key: 'rule_id',
        dataIndex: 'rule_id',
        align: 'center',
      },
      {
        title: '规则名称',
        key: 'rule_name',
        dataIndex: 'rule_name',
        align: 'center',
      },
      {
        title: '违规内容',
        key: 'vola_name',
        dataIndex: 'vola_name',
        align: 'center',
      },
      {
        title: '人员编号',
        key: 'psn_no',
        dataIndex: 'psn_no',
        align: 'center',
      },
      {
        title: '就诊 ID',
        key: 'mdtrt_id',
        dataIndex: 'mdtrt_id',
        align: 'center',
      },
      {
        title: '违规金额',
        key: 'vola_amt',
        dataIndex: 'vola_amt',
        align: 'center',
      },
      {
        title: '违规金额计算状态',
        key: 'vola_amt_stas',
        dataIndex: 'vola_amt_stas',
        align: 'center',
      },
      {
        title: '严重程度',
        key: 'sev_deg',
        dataIndex: 'sev_deg',
        align: 'center',
      },
      {
        title: '违规依据',
        key: 'vola_evid',
        dataIndex: 'vola_evid',
        align: 'center',
      },
      {
        title: '违规行为分类',
        key: 'vola_bhvr_type',
        dataIndex: 'vola_bhvr_type',
        align: 'center',
      },
      // {
      //   title: '违规明细',
      //   key: 'index',
      //   dataIndex: 'index',
      //   align: 'center',
      // },
    ],
    violationDetail: [
      {
        title: '序号',
        key: 'index',
        dataIndex: 'index',
        align: 'center',
        render: (text, record, index) => {
          return index < 9 ? `0${index + 1}` : index + 1;
        },
      },
      {
        title: '违规明细标识',
        key: 'jrd_id',
        dataIndex: 'jrd_id',
        align: 'center',
      },
      {
        title: '费用明细流水号',
        key: 'feedetl_sn',
        dataIndex: 'feedetl_sn',
        align: 'center',
      },
      {
        title: '违规明细类型',
        key: 'vola_item_type',
        dataIndex: 'vola_item_type',
        align: 'center',
      },
      {
        title: '违规金额',
        key: 'vola_amt',
        dataIndex: 'vola_amt',
        align: 'center',
      },
    ],
  },
  visitInfo: [
    {
      label: '就诊 ID',
      name: 'mdtrt_id',
    },
    {
      label: '人员编号',
      name: 'psn_no',
    },
    {
      label: '病房号',
      name: 'wardno',
    },
    {
      label: '入院床位',
      name: 'adm_bed',
    },
    {
      label: '出院床位',
      name: 'dscg_bed',
    },
    {
      label: '开始时间',
      name: 'begntime',
    },
    {
      label: '结束时间',
      name: 'endtime',
    },
    {
      label: '住院主诊断代码',
      name: 'dscg_maindiag_code',
    },
    {
      label: '住院主诊断名称',
      name: 'dscg_maindiag_name',
    },
    {
      label: '主治医生编码',
      name: 'atddr_no',
    },
    {
      label: '入院科室编码',
      name: 'adm_dept_codg',
    },
    {
      label: '入院科室名称',
      name: 'adm_dept_name',
    },
    {
      label: '出院科室名称',
      name: 'dscg_dept_name',
    },
    {
      label: '出院科室编码',
      name: 'dscg_dept_codg',
    },
    {
      label: '医疗类别',
      name: 'med_type',
      render: (data, dictData) => {
        return dictData['med_type_3'] &&
          dictData['med_type_3'].filter((item) => item.dictItemValue === data)[0]
          ? dictData['med_type_3'].filter((item) => item.dictItemValue === data)[0].dictItemName
          : data;
      },
    },
    {
      label: '生育状态',
      name: 'matn_stas',
    },
    {
      label: '医疗费总额',
      name: 'medfee_sumamt',
    },
    {
      label: '全自费金额',
      name: 'fulamt_ownpay_amt',
    },
    {
      label: '先行自付金额',
      name: 'preselfpay_amt',
    },
    {
      label: '个人账户支出',
      name: 'acct_pay',
    },
    {
      label: '医疗救助基金支出',
      name: 'maf_pay',
    },
    {
      label: '基金支付总额',
      name: 'fund_pay_sumamt',
    },
    {
      label: '险种类型',
      name: 'insutype',
    },
  ],
  diagnosticInfo: [
    {
      title: '序号',
      key: 'index',
      dataIndex: 'index',
      align: 'center',
      render: (text, record, index) => {
        return index < 9 ? `0${index + 1}` : index + 1;
      },
    },
    {
      title: '诊断信息 ID',
      key: 'diag_info_id',
      dataIndex: 'diag_info_id',
      align: 'center',
    },
    {
      title: '出入院诊断类别',
      key: 'inout_diag_type',
      dataIndex: 'inout_diag_type',
      align: 'center',
    },
    {
      title: '主诊断标志',
      key: 'maindiag_flag',
      dataIndex: 'maindiag_flag',
      align: 'center',
    },
    {
      title: '诊断排序号',
      key: 'diag_srt_no',
      dataIndex: 'diag_srt_no',
      align: 'center',
    },
    {
      title: '诊断代码',
      key: 'diag_code',
      dataIndex: 'diag_code',
      align: 'center',
    },
    {
      title: '诊断名称',
      key: 'diag_name',
      dataIndex: 'diag_name',
      align: 'center',
    },
    {
      title: '诊断时间',
      key: 'diag_time',
      dataIndex: 'diag_time',
      align: 'center',
    },
  ],
  expenseDetails: [
    {
      title: '序号',
      key: 'index',
      dataIndex: 'index',
      align: 'center',
      render: (text, record, index) => {
        return index < 9 ? `0${index + 1}` : index + 1;
      },
    },
    {
      title: '费用明细流水号',
      key: 'feedetl_sn',
      dataIndex: 'feedetl_sn',
      align: 'center',
    },
    {
      title: '处方/医嘱号',
      key: 'rx_drord_no',
      dataIndex: 'rx_drord_no',
      align: 'center',
    },
    {
      title: '组编号',
      key: 'grpno',
      dataIndex: 'grpno',
      align: 'center',
    },
    {
      title: '医嘱类别',
      key: 'drord_type',
      dataIndex: 'drord_type',
      align: 'center',
    },
    {
      title: '目录类别',
      key: 'list_type',
      dataIndex: 'list_type',
      align: 'center',
    },
    {
      title: '医疗收费项目类别',
      key: 'med_chrgitm_type',
      dataIndex: 'med_chrgitm_type',
      align: 'center',
    },
    {
      title: '出院带药标志',
      key: 'dscg_tkdrug_flag',
      dataIndex: 'dscg_tkdrug_flag',
      align: 'center',
    },
    {
      title: '医保目录编码',
      key: 'hilist_code',
      dataIndex: 'hilist_code',
      align: 'center',
    },
    {
      title: '医保目录名称',
      key: 'hilist_name',
      dataIndex: 'hilist_name',
      align: 'center',
    },
    {
      title: '医保目录(药品)剂型编码',
      key: 'hi_dosform_code',
      dataIndex: 'hi_dosform_code',
      align: 'center',
    },
    {
      title: '医保目录(药品)剂型名称',
      key: 'hi_dosform_name',
      dataIndex: 'hi_dosform_name',
      align: 'center',
    },
    {
      title: '收费项目等级',
      key: 'chrgitm_lv',
      dataIndex: 'chrgitm_lv',
      align: 'center',
    },
    {
      title: '医保目录价格',
      key: 'hilist_pric',
      dataIndex: 'hilist_pric',
      align: 'center',
    },
    {
      title: '医保目录备注',
      key: 'hilist_memo',
      dataIndex: 'hilist_memo',
      align: 'center',
    },
    {
      title: '医药机构目录编码',
      key: 'medins_list_codg',
      dataIndex: 'medins_list_codg',
      align: 'center',
    },
    {
      title: '医药机构目录(药品)剂型编码',
      key: 'medins_dosfor_code',
      dataIndex: 'medins_dosfor_code',
      align: 'center',
    },
    {
      title: '医药机构目录(药品)剂型名称',
      key: 'medins_dosform_name',
      dataIndex: 'medins_dosform_name',
      align: 'center',
    },
    {
      title: '数量',
      key: 'cnt',
      dataIndex: 'cnt',
      align: 'center',
    },
    {
      title: '单价',
      key: 'pric',
      dataIndex: 'pric',
      align: 'center',
    },
    {
      title: '明细项目费用总额',
      key: 'det_item_fee_sumamt',
      dataIndex: 'det_item_fee_sumamt',
      align: 'center',
    },
    {
      title: '全自费金额',
      key: 'fulamt_ownpay_amt',
      dataIndex: 'fulamt_ownpay_amt',
      align: 'center',
    },
    {
      title: '先行自付金额',
      key: 'preselfpay_amt',
      dataIndex: 'preselfpay_amt',
      align: 'center',
    },
    {
      title: '规格',
      key: 'spec',
      dataIndex: 'spec',
      align: 'center',
    },
    {
      title: '数量单位',
      key: 'cnt_prcunt',
      dataIndex: 'cnt_prcunt',
      align: 'center',
    },
    {
      title: '医嘱开嘱时间',
      key: 'drord_begntime',
      dataIndex: 'drord_begntime',
      align: 'center',
    },
    {
      title: '医嘱停嘱时间',
      key: 'drord_endtime',
      dataIndex: 'drord_endtime',
      align: 'center',
    },
    {
      title: '开单科室编码',
      key: 'bilg_dept_codg',
      dataIndex: 'bilg_dept_codg',
      align: 'center',
    },
    {
      title: '开单科室名称',
      key: 'bilg_dept_name',
      dataIndex: 'bilg_dept_name',
      align: 'center',
    },
    {
      title: '开单医生编码',
      key: 'bilg_dr_codg',
      dataIndex: 'bilg_dr_codg',
      align: 'center',
    },
    {
      title: '开单医师姓名',
      key: 'bilg_dr_name',
      dataIndex: 'bilg_dr_name',
      align: 'center',
    },
    {
      title: '开单医生职称',
      key: 'drord_dr_profttl',
      dataIndex: 'drord_dr_profttl',
      align: 'center',
    },
  ],
};
