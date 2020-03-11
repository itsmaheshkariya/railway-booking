import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';


class Adminview extends React.Component{
//    constructor(props){
//         super(props);
//         this.state = {
//             historys:[]
//         }
//     }
//     componentDidMount(){
//         if(localStorage.getItem('UserInfo') == null){
//             this.props.history.push("/login/in");
//         }
//         axios.get(`http://localhost:5000/booking/history`)
//         .then((res)=>{
//             this.setState({
//                 historys:res.data
//             })
//         })
//     }
    render(){
        return(
            <div className= "container">
                <h2 className="center">Bookings</h2>
                <div className="container-box">
                <div class="row">
                    <div class="col s6 m6 l4"></div>

                <table>
                <thead>
                <tr>
                    <th>Source</th>
                    <th>Destination</th>
                    <th>Fare</th>
                    <th>Date</th>
                </tr>
                </thead>

                <tbody>{
                        // this.state.historys.map(val=>

                        <tr>
                            <td>Nagpur</td>
                            <td>Pune</td>
                            <td>500</td>
                            <td>29/02/2020</td>
                        </tr>

                        // )
                    }</tbody>
                </table>


            </div>
            </div>
            </div>

        )
    }
}

export default withRouter(Adminview)
