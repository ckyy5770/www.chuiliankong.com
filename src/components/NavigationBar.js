import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {styleNavBarLinks, styleNavLinkOnSelect} from '../../style/style'
import {styleNavLinkUnSelect} from '../../style/style'
import {styleNavBarBand} from "../../style/style"

import {INDEX_PAGE_NAME} from "../actions/actions"
import {EDUCATION_PAGE_NAME} from "../actions/actions"
import {WORK_PAGE_NAME} from "../actions/actions"
import {SKILLS_PAGE_NAME} from "../actions/actions"
import {PROJECTS_PAGE_NAME} from "../actions/actions"
import {CONTACT_PAGE_NAME} from "../actions/actions"

class NavigationBar extends Component {
    mapStateToStyle(linkName){
        if(linkName === this.props.curPageName){
            return styleNavLinkOnSelect;
        }else{
            return styleNavLinkUnSelect;
        }
    }

    render(){
        return (
            <div>
                <div className="col-md-4" style={styleNavBarBand}>
                    <Link name={INDEX_PAGE_NAME} style={this.mapStateToStyle(INDEX_PAGE_NAME)} to="/" >&lt;/&gt;</Link>
                </div>
                <div className="col-md-8" style={styleNavBarLinks}>
                    <Link name={EDUCATION_PAGE_NAME} style={this.mapStateToStyle(EDUCATION_PAGE_NAME)} to="/education"> education </Link>
                    <Link name={WORK_PAGE_NAME} style={this.mapStateToStyle(WORK_PAGE_NAME)} to="/work"> work </Link>
                    <Link name={SKILLS_PAGE_NAME} style={this.mapStateToStyle(SKILLS_PAGE_NAME)} to="/skills"> skills </Link>
                    <Link name={PROJECTS_PAGE_NAME} style={this.mapStateToStyle(PROJECTS_PAGE_NAME)} to="/projects"> projects </Link>
                    <Link name={CONTACT_PAGE_NAME} style={this.mapStateToStyle(CONTACT_PAGE_NAME)} to="/contact"> contact </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { curPageName: state.curPageName };
}

export default connect(mapStateToProps)(NavigationBar);
