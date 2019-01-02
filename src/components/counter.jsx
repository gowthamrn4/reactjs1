import React, { Component } from 'react';

class Couter extends Component {

    componentDidUpdate(prevProps,prevState){
        console.log('prevProps',prevProps);
        console.log('prevState',prevState)
    }
    
    render() { 
        console.log('Counter-Rendor')
        return(
            <div className="row">
               <div className="col-1">
               <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
               </div>
               <div className="col">
               {/* <h4>Counter #{this.props.id}</h4>
                 {this.props.children} */}
               <button 
                 onClick={()=>this.props.onIncrement(this.props.counter)} 
                 className="btn btn-secondary btn-sm">
                 +
                 </button>
                 <button 
                 onClick={()=>this.props.onDecrement(this.props.counter)} 
                 className="btn btn-secondary btn-sm m-2"
                 disabled={this.props.counter.value===0  ?'disabled':''}
                 >
                 -
                 </button>
                 <button  className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                 {/* <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul> */}
               </div>
                     
            </div>
        )
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value}=this.props.counter;
        return value===0 ? "Zero" :value;
    }
}
 
export default Couter;