import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import {connect} from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskEditing: null,
            filter: {
                name: '',
                status: -1
            },
            keyword: '',
            sortBy: 'name',
            sortValue: 1
        }
    }

    onToggleForm = () => {
        var { itemEditing}  = this.props;
        if(itemEditing && itemEditing.id !== ''){
            this.props.openForm();
        }else{
            this.props.onToggleForm();
        }
        this.props.onClearTask({
            id: '',
            name: '',
            status: false
        });
    }

    // onUpdate = (id) => {
    //     var { tasks } = this.state;
    //     var index = this.findIndex(id);
    //     var taskEditing = tasks[index];
    //     this.setState({
    //         taskEditing: taskEditing
    //     });
    //     this.onShowForm();
    // }

    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        });

    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        });
    }
    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        });
    }

    render() {
        var {sortBy, sortValue } = this.state;
        var {isDisplayForm} = this.props;

        //chức năng trạng thái status
        // if (filter) {
        //     if (filter.name) {
        //         tasks = tasks.filter((task) => {
        //             return task.name.toLowerCase().indexOf(filter.name) !== -1;
        //         });
        //     }
        //     tasks = tasks.filter((task) => {
        //         if (filter.status === -1) {
        //             return task;
        //         }
        //         return task.status === (filter.status === 1 ? true : false)
        //     });
        // }

        // chức năng tìm kiếm
        // if (keyword) {
        //     tasks = tasks.filter((task) => {
        //         return task.name.toLowerCase().indexOf(keyword) !== -1;
        //     });
        // }

        //chức năng sắp xếp
        // if (sortBy === 'name') {
        //     tasks.sort((a, b) => {
        //         if (a.name > b.name) return sortValue;
        //         else if (a.name < b.name) return -sortValue;
        //         else return 0;
        //     });
        // } else {
        //     tasks.sort((a, b) => {
        //         if (a.status > b.status) return -sortValue;
        //         else if (a.status < b.status) return sortValue;
        //         else return 0;
        //     });
        // }

        return (
            <div className="container mt-5">
                <div className="text-center">
                    <h1>Quản lý công việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                    <TaskForm />
                    </div>
                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onToggleForm}>
                            <span className="fa fa-plus ml-15"></span>
                            Thêm công việc
                    </button>

                        {/*Search - Sort*/}
                        <Control 
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                            sortBy={sortBy}
                            sortValue={sortValue} />

                        {/*list*/}
                        <TaskList
                            onFilter={this.onFilter} />

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleForm: () =>{
            dispatch(actions.toggleForm())
        },
        onClearTask: (task) =>{
            dispatch(actions.editTask(task))
        },
        openForm: () =>{
            dispatch(actions.openForm())
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
