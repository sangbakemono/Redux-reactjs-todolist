import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            filterName: '',
            filterStatus: -1
        }
    }
    onChange =(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus,
        );
        this.setState({
            [name]: value
        }); 
    }
    render() {
        var {tasks} = this.props;
        var elmTasks = tasks.map((task, index)=>{
            return <TaskItem key={task.id} index={index} task={task} />
        });
        return (
            <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng thái</th>
                                <th className="text-center">Hoạt động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>                                                                                                         
                                    <input 
                                    type="text" 
                                    name="filterName"  
                                    className="form-control" 
                                    onChange={this.onChange}/>                                                                                                             
                                </td>
                                <td>                                    
                                    <select 
                                        name="filterStatus" 
                                        className="form-control"
                                        onChange={this.onChange}
                                    >
                                        <option value={-1}>Tất cả</option>
                                        <option value={0}>Ẩn</option>
                                        <option value={1}>Kích hoạt</option>                                       
                                    </select>                                   
                                </td>
                                <td></td>
                            </tr>
                            {elmTasks}
                        </tbody>
                    </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}; 




export default connect(mapStateToProps, null)(TaskList);