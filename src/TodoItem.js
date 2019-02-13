import React,{ Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const { content , test} = this.props;
        //JSX -> createElement -> 虚拟DOM（JS对象） -> 真实的DOM
        //虚拟DOM使得ReactNative开发原生应用成为可能
        return (
            <div
                onClick={this.handleClick}>{content}</div>
        )
        // return React.createElement('div', {} , 'item');
    }
    handleClick() {
        const { deleteItem , index } = this.props;
        deleteItem(index);
    }
    // 当一个组件从父组件接收参数
    //如果这个组件第一次存在于父组件中，不会执行
    //如果这个组件之前存在于父组件中，才会执行
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }
    //当这个组件即将被从页面剔除时会被执行
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}
//通过PropTypes要求父组件传值的类型
TodoItem.propTypes = {
    test: PropTypes.string.isRequired, //代表test必须要传递
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), //arrayOf或者语法，content为一个数组，数组的组成内容可以是number或者string，PropTypes可以多个类型
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world',
}

export default TodoItem;