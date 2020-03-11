import React, { Component } from 'react'
import Axios from 'axios';
import {withRouter} from 'react-router-dom';

class Td extends Component {
    constructor(props){
        super(props);
        this.callMe = this.callMe.bind(this);

    }
    componentDidMount()
    {

    }
    callMe(){

            Axios.delete(`http://localhost:5000/${this.props.title}/${this.props.row}/${this.props.tditem['_id']}`)
            .then((res)=>{
                window.location.reload(false);
            })

    }
    render() {
        console.log(this.props.row)
        if(this.props.row == 'delete'){
            return (<td><a onClick={this.callMe} className="waves-effect waves-light btn">{this.props.row.toUpperCase()}</a></td>)
        }else{
            return (<td>{this.props.tditem[[this.props.row]]}</td>)
        }


    }
}
export default withRouter(Td)
