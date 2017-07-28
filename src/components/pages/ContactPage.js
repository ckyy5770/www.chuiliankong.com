import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {fetchContact, updatePageName, CONTACT_PAGE_NAME} from "../../actions/actions";

class ContactPage extends Component{
    componentDidMount(){
        this.props.fetchContact();
        this.props.updatePageName(CONTACT_PAGE_NAME);
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
    return bindActionCreators({
        fetchContact : fetchContact,
        updatePageName : updatePageName
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);