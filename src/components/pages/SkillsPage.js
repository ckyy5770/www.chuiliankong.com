import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {fetchSkills} from "../../actions/actions";

class SkillsPage extends Component{
    componentDidMount(){
        this.props.fetchSkills();
    }

    renderSkillsList(){
        if(!this.props.skills){
            return (
                <div>Loading</div>
            )
        }else{
            return this.props.skills.map(entry => {
                return (
                    <li className="list-group-item" key={entry.id}>
                        <div>{entry.skill}</div>
                    </li>
                )
            });
        }
    }

    render(){
        return (
            <div>
                <ul className="list-group">
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
    return bindActionCreators({fetchSkills : fetchSkills},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsPage);