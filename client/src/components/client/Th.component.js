import React from 'react';
import { withRouter } from 'react-router-dom';




class Th extends React.Component{
    constructor(props){
        super(props);

    }
render(){
    return(
        <th>
                {this.props.item.toUpperCase()}
        </th>

    )
}
}


export default withRouter(Th)
