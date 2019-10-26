import React, { Component } from 'react';
import { connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {
    onUpdateStatus=()=>{
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete =()=>{
        this.props.onDelete(this.props.task.id);
    }

    onUpdate =()=>{
        this.props.onUpdate(this.props.task.id);
    }
    
    render() {
        var {task, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === true ? 'label label-success' : 'label label-danger'}
                    onClick={this.onUpdateStatus}
                    >
                        {task.status === true ? 'Kích hoạt': 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="submit" className="btn btn-warning" onClick={this.onUpdate}>
                        <span className="fa fa-pencil ml-15"></span>
                        Sửa
                                    </button>&nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="fa fa-trash ml-15"></span>
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);