import React from 'react';
import axios from 'axios';
import M from 'materialize-css';
import Th from './Th.component';
import Tr from './Tr.component';
import './css/Trains.css'

import {withRouter} from 'react-router-dom';

class Train extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            data:[],
            id:0,
            trainname:'',
            origin:'',
            destination:'',
            trainno:'',
            servicetype:'',
            arrivaltime:'',
            arrivalday:'',
            departuretime:'',
            departureday:''
        })
    }


componentDidMount(){
    // this.setState({
    //     trainname:'',
    //     origin:'',
    //     destination:'',
    //     trainno:'',
    //     servicetype:'',
    //     arrivaltime:'',
    //     arrivalday:'',
    //     departuretime:'',
    //     departureday:''
    // })

    if(localStorage.getItem('UserInfo') == null){
        this.props.history.push("/Trains");
    }
    setInterval(async () => {
    axios.get(this.props.url)
    .then((res)=>{
        this.setState({
            data:res.data
        })
    })},2000)
}

trainnamechange = event => {
    this.setState({
        trainname:event.target.value
    })
}

originchange = event => {
    this.setState({
        origin:event.target.value
    })
}

destinationchange = event => {
    this.setState({
        destination:event.target.value
    })
}

trainnochange = event => {
    this.setState({
        trainno:event.target.value
    })
}

servicetypechange = event => {
    this.setState({
        servicetype:event.target.value
    })
}

arrivaltimechange = event => {
    this.setState({
        arrivaltime:event.target.value
    })
}

arrivaldaychange = event => {
    this.setState({
        arrivalday:event.target.value
    })
}

departuretimechange = event => {
    this.setState({
        departuretime:event.target.value
})

}

departuredaychange = event => {
    this.setState({
        departureday:event.target.value
    })
}

submit(event,id){
    event.preventDefault()

    axios.post('http://127.0.0.1:5000/Trains/',{
        trainname:this.state.trainname,
        origin:this.state.origin,
        destination:this.state.destination,
        trainnno:this.state.trainno,
        servicetype:this.state.servicetype,
        arrivaltime:this.state.arrivaltime,
        arrivalday:this.state.arrivalday,
        departuretime:this.state.departuretime,
        departureday:this.state.departureday,
    })
    .then(()=> {
        console.log("ok")
        M.toast({html:"Train added Successfully"})
        this.componentDidMount();
    })
}

render(){
    return(
        <div className="box">

            <h2 className="center">Trains</h2>
            <div>
            <form onSubmit={(e)=>this.submit(e,this.state.id)}>
                <div className="row">
                    <div className="col s12 m6 l4">
                        <div className="input-field col s12">
                                <i className="material-icons prefix">my_location</i>
                                <input required onChange={(e)=>this.trainnamechange(e)} value={this.state.trainname} minLength="4" maxLength="30" type="text" id="trainname" className="trainname" />
                                <label htmlFor="trainname">Train Name</label>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className="input-field col s12">
                                <i className="material-icons prefix">person_pin_circle</i>
                                <input required onChange={(e)=>this.originchange(e)} value={this.state.origin} minLength="4" maxLength="30" type="text" id="origin" className="origin" />
                                <label htmlFor="origin">Origin</label>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className="input-field col s12">
                                <i className="material-icons prefix">person_pin_circle</i>
                                <input required onChange={(e)=>this.destinationchange(e)} value={this.state.destination} minLength="4" maxLength="30" type="text" id="destination" className="destination" />
                                <label htmlFor="destination">Destination</label>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className="input-field col s12">
                                <i className="material-icons prefix">people</i>
                                <input required onChange={(e)=>this.trainnochange(e)} value={this.state.trainno} minLength="1" maxLength="7" type="number" id="trainno" className="trainno" />
                                <label htmlFor="trainno">Train Number</label>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className="input-field col s12">
                                <i className="material-icons prefix">today</i>
                                <input required onChange={(e)=>this.servicetypechange(e)} value={this.state.servicetype} minLength="4" maxLength="12" type="text" id="servicetype" className="servicetype" />
                                <label htmlFor="servicetype">Service Type</label>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className="input-field col s12">
                                <i className="material-icons prefix">timer</i>
                                <input required onChange={(e)=>this.arrivaltimechange(e)} value={this.state.arrivaltime} minLength="4" maxLength="12" type="time" id="arrivaltime" className="arrivaltime" />
                                <label htmlFor="arrivaltime">Arrival Time</label>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className="input-field col s12">
                                <i className="material-icons prefix">train</i>
                                <input required onChange={(e)=>this.arrivaldaychange(e)} value={this.state.arrivalday} minLength="4" maxLength="12" type="text" id="arrivalday" className="arrivalday" />
                                <label htmlFor="arrivalday">Arrival Day</label>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className="input-field col s12">
                                <i className="material-icons prefix">subway</i>
                                <input required onChange={(e)=>this.departuretimechange(e)} value={this.state.departuretime} minLength="4" maxLength="20" type="time" id="departuretime" className="departuretime" />
                                <label htmlFor="departuretime">Departure Time</label>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className="input-field col s12">
                                <i className="material-icons prefix">airline_seat_recline_normal</i>
                                <input required onChange={(e)=>this.departuredaychange(e)} value={this.state.departureday} minLength="1" maxLength="12" type="text" id="departureday" className="departureday" />
                                <label htmlFor="departureday">Departure Day</label>
                        </div>
                    </div>

                </div>

                <button  className="btn waves-effect waves-light right" type="submit" name="action">Add
                        <i className="material-icons right">send</i>
                </button>
                </form>
                <h2 className="center">{this.props.title}</h2>
                <table className="responsive-table">
                <thead>
                <tr>

                {
                this.props.rows.map((item)=>
                <Th key={item} item={item}/>

                )}
                {/* {
                this.props.btns.map((item)=>
                <Th key={item} item={item}/>

                )} */}

                </tr>
                </thead>

                <tbody>
                    {
                        this.state.data.map((val,index)=>
                            <Tr key={index} title={this.props.title} btns={this.props.btns} rows={this.props.rows} item={val} />
                            )
                    }


                    </tbody>
                </table>

            </div>
        </div>
    )
}

}

export default withRouter(Train)
