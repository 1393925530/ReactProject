import React, { Component , Fragment} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) { //一个实例就要对应一个构造函数
        super(props); //调用父类的构造函数
        //当组件的state或者props发生变化时，render函数就会重新执行
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
                    <TodoItem
                        key={index}
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
            )
        })
    }
    handleInputChange(e) {
        console.log(e.target);//e.target获取到事件对应的元素对应的DOM节点，还可以用ref获取到对应的DOM
        const value = e.target.value; //e.target.value在异步setState时先做保存在外层再使用，否则报错
        this.setState(() => {
            return {
                inputValue: value,
            }
        })
        // this.setState({
        //     inputValue: e.target.value,
        // })
    }
    handleBtnClick() {
        this.setState((prevState) => ({ //ES6函数直接返回对象写法/setState的参数prevState为前一状态下的state
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
    }
    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
        // this.setState(() => ({
        //     list: list
        // }))
        // this.setState({
        //     list: list
        // })
        console.log(index);
    }
}
//react中，父组件通过属性向子组件传递数据，子组件通过父组件传递的方法传递数据
export default TodoList;