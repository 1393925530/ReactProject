import React, { Component } from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {

    const { inputValue, list, changeInputValue, handleClick, handleDelete } = props;

    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue} />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick={handleDelete} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

//state映射到props，state是store里面的数据，映射到组件的props
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

//store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },
        handleDelete(index) {
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action);
        }
    }
}

//TodoList是UI组件，在经过connect将UI组件和业务逻辑相结合，实际导出的是容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);