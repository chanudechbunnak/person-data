import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Button, Select, DatePicker, Radio, InputNumber } from 'antd';
import { addPerson } from '../features/person/PersonsSlice';


const { Option } = Select;

const PersonForm: React.FC = () => {
;
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    const newPerson = { id: uuidv4(), ...values };
    dispatch(addPerson(newPerson));
    form.resetFields();
  };

  const handleClear = () => {
    form.resetFields();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', background: '#6495ED', padding: '20px', width: '1200px', margin: '0 auto' }}>
      <Form form={form} onFinish={onFinish} layout="vertical" style={{ width: '100%' }}>

        <Form.Item >
          <Input.Group compact>
            <Form.Item name="prefix" label="คำนำหน้า" style={{ width: '10%', marginRight: '20px'  }} rules={[{ required: true, message: 'กรุณาเลือกคำนำหน้า' }]}>
              <Select placeholder="คำนำหน้า" >
                <Option value="Mr.">นาย</Option>
                <Option value="Ms.">นางสาว</Option>
                <Option value="Mrs.">นาง</Option>
              </Select>
            </Form.Item>
            <Form.Item name="firstName" label="ชื่อ" style={{ width: '30%', marginRight: '20px'  }} rules={[{ required: true, message: 'กรุณากรอกชื่อ' }]}>
              <Input placeholder="ชื่อ" />
            </Form.Item>
            <Form.Item name="lastName" label="นามสกุล" style={{ width: '30%', marginRight: '20px'  }} rules={[{ required: true, message: 'กรุณากรอกนามสกุล' }]}>
              <Input placeholder="นามสกุล" />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        
        <Form.Item >
          <Input.Group compact>
            <Form.Item name="dob" label="วันเดือนปีเกิด" style={{ width: '30%', marginRight: '5px'}}  rules={[{ required: true, message: 'กรุณาเลือกวันเดือนปีเกิด' }]}>
              <DatePicker format="YYYY-MM-DD" placeholder="วันเดือนปีเกิด" />
            </Form.Item>
            <Form.Item name="nationality" label="Nationality" style={{ width: '20%', marginLeft: '10px'}}  rules={[{ required: true, message: 'กรุณากรอกสัญชาติ' }]}>
              <Select placeholder="สัญชาติ" >
                <Option value="ไทย">ไทย</Option>
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item name="idCard" label="เลขบัตรประชาชน" style={{ width: '30%' }} rules={[{required: true, message: 'กรุณากรอกเลขบัตรประชาชน'}, {pattern: /^\d{13}$/, message: 'เลขบัตรประชาชนต้องประกอบด้วยตัวเลข 13 หลักเท่านั้น'}]}>
          <Input />
        </Form.Item>
        
        <Form.Item name="gender" label="เพศ" rules={[{ required: true, message: 'กรุณาเลือกเพศ' }]}>
          <Radio.Group>
            <Radio value="ชาย">ชาย</Radio>
            <Radio value="หญิง">หญิง</Radio>
            <Radio value="ไม่ระบุ">ไม่ระบุ</Radio>
          </Radio.Group>
        </Form.Item>
        
        <Form.Item name="mobile" label="หมายเลขโทรศัพท์มือถือ" style={{ width: '30%' }} rules={[{required: true, message: 'กรุณากรอกหมายเลขโทรศัพท์มือถือ'},{pattern: /^[0-9]{10}$/, message: 'หมายเลขโทรศัพท์มือถือต้องประกอบด้วยตัวเลข 10 หลักเท่านั้น'}]}>
          <Input />
        </Form.Item>        

        <Form.Item name="passport" label="หนังสือเดินทาง" style={{ width: '30%' }} >
          <Input />
        </Form.Item>

        <Form.Item name="expectedSalary" label="เงินเดือนที่คาดหวัง" style={{ width: '30%' }} rules={[{ required: true, message: 'กรุณากรอกเงินเดือนที่คาดหวัง' }]}>
          <InputNumber style={{ width: '100%' }} min={0} />
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit">
            ส่งข้อมูล
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={handleClear}>
            ล้างข้อมูล
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonForm;
