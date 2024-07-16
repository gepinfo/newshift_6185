import {
    DesktopOutlined, DoubleLeftOutlined, DoubleRightOutlined, FileTextOutlined, QuestionCircleOutlined, SettingOutlined
} from '@ant-design/icons';
import { FloatButton, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import './Sidebar.css';

import type { MenuProps } from 'antd';
import Topbar from '../Topbar/Topbar';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const { Content, Sider } = Layout;

const items: MenuItem[] = [
    getItem('Ticket Panel', '1', <DesktopOutlined />),
    getItem('Management', '2', <FileTextOutlined />),
    getItem('Settings', '3', <SettingOutlined />),
];



function Sidebar() {
    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div>
            <Layout style={{ minHeight: '100vh', background: '#003eaa' }}>
                <Sider style={{ background: '#003eaa' }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                    trigger={
                        collapsed ? (
                            <DoubleRightOutlined
                                style={{ fontSize: '16px', color: '#fff', marginLeft: '10px' }}
                            />
                        ) : (
                            <DoubleLeftOutlined
                                style={{ fontSize: '16px', color: '#fff', marginLeft: '10px' }}
                            />
                        )
                    }
                >
                    <div className="logo-container">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                            alt="React Logo"
                            width="40"
                            height="40"
                        />
                    </div>
                    <Menu className='menu-items' mode="inline" items={items} />
                    <FloatButton icon={<QuestionCircleOutlined style={{ color: colorBgContainer }} />} />

                </Sider>
                <Layout>
                    <Topbar />
                    <div>
                        <Content style={{ margin: '0 16px' }}>
                            <div style={{ padding: 24, background: colorBgContainer }}>
                                {/* your content goes here */}
                                Content
                            </div>
                        </Content>
                    </div>
                </Layout>
            </Layout>
        </div >
    );
}

export default Sidebar;
