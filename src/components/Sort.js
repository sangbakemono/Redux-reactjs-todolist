import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Sort extends Component {
    
    onClick(SortBy, SortValue){
        this.props.onSort({
            by: SortBy, 
            value: SortValue
        });
    }
    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                    sắp xếp
                    <span className="fa fa-caret-square-o-down mr-5"></span>
                </button>
                <ul className="dropdown-menu">
                    <li onClick={() => this.onClick('name', 1)}>
                        <div className={(this.props.sort.by ==='name' && this.props.sort.value === 1) ? 'sort_selected': ''} role="button">
                            <span className="fa fa-sort-alpha-asc mr-5"></span>&nbsp;&nbsp;
                            <b>Từ A-Z</b>
                        </div>
                    </li>
                    <li onClick={() => this.onClick('name', -1)}>
                        <div className={(this.props.sort.by ==='name' && this.props.sort.value === -1) ? 'sort_selected': ''} role="button">
                            <span className="fa fa-sort-alpha-desc mr-5"></span>&nbsp;&nbsp;
                            <b>Từ Z-A</b>
                        </div>
                    </li>
                    <li className="divider"></li>
                    <li onClick={() => this.onClick('status', 1)}>
                        <div className={(this.props.sort.by ==='status' && this.props.sort.value === 1) ? 'sort_selected': ''} role="button">
                            <span className="mr-5"></span>&nbsp;
                            <b>Trạng thái kích hoạt</b>
                        </div>
                    </li>
                    <li onClick={() => this.onClick('status', -1)}>
                        <div className={this.props.sort.by ==='status' && this.props.sort.value === -1 ? 'sort_selected': ''} role="button">
                            <span className="mr-5"></span>&nbsp;
                            <b>Trạng thái ẩn</b>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTask(sort))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);