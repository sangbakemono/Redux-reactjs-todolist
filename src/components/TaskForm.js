import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id: '',
            name: '',
            status: false
        }
    }
    
    UNSAFE_componentWillMount(){
        if(this.props.taskEditing){
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status
            });
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.taskEditing){
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                status: nextProps.taskEditing.status
            });
        }else if(!nextProps.taskEditing){
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }
    
    onChange =(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }

    onSubmit =(event) =>{
        event.preventDefault();
        this.props.onAddTask(this.state);
        this.onClear();
        this.onCloseForm();
    }

    onCloseForm =()=>{
        this.props.onCloseForm();
    }

    onClear =()=>{
        this.setState({
            name: '',
            value: false
        });
    }
    render() {
        var {id} = this.state;
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id !== ''? 'Cập nhật công việc' : 'Thêm công việc'}
                            <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên:</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                                />
                        </div>
                        <div className="form-group">
                            <label>Trạng thái:</label>
                            <select  
                                className="form-control" 
                                required="required"
                                name="status"
                                value={this.state.status}
                                onChange={this.onChange}>
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">
                                <span className="fa fa-plus ml-15"></span>
                                Lưu lại
                            </button>&nbsp;
                            <button type="submit" className="btn btn-danger" onClick={this.onClear}>
                                <span className="fa fa-times ml-15"></span>
                                Hủy bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch,Props) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.AddTask(task));
        },
        onCloseForm: () =>{
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);