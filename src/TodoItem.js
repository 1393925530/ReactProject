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
    content: PropTypes.arrayOf(PropTypes.number, PropTypes.string), //arrayOf或者语法，PropTypes可以多个类型
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world',
}

export default TodoItem;