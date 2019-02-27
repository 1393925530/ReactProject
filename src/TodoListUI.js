import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

//无状态组件就是一个函数，性能高
//UI组件一般都可以通过无状态组件定义
const TodoListUI = (props) => {
    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder='todo info'
                    style={{ width: '300px', marginRight: '10px' }}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{ marginTop: '10px', width: '300px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={() => { props.handleItemDelete(index) }}>{item}</List.Item>)}
            />
        </div>
    )
}

export default TodoListUI;