import React, { Component } from 'react'
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

class Btn extends Component {
    constructor(props){
        super(props);
        this.callMe = this.callMe.bind(this);
    }
    componentDidMount()
    {
    }
    callMe(){
        // console.log()
        if(this.props.btn === 'delete'){
            Axios.delete(`http://localhost:5000/${this.props.title}/${this.props.btn}/${localStorage.getItem('UserInfo')}`)
            .then((res)=>{
                this.props.history.push('/Trains')
            })
        }
        if(this.props.btn == 'show'){

            this.props.history.push(`/getallbookings`)
        }

    }
    render() {
        return (
            <td><a onClick={this.callMe} className="waves-effect waves-light btn">{this.props.btn}</a></td>


        )
    }
}
export default withRouter(Btn)
