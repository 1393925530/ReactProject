import React, { Component , Fragment} from 'react';

class TodoList extends Component {
    constructor(props) { //一个实例就要对应一个构造函数
        super(props); //调用父类的构造函数
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render() {
        return (
            <Fragment>
            <div>
                <input 
                value={this.state.inputValue}
                onChange={this.handleInputChange.bind(this)}
                />
                <button>提交</button>
                </div>
            <ul>
                <li>学英语</li>
                <li>learing React</li>
            </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value,
        })
    }
}

export default TodoList;