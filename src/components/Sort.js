import React, { Component } from 'react';


class Sort extends Component {
    
    onClick(SortBy, SortValue){
        this.props.onSort(SortBy, SortValue);
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
                        <div className={(this.props.sortBy ==='name' && this.props.sortValue === 1) ? 'sort_selected': ''} role="button">
                            <span className="fa fa-sort-alpha-asc mr-5"></span>&nbsp;&nbsp;
                            <b>Từ A-Z</b>
                        </div>
                    </li>
                    <li onClick={() => this.onClick('name', -1)}>
                        <div className={(this.props.sortBy ==='name' && this.props.sortValue === -1) ? 'sort_selected': ''} role="button">
                            <span className="fa fa-sort-alpha-desc mr-5"></span>&nbsp;&nbsp;
                            <b>Từ Z-A</b>
                        </div>
                    </li>
                    <li className="divider"></li>
                    <li onClick={() => this.onClick('status', 1)}>
                        <div className={(this.props.sortBy ==='status' && this.props.sortValue === 1) ? 'sort_selected': ''} role="button">
                            <span className="mr-5"></span>&nbsp;
                            <b>Trạng thái kích hoạt</b>
                        </div>
                    </li>
                    <li onClick={() => this.onClick('status', -1)}>
                        <div className={this.props.sortBy ==='status' && this.props.sortValue === -1 ? 'sort_selected': ''} role="button">
                            <span className="mr-5"></span>&nbsp;
                            <b>Trạng thái ẩn</b>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sort;