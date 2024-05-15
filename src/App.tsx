import React from 'react';
import { Layout, Menu, Button, Checkbox, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';
import { DownOutlined } from '@ant-design/icons';
import PersonForm from './components/PersonForm';
import PersonTable from './components/PersonTable';
import './App.css';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleDeleteAll = () => {
    console.log("Deleting all records...");
  };

  const languageMenu = (
    <Menu>
      <Menu.Item key="en" onClick={() => changeLanguage('en')}>English</Menu.Item>
      <Menu.Item key="th" onClick={() => changeLanguage('th')}>ไทย</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header>
        <div className="language-dropdown">
          <Dropdown overlay={languageMenu} trigger={['click']}>
            <Button>
              {t('Language')} <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Header>
      <Content style={{ padding: '50px' }}>
        <h1 className="title">{t('PersonalInformationManagement')}</h1>
        <PersonForm />
        <div style={{ marginTop: '30px' }} /> 
        <div style={{ marginBottom: '10px' }}>
          <Checkbox style={{ marginRight: '10px' }}>{t('SelectAll')}</Checkbox>
          <Button type="primary" danger onClick={handleDeleteAll}>{t('DeleteAll')}</Button>
        </div>
        <PersonTable />
      </Content>
    </Layout>
  );
};

export default App;
