import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {fetchContact} from "../../actions/actions";

class ContactPage extends Component{
    componentDidMount(){
        this.props.fetchContact();
    }

    render(){
        if(!this.props.contact){
            return (
                <div>Loading</div>
            )
        }else{
            return (
                <div>
                    {this.props.contact.github}
                </div>
            )
        }
    }

}

function mapStateToProps(state){
    return {
        contact: state.contact
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchContact : fetchContact},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);