import React,{ Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const { content , test} = this.props;
        return (
            <div 
            onClick={this.handleClick}>
            {test} - {content}
            </div>
        )
    }
    handleClick() {
        const { deleteItem , index } = this.props;
        deleteItem(index);
    }
}
//通过PropTypes要求父组件传值的类型
TodoItem.propTypes = {
    test: PropTypes.string.isRequired, //代表test必须要传递
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

export default TodoItem;