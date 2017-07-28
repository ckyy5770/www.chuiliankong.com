import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {fetchEducation, updatePageName, EDUCATION_PAGE_NAME} from "../../actions/actions";

class EducationPage extends Component{
    componentDidMount(){
        this.props.fetchEducation();
        this.props.updatePageName(EDUCATION_PAGE_NAME);
    }

    renderEducationList(){
        if(!this.props.education){
            return (
                <div>Loading</div>
            )
        }else{
            return this.props.education.map(entry => {
                return (
                    <li key={entry.id}>
                        <div>{entry.schoolName}</div>
                    </li>
                )
            });
        }
    }

    render(){
        return (
            <div>
                <ul>
                    {this.renderEducationList()}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        education: state.education
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchEducation : fetchEducation,
        updatePageName : updatePageName
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationPage);