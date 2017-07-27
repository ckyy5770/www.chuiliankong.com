import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import {styleNavLinkOnSelect} from '../../style/style'
import {styleNavLinkUnSelect} from '../../style/style'

export default class NavigationBar extends Component {
    constructor(props){
        super(props);

        this.state = { selected: ""};
        this.onNavBarClick = this.onNavBarClick.bind(this);
    }
    onNavBarClick(event){
        if(event){
            // update state only when a link being clicked
            if(event.target.name){
                this.setState({selected: event.target.name});
            }
        }
    }
    render(){
        return (
            <div onClick={this.onNavBarClick}>
                <Link name="index" style={this.state.selected === "index" ? styleNavLinkOnSelect: styleNavLinkUnSelect} to="/" > index </Link>
                <Link name="education" style={this.state.selected === "education" ? styleNavLinkOnSelect: styleNavLinkUnSelect} to="/education"> education </Link>
                <Link name="work" style={this.state.selected === "work" ? styleNavLinkOnSelect: styleNavLinkUnSelect} to="/work"> work </Link>
                <Link name="skills" style={this.state.selected === "skills" ? styleNavLinkOnSelect: styleNavLinkUnSelect} to="/skills"> skills </Link>
                <Link name="projects" style={this.state.selected === "projects" ? styleNavLinkOnSelect: styleNavLinkUnSelect} to="/projects"> projects </Link>
                <Link name="contact" style={this.state.selected === "contact" ? styleNavLinkOnSelect: styleNavLinkUnSelect} to="/contact"> contact </Link>
            </div>
        )
    }
}