import React, { Component , Fragment} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) { //一个实例就要对应一个构造函数
        //实际上constructor和React的生命周期函数很像，由于不是React独有的，所以并不算React的生命周期函数；在组件一被创建时就被调用
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
    //在组件即将被挂载到页面时自动执行
    componentWillMount() {
        console.log('componentWillMount');
    }
    render() {
        console.log('render');
        //render实际上属于React的生命周期函数
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
                ref={(input) => {this.input = input}}
                />
                <button onClick={this.handleBtnClick}>提交</button>
                </div>
            <ul ref={(ul) => {this.ul = ul}}>
                    {this.getTodoItem()}
            </ul>
            </Fragment>
        )
    }
    //组件被挂载到页面后，自动被执行
    componentDidMount() {
        console.log('componentDidMount');
    }
    //组件被更新之前，被执行
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }
    //组件被更新之前，被执行，但是在shouldComponentUpdate之后被执行
    //如果shouldComponentUpdate返回true才执行
    //如果返回false，不执行
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    //组件更新完成之后被执行
    componentDidUpdate() {
        console.log('componentDidUpdate');
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
        // console.log(e.target);//e.target获取到事件对应的元素对应的DOM节点，还可以用ref获取到对应的DOM
        // const value = e.target.value; //e.target.value在异步setState时先做保存在外层再使用，否则报错
        const value = this.input.value;
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
            //且setState函数不会立即执行,异步函数
            //所以setState和ref联合使用时出现的一些坑也要避免
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => { //setState异步函数执行完毕后的回调函数
                console.log(this.ul.querySelectorAll('div').length);
        })
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