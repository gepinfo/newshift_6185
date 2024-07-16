import {
    EditFilled
} from '@ant-design/icons';
import { Avatar, Button, Divider, Layout, theme } from 'antd';
import './Topbar.css';
const { Header } = Layout;


function Topbar() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const dividerStyle = {
        height: '30px',
        background: "#00000026"
    };

    return (
        <>
            <Header style={{ padding: 0, background: colorBgContainer }} >
                <div className='header-wrapper'>
                    <div className='header-content-start'>
                        <div style={{ fontWeight: "bold" }}>Ticket Panels</div>
                        <div>
                            <Divider style={dividerStyle} type="vertical" />
                        </div>
                        <div>
                            <Button style={{ borderRadius: 0 }}>Matriz <EditFilled /></Button>
                        </div>
                    </div>
                    <div className='header-content-end'>
                        <div>Options</div>
                        <div>
                            <Divider style={dividerStyle} type="vertical" />
                        </div>
                        <div>
                            <Avatar style={{ backgroundColor: '#f56a00' }}>JN</Avatar>
                        </div>
                    </div>
                </div>
            </Header>
        </>
    )
}

export default Topbar