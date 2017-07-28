import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {fetchIndex} from "../../actions/actions";

class IndexPage extends Component{
    componentDidMount(){
        this.props.fetchIndex();

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
    return bindActionCreators({fetchIndex : fetchIndex},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);