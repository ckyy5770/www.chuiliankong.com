import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {fetchProjects} from "../../actions/actions";

class ProjectsPage extends Component{
    componentDidMount(){
        this.props.fetchProjects();
    }

    renderProjectsList(){
        if(!this.props.projects){
            return (
                <div>Loading</div>
            )
        }else{
            return this.props.projects.map(entry => {
                return (
                    <li className="list-group-item" key={entry.id}>
                        <div>{entry.projectName}</div>
                    </li>
                )
            });
        }
    }

    render(){
        return (
            <div>
                <ul className="list-group">
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
    return bindActionCreators({fetchProjects : fetchProjects},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);