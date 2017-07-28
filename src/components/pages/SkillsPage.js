import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {fetchSkills, updatePageName, SKILLS_PAGE_NAME} from "../../actions/actions";

class SkillsPage extends Component{
    componentDidMount(){
        this.props.fetchSkills();
        this.props.updatePageName(SKILLS_PAGE_NAME);
    }

    renderSkillsList(){
        if(!this.props.skills){
            return (
                <div>Loading</div>
            )
        }else{
            return this.props.skills.map(entry => {
                return (
                    <li key={entry.id}>
                        <div>{entry.skill}</div>
                    </li>
                )
            });
        }
    }

    render(){
        return (
            <div>
                <ul>
                    {this.renderSkillsList()}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        skills: state.skills
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchSkills : fetchSkills,
        updatePageName : updatePageName
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsPage);