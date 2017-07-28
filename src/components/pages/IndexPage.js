import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {fetchIndex, updatePageName, INDEX_PAGE_NAME} from "../../actions/actions";

class IndexPage extends Component{
    componentDidMount(){
        this.props.fetchIndex();
        this.props.updatePageName(INDEX_PAGE_NAME);
    }

    render(){
        if(!this.props.index){
            return (
                <div>Loading</div>
            )
        }else{
            return (
                <div>
                    <p>{this.props.index.introduction}</p>
                </div>
            )
        }
    }

}

function mapStateToProps(state){
    return {
        index: state.index
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchIndex : fetchIndex,
        updatePageName : updatePageName
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);