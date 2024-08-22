import {React, Component} from "react";
import {version, Button, PickerLocale} from 'antd';
import 'antd/dist/antd';
import {Layout} from "antd";
import {Pagination} from "antd";
import { DatePicker, Space } from 'antd';
/*
文档：
* https://ant.design/components/transfer-cn/
*/
const {Header, Footer, Sider, Content} = Layout;

const onChange = (date, dateString) => {
    console.log(date, dateString);
};
class AntOne extends Component {
    render() {
        return (
            <div>
                <p>Ant Design版本：{version}</p>
                <br/>
                <Pagination defaultCurrent={1} total={50}/>
                <br/>
                <Space direction="vertical">
                    <DatePicker onChange={onChange} />
                    <DatePicker onChange={onChange} picker="周" />
                    <DatePicker onChange={onChange} picker="月" />
                    <DatePicker onChange={onChange} picker="quarter" />
                    <DatePicker onChange={onChange} picker="年" />
                </Space>
            </div>

        );
    }
}

export default AntOne;