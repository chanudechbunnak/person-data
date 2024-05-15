import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button} from 'antd';
import { RootState } from '../app/store';
import { deletePerson } from '../features/person/PersonsSlice';

interface Person {
  id: string;
  firstname: string;
  age: number;
  mobile: number;
  nationality: string;
  gender: string;
}
const PersonTable: React.FC = () => {
  const persons = useSelector((state: RootState) => state.persons.persons);
  const dispatch = useDispatch();


  const columns = [
    {
      title: 'ชื่อ',
      dataIndex: 'firstname',
      key: 'firstname',
      sorter: (a: Person, b: Person) => a.firstname.localeCompare(b.firstname),
    },
    {
      title: 'เพศ',
      dataIndex: 'gender',
      key: 'gender',
      sorter: (a: Person, b: Person) => a.gender.localeCompare(b.gender),
    },
    {
      title: 'หมายเลขโทรศัทพ์',
      dataIndex: 'mobile',
      key: 'mobile',
      sorter: (a: Person, b: Person) => a.mobile - b.mobile,
    },
    {
      title: 'สัญชาติ',
      dataIndex: 'nationality',
      key: 'nationality',
      sorter: (a: Person, b: Person) => a.nationality.localeCompare(b.nationality),
    },
    {
      title: 'จัดการ',
      key: 'action',
      render: (_: any, record: Person) => (
        <Button onClick={() => dispatch(deletePerson(record.id))}>ลบ</Button>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={persons} rowKey="id" pagination={{ pageSize: 5 }} />
  );
};

export default PersonTable;
