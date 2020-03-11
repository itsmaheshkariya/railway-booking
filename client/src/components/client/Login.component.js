import React from 'react';
import axios from 'axios';
import M from 'materialize-css';
import './css/Login.css'

import { withRouter } from 'react-router';
class Login extends React.Component{

    constructor(props){
        super(props);
        console.log(props.logged)

        this.state = {
            active:Boolean,
            UserId:'',
            password:''
        }
        this.callMe = this.callMe.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
    }
    componentDidMount(){

        if(this.props.logged === 'out'){

            M.toast({html:"Logged out"})
            localStorage.clear();
            this.props.loghandler();
            this.props.history.push("/login");



        }else{


        this.setState({
            active:false,
            UserId:'',
            password:''
        })
    }
    }
    callMe()
    {
        this.props.history.push("/register")
    }
    async handleCheckbox(){
        await this.setState({
            active:!this.state.active
        });


    }

    UserIdchange = event =>{
        this.setState({
            UserId:event.target.value
        })
    }
    passwordchange = event =>{
        this.setState({
            password:event.target.value
        })
    }

    submit(event,id){
        event.preventDefault();
        let URI = '';
        URI = `http://127.0.0.1:5000/Users/login`;


        axios.post(URI,{UserId:this.state.UserId,password:this.state.password,type:this.state.active === true ? "admin" : "user"})
        .then((res)=>{
            if(res.data != null){
                this.props.handler();
                M.toast({html:"Loged in"})
               localStorage.setItem('UserInfo', res.data._id);
               localStorage.setItem('UserType', res.data.type);
                console.log(res.data._id)
                this.props.history.push("/");


            }else{
                M.toast({html:"Invalid Username/Password"})
            }

        })
        // this.componentDidMount();
    }
    render(){
        return(
            <div className="box">
                <h2 className="center">Login</h2>
                <div >
                <form onSubmit={(e)=>this.submit(e,this.state.id)}>
                    <div className="row">
                    <div className="col s12 m6 l4"></div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">filter_vintage</i>
                                    <input required onChange={(e)=>this.UserIdchange(e)} minLength="10" maxLength="40" type="text" id="UserId" />
                                    <label htmlFor="UserId">Aadhar/Mobile/Email</label>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col s12 m6 l4"></div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">lock</i>
                                    <input required onChange={(e)=>this.passwordchange(e)} minLength="5" maxLength="15" type="password" id="password" />
                                    <label htmlFor="password">Password</label>
                            </div>
                        </div>


                    </div>

                    <div className="row">
                        <div className="col s12 m6 l4"></div>
                        <div className="col s12 m6 l4">

                        <button className="btn waves-effect waves-light right" type="submit" name="action">Login
                                <i className="material-icons right">send</i>
                        </button>
                        <p>
                            <label>
                                <input
                                checked={this.state.active}
                                onClick={this.handleCheckbox}
                                type="checkbox" />
                                <span>Admin</span>
                            </label>
                        </p>
                        <br/>
                        <br/>
                        <br/>
                        <a onClick={this.callMe} className="right waves-effect waves-teal btn-flat">Would you like to Sign up ?</a>
                       </div>
                    </div>

                </form>


                </div>
            </div>
        )
    }
}



export default withRouter(Login);
