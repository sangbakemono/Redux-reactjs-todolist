import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            keyword: ''
        }
    }
    onChange =(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        }); 
    }

    onSearch =()=>{
        this.props.onSearch(this.state.keyword);
    }

    render() {
        var {keyword} = this.state;
        return (
            <div className="form-group">
                <div className="input-group">
                    <input 
                        type="search" 
                        name="keyword" 
                        className="form-control" 
                        value={keyword}
                        placeholder="Nhập từ khóa..." 
                        onChange ={this.onChange}/>
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-primary" onClick={this.onSearch}>
                            <span className="fa fa-search ml-15"></span>
                            Tìm
                        </button>
                    </span>
                </div>
            </div>            
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (keyword) => {
            dispatch(actions.searchTask(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);



