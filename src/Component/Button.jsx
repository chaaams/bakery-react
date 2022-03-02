import React from "react";

class Button extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                
                <button onClick={this.props.onClick} className={this.props.isSelected === true ? "btn-primary" : null}>{this.props.children}</button>
            </div>
        )
    }
}

export default Button