import React, { Component , Fragment} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) { //一个实例就要对应一个构造函数
        super(props); //调用父类的构造函数
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render() {
    {/*测试git提交时的不需要用户名和密码*/}
        return (
            <Fragment>
            <div>
                <input 
                value={this.state.inputValue}
                onChange={this.handleInputChange.bind(this)}
                />
                <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
            <ul>
                {
                    this.state.list.map(( item, index) => {
                        return (
                            <div>
                            <TodoItem 
                            content={item} />
                        {/* 
                        <li 
                        key={index} 
                        onClick={this.handleItemDelete.bind(this,index)}
                        >
                        { item }
                        </li> 
                        */}
                            </div>
                        )
                    })
                }
            </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value,
        })
    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index , 1);
        this.setState({
            list: list
        })
        console.log(index);
    }
}

export default TodoList;