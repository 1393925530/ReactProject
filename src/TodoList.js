import React, { Component , Fragment} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) { //一个实例就要对应一个构造函数
        super(props); //调用父类的构造函数
        this.state = {
            inputValue: '',
            list: []
        }
        // this指向的绑定都放到constructor构造函数里面
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    render() {
    {/*测试git提交时的不需要用户名和密码*/}
        return (
            <Fragment>
            <div>
                <label htmlFor="insertArea">输入内容</label>
                <input 
                id="insertArea"
                className="input"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                />
                <button onClick={this.handleBtnClick}>提交</button>
                </div>
            <ul>
                    {this.getTodoItem()}
            </ul>
            </Fragment>
        )
    }
    getTodoItem() {
       return this.state.list.map((item, index) => {
            return (
                <div>
                    <TodoItem
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
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