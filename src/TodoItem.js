import React,{ Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const { content } = this.props;
        return (
            <div 
            onClick={this.handleClick}>
            {content}
            </div>
        )
    }
    handleClick() {
        const { deleteItem , index } = this.props;
        deleteItem(index);
    }
}
//通过PropTypes要求父组件传值的类型
TodoItem.PropTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

export default TodoItem;