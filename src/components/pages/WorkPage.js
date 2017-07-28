import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {fetchWork} from "../../actions/actions";

class WorkPage extends Component{
    componentDidMount(){
        this.props.fetchWork();
    }

    renderWorkList(){
        if(!this.props.work){
            return (
                <div>Loading</div>
            )
        }else{
            return this.props.work.map(entry => {
                return (
                    <li key={entry.id}>
                        <div>{entry.company}</div>
                    </li>
                )
            });
        }
    }

    render(){
        return (
            <div>
                <ul>
                    {this.renderWorkList()}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        work: state.work
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWork : fetchWork},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkPage);