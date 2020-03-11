import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import Th from './Th.component';
import Tr from './Tr.component';

class TableData1 extends React.Component{
   constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        if(localStorage.getItem('UserInfo') == null){
            this.props.history.push("/login");
        }
        axios.get(this.props.url)
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
    }
    render(){
        return(
            <div className= "container">
                <h2 className="center">{this.props.title}</h2>
                <div className="container-box">
                <div className="row">
                    <div className="col s6 m6 l4"></div>

                <table>
                <thead>
                <tr>

                {
                this.props.rows.map((item)=>
                <Th key={item} item={item}/>

                )}


                </tr>
                </thead>

                <tbody>
                    {
                        this.state.data.map((val,index)=>
                            <Tr key={index} title={this.props.title}  rows={this.props.rows} item={val} />
                            )
                    }


                    </tbody>
                </table>


            </div>
            </div>
            </div>

        )
    }
}

export default withRouter(TableData1)
