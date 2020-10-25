import React, { useContext, useState, useEffect, useRef } from 'react';
import {
  Form,
  Row,
  Col,
  Table,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Button,
  AutoComplete,
} from 'antd';
// import styles from './index.less';

const { Option } = Select;
const EditableContext = React.createContext();
const EditableRow = () => {
  // console.log(index,props)
  const [form] = Form.useForm();
  return (
    <Form>
      <EditableContext.Provider value={form}>
        <tr {...props.children} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  titleString,
  editable,
  children,
  dataIndex,
  record,
  rowIndex,
  handleSave,
  type,
  width,
  required = false,
  options,
  optionKey,
  optionValue,
  onSearch,
  onChange,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const InputNumberRef = useRef();
  const selectRef = useRef();
  const datePickerRef = useRef();

  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      if (type === 'input') {
        inputRef.current.focus();
      } else if (type === 'number') {
        InputNumberRef.current.focus();
      } else if (type === 'select') {
        selectRef.current.focus();
      } else if (type === 'datePicker') {
        datePickerRef.current.focus();
      }
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values }, rowIndex);
      onChange ? onChange(values, rowIndex) : null;
      datePickerRef.current.focus();
    } catch (errInfo) {}
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        initialValue={record[dataIndex]}
        key={`${new Date()}_${dataIndex}_${rowIndex}`}
        rules={[
          {
            required: required,
            message: `请输入${titleString || title}`,
          },
        ]}
      >
        {type === 'input' ? (
          <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        ) : type === 'number' ? (
          <InputNumber ref={InputNumberRef} onPressEnter={save} onBlur={save} />
        ) : type === 'select' ? (
          <Select
            showSearch={true}
            // filterOption={(input, option) => option.children.indexOf(input) >= 0}
            style={{
              width: '100%',
            }}
            ref={selectRef}
            onChange={save}
            onBlur={save}
            onSearch={onSearch}
          >
            {options &&
              options.map((option) => {
                return (
                  <Option key={option[optionKey] ? option[optionKey] : option.dictItemValue}>
                    {option[optionValue] ? option[optionValue] : option.dictItemName}
                  </Option>
                );
                // return <Option key={option.dictItemName}>{option.dictItemName}</Option>;
              })}
          </Select>
        ) : type === 'datePicker' ? (
          <DatePicker
            ref={datePickerRef}
            // showTime={true}
            style={{
              width: '100%',
            }}
          />
        ) : null}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const EditableTable = (props) => {
  const {
    columns,
    editableTableData,
    setEditableTableData,
    footer,
    loading,
    scroll,
    needBtn = true,
  } = props;
  const handleSave = (row, rowIndex) => {
    // const newData = [...editableTableData];
    // const item = newData[rowIndex];
    // newData.splice(rowIndex, 1, { ...item, ...row });
    // setEditableTableData(newData);
  };
  const editableTableData = [
    {name:'11111'},
    {name:'2222'},
    {name:'33333'},
  ]
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },]
  const editableTableColumns = columns.map((item) => {
    if (!item.editable) {
      return item;
    }

    return {
      ...item,
      onCell: (record, rowIndex) => ({
        record,
        rowIndex,
        editable: item.editable,
        dataIndex: item.dataIndex,
        title: item.title,
        required: item.required,
        type: item.type,
        width: item.width,
        options: item.options,
        optionKey: item.optionKey,
        optionValue: item.optionValue,
        titleString: item.titleString,
        onSearch: item.onSearch,
        onChange: item.onChange,
        handleSave: handleSave,
      }),
    };
  });
  const editableTableFooter = (currentData) => {
    return (
      <Row style={{ width: '100%' }}>
        <Col span={24}>
          <p>合计金额：{}</p>
        </Col>
      </Row>
    );
  };
  const components = {
    body: {
      row: EditableRow,
      // cell: EditableCell,
    },
  };
  return (
    <Row style={{ width: '100%' }}>
      <Table
        loading={loading}
        components={components}
        // rowClassName={() => 'editable-row'}
        style={{ width: '100%' }}
        columns={editableTableColumns}
        dataSource={editableTableData}
        // footer={footer ? footer : null}
        // scroll={scroll ? scroll : null}
        // pagination={false}
      />
      {needBtn ? (
        <Button
          style={{ width: '100%' }}
          type="dashed"
          onClick={(e) => {
            e.stopPropagation();
            const data = editableTableData ? [...editableTableData] : [];
            data.push({});
            setEditableTableData(data);
          }}
        >
          添加一行
        </Button>
      ) : null}
    </Row>
  );
};
export default EditableTable;
