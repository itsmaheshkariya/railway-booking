import React from 'react';
import axios from 'axios';
import M from 'materialize-css';
import { withRouter } from 'react-router';


class Booking extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        source:'',
        destination:'',
        noofpassengers:'',
        bookingdate:'',
        bookingtime:'',
        userid:'',
        trainno:'',
        trainname:'',
        seatno:''
        }
    }

    componentDidMount(){
        if(localStorage.getItem('UserInfo') == null){
            this.props.history.push("/login/in");
        }else{
            this.setState({
                userid:localStorage.getItem('UserInfo')
            })
        }
        this.setState({
        source:'',
        destination:'',
        fare:'',
        noofpassengers:'',
        bookingdate:'',
        bookingtime:'',
        trainno:'',
        trainname:'',
        seatno:''

        })
    }




    sourcechange = event =>{
        this.setState({
            source:event.target.value
        })
    }
    destinationchange = event =>{
        this.setState({
            destination:event.target.value
        })
    }
    farechange = event =>{
        this.setState({
            fare:event.target.value
        })
    }
    noofpassengerschange = event =>{
        this.setState({
            noofpassengers:event.target.value
        })
    }
    bookingdatechange = event =>{
        this.setState({
            bookingdate:event.target.value
        })
    }
    bookingtimechange = event =>{
        this.setState({
            bookingtime:event.target.value
        })
    }

    trainnochange = event =>{
        this.setState({
            trainno:event.target.value
        })
    }
    trainnamechange = event =>{
        this.setState({
            trainname:event.target.value
        })
    }
    seatnochange = event =>{
        this.setState({
            seatno:event.target.value
        })
    }
    doPayment()
    {
        window.open("https://instamojo.com/@maheshkareeya", "_blank")
    }
    submit(event,id){
        this.doPayment();
        event.preventDefault()

        //if(this.handleValidation()){

    //    if(id === 0){
        axios.post('http://127.0.0.1:5000/booking',{
            source:this.state.source,
            destination:this.state.destination,
            fare:this.state.fare,
            noofpassengers:this.state.noofpassengers,
            bookingdate:this.state.bookingdate,
            bookingtime:this.state.bookingtime,
            userid:this.state.userid,
            trainno:this.state.trainno,
            trainname:this.state.trainname,
            seatno:this.state.seatno,

        })
        .then(()=>{
            console.log("ok")
            M.toast({html: 'Booked Successfully'})
            this.props.history.push("/history");
          this.componentDidMount()
        })

    // }else{
    //     M.toast({html: "Form has errors."})

    //     }
    }
    render(){
        return(
            <div className="center">

<               h2 className="center">Booking</h2>
                <div className="box">
                <form onSubmit={(e)=>this.submit(e,this.state.id)}>
                    <div className="row">
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">my_location</i>
                                    <input required onChange={(e)=>this.sourcechange(e)} value={this.state.source} minLength="4" maxLength="12" type="text" id="source" className="source" />
                                    <label htmlFor="source">Source</label>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">person_pin_circle</i>
                                    <input required onChange={(e)=>this.destinationchange(e)} value={this.state.destination} minLength="4" maxLength="12" type="text" id="destination" className="destination" />
                                    <label htmlFor="destination">Destination</label>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">person_pin_circle</i>
                                    <input required onChange={(e)=>this.farechange(e)} value={this.state.fare} minLength="4" maxLength="4" type="number" id="fare" className="fare" />
                                    <label htmlFor="fare">Fare</label>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">people</i>
                                    <input required onChange={(e)=>this.noofpassengerschange(e)} value={this.state.noofpassengers} minLength="1" maxLength="5" type="text" id="noofpassengers" className="noofpassengers" />
                                    <label htmlFor="noofpassengers">No of Passengers</label>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">today</i>
                                    <input required onChange={(e)=>this.bookingdatechange(e)} value={this.state.bookingdate} minLength="4" maxLength="12" type="date" id="bookingdate" className="bookingdate" />
                                    <label htmlFor="bookingdate">Booking Date</label>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">timer</i>
                                    <input required onChange={(e)=>this.bookingtimechange(e)} value={this.state.bookingtime} minLength="4" maxLength="12" type="time" id="bookingtime" className="bookingtime" />
                                    <label htmlFor="bookingtime">Booking Time</label>
                            </div>
                        </div>
                        {/* <div className="col s12 m6 l4"> */}
                            {/* <div className="input-field col s12"> */}
                                    {/* <i className="material-icons prefix">person_add</i> */}
                                    <input required  value={this.state.userid} minLength="4" maxLength="30" type="hidden" id="userid" className="userid" />
                                    {/* <label htmlFor="userid"></label> */}
                            {/* </div> */}
                        {/* </div> */}
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">train</i>
                                    <input required onChange={(e)=>this.trainnochange(e)} value={this.state.trainno} minLength="4" maxLength="6" type="number" id="trainno" className="trainno" />
                                    <label htmlFor="trainno">Train Number</label>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">subway</i>
                                    <input required onChange={(e)=>this.trainnamechange(e)} value={this.state.trainname} minLength="4" maxLength="20" type="text" id="trainname" className="trainname" />
                                    <label htmlFor="trainname">Train Name</label>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">airline_seat_recline_normal</i>
                                    <input required onChange={(e)=>this.seatnochange(e)} value={this.state.seatno} minLength="1" maxLength="3" type="number" id="seatno" className="seatno" />
                                    <label htmlFor="seatno">Seat Number</label>
                            </div>
                        </div>

                    </div>

                    <button  className="btn waves-effect waves-light right" type="submit" name="action">Book
                            <i className="material-icons right">send</i>
                    </button>
                    </form>
                </div>
            </div>
        )
    }

}

export default withRouter(Booking)

