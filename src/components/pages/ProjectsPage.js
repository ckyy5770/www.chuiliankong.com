import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {fetchProjects, updatePageName, PROJECTS_PAGE_NAME} from "../../actions/actions";

class ProjectsPage extends Component{
    componentDidMount(){
        this.props.fetchProjects();
        this.props.updatePageName(PROJECTS_PAGE_NAME);
    }

    renderProjectsList(){
        if(!this.props.projects){
            return (
                <div>Loading</div>
            )
        }else{
            return this.props.projects.map(entry => {
                return (
                    <li key={entry.id}>
                        <div>{entry.projectName}</div>
                    </li>
                )
            });
        }
    }

    render(){
        return (
            <div>
                <ul>
                    {this.renderProjectsList()}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        projects: state.projects
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchProjects : fetchProjects,
        updatePageName : updatePageName
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);