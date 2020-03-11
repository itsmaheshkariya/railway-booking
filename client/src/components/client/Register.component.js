import React from 'react';
import axios from 'axios';
import './css/Register.css'
import M from 'materialize-css';
import { withRouter } from 'react-router';
import $ from 'jquery';
class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            active:false,
            classEmail:'',
            classMobileno:'',
            classAadhar:'',
            users:[],
            id:0,
            firstname:'',
            lastname:'',
            aadhar:null,
            mobileno:null,
            email:'',
            password:'',
            address:{
                country:'',
                state:'',
                city:'',
                pincode:null
            }
        }
        this.callMe = this.callMe.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)

    }
    async handleCheckbox(){
        await this.setState({
            active:!this.state.active
        });
        console.log(this.state.active)


    }
    componentDidMount(){

        this.setState({
            active:false,
            classEmail:'',
            classMobileno:'',
            classAadhar:'',
            id:0,
            firstname:'',
            lastname:'',
            aadhar:null,
            mobileno:null,
            email:'',
            password:'',
            address:{
                country:'',
                state:'',
                city:'',
                pincode:null
            }
        })
        console.log(this.state.active)

    }
    handleValidation(){
        let fields = this.state;
        let errors = {};
        let formIsValid = true;


        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }

       this.setState({errors: errors});
       return formIsValid;
   }


    firstnamechange = event =>{
        this.setState({
          firstname:event.target.value
        })
    }
    lastnamechange = event =>{
        this.setState({
            lastname:event.target.value
        })
    }
    aadharchange = async (event) =>{

        if(event.target.value.length === 12){

            axios.get(`http://127.0.0.1:5000/Users/checkaadhar/${event.target.value}`)
            .then((res)=>{
                if(res.data != null){
                    this.setState({classAadhar:'not'})
                    M.toast({html: "Aadhar Not Valid"})
                }else{
                    this.setState({classAadhar:'aadhar'})
                }
            })
            this.setState({
                aadhar:event.target.value
            })


        }else if(event.target.value.length > 12 ){

        }else{
            this.setState({
                aadhar:event.target.value
            })
        }

    }
    mobilenochange = event =>{
        if(event.target.value.length === 10){

        axios.get(`http://127.0.0.1:5000/Users/checkmobileno/${event.target.value}`)
        .then((res)=>{
            if(res.data != null){
                this.setState({classMobileno:'not'})
                M.toast({html: "Mobileno Not Valid"})
            }else{
                this.setState({classMobileno:'mobileno'})
            }
        })
        this.setState({
            mobileno:event.target.value
        })
        }else if(event.target.value.length > 10){

        }else{
            this.setState({
                mobileno:event.target.value
            })
        }
    }
    emailchange = event =>{
        axios.get(`http://127.0.0.1:5000/Users/checkemail/${event.target.value}`)
        .then((res)=>{
            if(res.data != null){
                this.setState({classEmail:'not'})
                M.toast({html: "Email Not Valid"})
            }else{
                this.setState({classEmail:'email'})
            }
        })
        this.setState({
            email:event.target.value
        })
    }
    passwordchange = event =>{
        this.setState({
            password:event.target.value
        })
    }
    citychange = event =>{
        this.setState({
            address:{...this.state.address, ['city']: event.target.value}        })
    }
    statechange = event =>{
        this.setState({
            address:{...this.state.address, ['state']: event.target.value}        })
    }
    countrychange = event =>{
        this.setState({
            address:{...this.state.address, ['country']: event.target.value}
        })
    }
    pincodechange = event =>{
        this.setState({
            address:{...this.state.address, ['pincode']: event.target.value}
        })
    }




    submit(event,id){
        event.preventDefault()

        if(this.handleValidation()){

        axios.post(`http://127.0.0.1:5000/Users/`,{
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            aadhar:this.state.aadhar,
            email:this.state.email,
            mobileno:this.state.mobileno,
            password:this.state.password,
            type:this.props.typeofuser,
            address:{
                city:this.state.address.city,
                state:this.state.address.state,
                country:this.state.address.country,
                pincode:this.state.address.pincode,

            },
            type:this.state.active === false ?"user":"admin"
        })
        .then(()=>{
            M.toast({html: 'Registered Successfully'})
            this.componentDidMount();
            this.props.history.push('/login')
        })


        }else{
            M.toast({html: "Form has errors."})

        }
      }
      callMe()
      {
          this.props.history.push("/login")
      }
    render(){

        return(

            <div className="box">
                <h2 className="center">Registration</h2>
                <div >
                <form onSubmit={(e)=>this.submit(e,this.state.id)}>
                    <div className="row">
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">person_add</i>
                                    <input required onChange={(e)=>this.firstnamechange(e)} value={this.state.firstname} minLength="4" maxLength="12" type="text" id="firstname" className="firstname" />
                                    <label htmlFor="firstname">First Name</label>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">person_add</i>
                                <input required onChange={(e)=>this.lastnamechange(e)} value={this.state.lastname} minLength="4" maxLength="12" type="text" id="lastname" className="lastname" />
                                <label  htmlFor="lastname">Last Name</label>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">filter_vintage</i>
                                    <input required onChange={(e)=>this.aadharchange(e)} value={this.state.aadhar} minLength="12" maxLength="12" type="number" id="aadhar" className={this.state.classAadhar} />
                                    <label htmlFor="aadhar">Aadhar</label>
                            </div>
                        </div>

                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">call</i>
                                    <input required onChange={(e)=>this.mobilenochange(e)} value={this.state.mobileno} minLength="10" maxLength="10" type="number" id="mobilenumber" className="mobilenumber" className={this.state.classMobileno} />
                                    <label htmlFor="mobilenumber">Mobile Number</label>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">email</i>
                                <input required onChange={(e)=>this.emailchange(e)} value={this.state.email} minLength="4" maxLength="30" type="email" id="email" className="email" className={this.state.classEmail} />
                                <label  htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">lock</i>
                                    <input required onChange={(e)=>this.passwordchange(e)} value={this.state.password} minLength="5" maxLength="12" type="password" id="password" className="password" />
                                    <label htmlFor="password">Password</label>
                            </div>
                        </div>

                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">public</i>
                                    <input  required onChange={(e)=>this.countrychange(e)} value={this.state.address.country || ''} minLength="4" maxLength="10" type="text"  id="autocomplete-input" className="autocomplete" />
                                    <label htmlFor="autocomplete-input">Country</label>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">public</i>
                                <input required onChange={(e)=>this.statechange(e)} value={this.state.address.state} minLength="4" maxLength="20" type="text" id="state" className="state" />
                                <label  htmlFor="state">State</label>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">place</i>
                                    <input required onChange={(e)=>this.citychange(e)} value={this.state.address.city} minLength="4" maxLength="12" type="text" id="city" className="city" />
                                    <label htmlFor="city">City</label>
                            </div>
                        </div>
                        <div className="col s12 m6 l4">
                            <div className="input-field col s12">
                                    <i className="material-icons prefix">place</i>
                                    <input required onChange={(e)=>this.pincodechange(e)} value={this.state.address.pincode} minLength="6" maxLength="6" type="number" id="pincode" className="pincode" />
                                    <label htmlFor="pincode">Pin Code</label>
                            </div>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light right" type="submit" name="action">Register
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
                        <a onClick={this.callMe} className="right waves-effect waves-teal btn-flat">Would you like to Log in ?</a>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Register)
