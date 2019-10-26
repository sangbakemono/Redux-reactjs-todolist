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
        if(this.props.itemEditing){
            this.setState({
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                status: this.props.itemEditing.status
            });
        }else{
            this.onClear();
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status
            });
        }else if(!nextProps.itemEditing){
            this.onClear();
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

    onSave =(event) =>{
        event.preventDefault();
        this.props.onSaveTask(this.state);

        this.onClear();
        this.onCloseForm();
    }

    onCloseForm =()=>{
        this.props.onCloseForm();
    }

    onClear =()=>{
        this.setState({
            name: '',
            status: false
        });
    }
    render() {
        var {id} = this.state;
        if(!this.props.isDisplayForm) return null;
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id !== ''? 'Cập nhật công việc' : 'Thêm công việc'}
                            <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSave}>
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
                            <button type="button" className="btn btn-danger" onClick={this.onClear}>
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
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch,Props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm: () =>{
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);