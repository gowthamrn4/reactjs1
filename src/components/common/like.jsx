import React, { Component } from 'react';

class Like extends Component {
    render() { 
        let classess="fa fa-heart"
        if(!this.props.liked) classess += "-o"
        return  <i 
        onClick={this.props.onClick} 
        style={{ cursor:'pointer'}} 
        className={classess} 
        aria-hidden="true"/>
    }
}
 
export default Like;