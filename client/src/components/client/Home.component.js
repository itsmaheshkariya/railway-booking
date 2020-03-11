import React from 'react';
import './css/Home.css';
import logo from './avatar.png';
import { withRouter } from 'react-router';
import axios from 'axios';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            aadhar:'',
            mobileno:'',
            email:'',
            address:{}

        }

    }
    componentDidMount(){
        if(localStorage.getItem('UserInfo') === undefined){
            this.props.history.push("/login");
        }
        else{
        let hold = localStorage.getItem('UserInfo')
        axios.get(`http://localhost:5000/Users/getAll/${hold}`)
        .then((res)=>{
            console.log(res.data)
            this.setState({
                firstname:res.data.firstname,
                lastname:res.data.lastname,
                aadhar:res.data.aadhar,
                mobileno:res.data.mobileno,
                email:res.data.email,
                address:res.data.address,
            })
        })
        if(localStorage.getItem('UserInfo') == null){
            this.props.history.push("/login");
        }
    }
    }
    render(){
        return(

            <div className="box">
                {/* <h2>Profile</h2> */}
                <div >

                <div>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />

          <div className="wrapper">
            <div className="profile-card js-profile-card">
              <div className="profile-card__img">
                <img src={logo} alt="profile card" />
              </div>
              <div className="profile-card__cnt js-profile-cnt">
        <div className="profile-card__name">{this.state.firstname.toUpperCase() +' '+ this.state.lastname.toUpperCase()}</div>
                <div className="profile-card__txt">Front-end Developer from <strong>Mesopotamia</strong></div>
                <div className="profile-card-loc">
                  <span className="profile-card-loc__icon">
                    <svg className="icon"><use xlinkHref="#icon-location" /></svg>
                  </span>
                  <span className="profile-card-loc__txt">
                  {this.state.address.city +' '+this.state.address.state+' '+this.state.address.country+' '+this.state.address.pincode}
                  </span>
                </div>
                <div className="profile-card-inf">
                  <div className="profile-card-inf__item">
                    <div className="profile-card-inf__title">{this.state.aadhar}</div>
                    <div className="profile-card-inf__txt">Aadhar</div>
                  </div>
                  <div className="profile-card-inf__item">
                    <div className="profile-card-inf__title">{this.state.mobileno}</div>
                    <div className="profile-card-inf__txt">Mobile</div>
                  </div>
                  <div className="profile-card-inf__item">
                    <div className="profile-card-inf__title">{this.state.email}</div>
                    <div className="profile-card-inf__txt">Email</div>
                  </div>
                  <div className="profile-card-inf__item">
                    <div className="profile-card-inf__title">85</div>
                    <div className="profile-card-inf__txt">Works</div>
                  </div>
                </div>
                <div className="profile-card-social">
                  <a href="https://www.facebook.com/iaMuhammedErdem" className="profile-card-social__item facebook" target="_blank">
                    <span className="icon-font">
                      <svg className="icon"><use xlinkHref="#icon-facebook" /></svg>
                    </span>
                  </a>
                  <a href="https://twitter.com/iaMuhammedErdem" className="profile-card-social__item twitter" target="_blank">
                    <span className="icon-font">
                      <svg className="icon"><use xlinkHref="#icon-twitter" /></svg>
                    </span>
                  </a>
                  <a href="https://www.instagram.com/iamuhammederdem" className="profile-card-social__item instagram" target="_blank">
                    <span className="icon-font">
                      <svg className="icon"><use xlinkHref="#icon-instagram" /></svg>
                    </span>
                  </a>
                  <a href="https://www.behance.net/iaMuhammedErdem" className="profile-card-social__item behance" target="_blank">
                    <span className="icon-font">
                      <svg className="icon"><use xlinkHref="#icon-behance" /></svg>
                    </span>
                  </a>
                  <a href="https://github.com/muhammederdem" className="profile-card-social__item github" target="_blank">
                    <span className="icon-font">
                      <svg className="icon"><use xlinkHref="#icon-github" /></svg>
                    </span>
                  </a>
                  <a href="https://codepen.io/JavaScriptJunkie" className="profile-card-social__item codepen" target="_blank">
                    <span className="icon-font">
                      <svg className="icon"><use xlinkHref="#icon-codepen" /></svg>
                    </span>
                  </a>
                  <a href="http://muhammederdem.com.tr/" className="profile-card-social__item link" target="_blank">
                    <span className="icon-font">
                      <svg className="icon"><use xlinkHref="#icon-link" /></svg>
                    </span>
                  </a>
                </div>
                <div className="profile-card-ctr">
                  <button className="profile-card__button button--blue js-message-btn">Message</button>
                  <button className="profile-card__button button--orange">Follow</button>
                </div>
              </div>
              <div className="profile-card-message js-message">
                <form className="profile-card-form">
                  <div className="profile-card-form__container">
                    <textarea placeholder="Say something..." defaultValue={""} />
                  </div>
                  <div className="profile-card-form__bottom">
                    <button className="profile-card__button button--blue js-message-close">
                      Send
                    </button>
                    <button className="profile-card__button button--gray js-message-close">
                      Cancel
                    </button>
                  </div>
                </form>
                <div className="profile-card__overlay js-message-close" />
              </div>
            </div>
          </div>

          <svg hidden="hidden">
            <defs>
              <symbol id="icon-codepen" viewBox="0 0 32 32">
                <title>codepen</title>
                <path d="M31.872 10.912v-0.032c0-0.064 0-0.064 0-0.096v-0.064c0-0.064 0-0.064-0.064-0.096 0 0 0-0.064-0.064-0.064 0-0.064-0.064-0.064-0.064-0.096 0 0 0-0.064-0.064-0.064 0-0.064-0.064-0.064-0.064-0.096l-0.192-0.192v-0.064l-0.064-0.064-14.592-9.696c-0.448-0.32-1.056-0.32-1.536 0l-14.528 9.696-0.32 0.32c0 0-0.064 0.064-0.064 0.096 0 0 0 0.064-0.064 0.064 0 0.064-0.064 0.064-0.064 0.096 0 0 0 0.064-0.064 0.064 0 0.064 0 0.064-0.064 0.096v0.064c0 0.064 0 0.064 0 0.096v0.064c0 0.064 0 0.096 0 0.16v9.696c0 0.064 0 0.096 0 0.16v0.064c0 0.064 0 0.064 0 0.096v0.064c0 0.064 0 0.064 0.064 0.096 0 0 0 0.064 0.064 0.064 0 0.064 0.064 0.064 0.064 0.096 0 0 0 0.064 0.064 0.064 0 0.064 0.064 0.064 0.064 0.096l0.256 0.256 0.064 0.032 14.528 9.728c0.224 0.16 0.48 0.224 0.768 0.224s0.544-0.064 0.768-0.224l14.528-9.728 0.32-0.32c0 0 0.064-0.064 0.064-0.096 0 0 0-0.064 0.064-0.064 0-0.064 0.064-0.064 0.064-0.096 0 0 0-0.064 0.064-0.064 0-0.064 0-0.064 0.064-0.096v-0.032c0-0.064 0-0.064 0-0.096v-0.064c0-0.064 0-0.096 0-0.16v-9.664c0-0.064 0-0.096 0-0.224zM17.312 4l10.688 7.136-4.768 3.168-5.92-3.936v-6.368zM14.56 4v6.368l-5.92 3.968-4.768-3.168 10.688-7.168zM2.784 13.664l3.392 2.304-3.392 2.304c0 0 0-4.608 0-4.608zM14.56 28l-10.688-7.136 4.768-3.2 5.92 3.936v6.4zM15.936 19.2l-4.832-3.232 4.832-3.232 4.832 3.232-4.832 3.232zM17.312 28v-6.432l5.92-3.936 4.8 3.168-10.72 7.2zM29.12 18.272l-3.392-2.304 3.392-2.304v4.608z" />
              </symbol>
              <symbol id="icon-github" viewBox="0 0 32 32">
                <title>github</title>
                <path d="M16.192 0.512c-8.832 0-16 7.168-16 16 0 7.072 4.576 13.056 10.944 15.168 0.8 0.16 1.088-0.352 1.088-0.768 0-0.384 0-1.632-0.032-2.976-4.448 0.96-5.376-1.888-5.376-1.888-0.736-1.856-1.792-2.336-1.792-2.336-1.44-0.992 0.096-0.96 0.096-0.96 1.6 0.128 2.464 1.664 2.464 1.664 1.44 2.432 3.744 1.728 4.672 1.344 0.128-1.024 0.544-1.728 1.024-2.144-3.552-0.448-7.296-1.824-7.296-7.936 0-1.76 0.64-3.168 1.664-4.288-0.16-0.416-0.704-2.016 0.16-4.224 0 0 1.344-0.416 4.416 1.632 1.28-0.352 2.656-0.544 4-0.544s2.72 0.192 4 0.544c3.040-2.080 4.384-1.632 4.384-1.632 0.864 2.208 0.32 3.84 0.16 4.224 1.024 1.12 1.632 2.56 1.632 4.288 0 6.144-3.744 7.488-7.296 7.904 0.576 0.512 1.088 1.472 1.088 2.976 0 2.144-0.032 3.872-0.032 4.384 0 0.416 0.288 0.928 1.088 0.768 6.368-2.112 10.944-8.128 10.944-15.168 0-8.896-7.168-16.032-16-16.032z" />
                <path d="M6.24 23.488c-0.032 0.064-0.16 0.096-0.288 0.064-0.128-0.064-0.192-0.16-0.128-0.256 0.032-0.096 0.16-0.096 0.288-0.064 0.128 0.064 0.192 0.16 0.128 0.256v0z" />
                <path d="M6.912 24.192c-0.064 0.064-0.224 0.032-0.32-0.064s-0.128-0.256-0.032-0.32c0.064-0.064 0.224-0.032 0.32 0.064s0.096 0.256 0.032 0.32v0z" />
                <path d="M7.52 25.12c-0.096 0.064-0.256 0-0.352-0.128s-0.096-0.32 0-0.384c0.096-0.064 0.256 0 0.352 0.128 0.128 0.128 0.128 0.32 0 0.384v0z" />
                <path d="M8.384 26.016c-0.096 0.096-0.288 0.064-0.416-0.064s-0.192-0.32-0.096-0.416c0.096-0.096 0.288-0.064 0.416 0.064 0.16 0.128 0.192 0.32 0.096 0.416v0z" />
                <path d="M9.6 26.528c-0.032 0.128-0.224 0.192-0.384 0.128-0.192-0.064-0.288-0.192-0.256-0.32s0.224-0.192 0.416-0.128c0.128 0.032 0.256 0.192 0.224 0.32v0z" />
                <path d="M10.912 26.624c0 0.128-0.16 0.256-0.352 0.256s-0.352-0.096-0.352-0.224c0-0.128 0.16-0.256 0.352-0.256 0.192-0.032 0.352 0.096 0.352 0.224v0z" />
                <path d="M12.128 26.4c0.032 0.128-0.096 0.256-0.288 0.288s-0.352-0.032-0.384-0.16c-0.032-0.128 0.096-0.256 0.288-0.288s0.352 0.032 0.384 0.16v0z" />
              </symbol>
              <symbol id="icon-location" viewBox="0 0 32 32">
                <title>location</title>
                <path d="M16 31.68c-0.352 0-0.672-0.064-1.024-0.16-0.8-0.256-1.44-0.832-1.824-1.6l-6.784-13.632c-1.664-3.36-1.568-7.328 0.32-10.592 1.856-3.2 4.992-5.152 8.608-5.376h1.376c3.648 0.224 6.752 2.176 8.608 5.376 1.888 3.264 2.016 7.232 0.352 10.592l-6.816 13.664c-0.288 0.608-0.8 1.12-1.408 1.408-0.448 0.224-0.928 0.32-1.408 0.32zM15.392 2.368c-2.88 0.192-5.408 1.76-6.912 4.352-1.536 2.688-1.632 5.92-0.288 8.672l6.816 13.632c0.128 0.256 0.352 0.448 0.64 0.544s0.576 0.064 0.832-0.064c0.224-0.096 0.384-0.288 0.48-0.48l6.816-13.664c1.376-2.752 1.248-5.984-0.288-8.672-1.472-2.56-4-4.128-6.88-4.32h-1.216zM16 17.888c-3.264 0-5.92-2.656-5.92-5.92 0-3.232 2.656-5.888 5.92-5.888s5.92 2.656 5.92 5.92c0 3.264-2.656 5.888-5.92 5.888zM16 8.128c-2.144 0-3.872 1.728-3.872 3.872s1.728 3.872 3.872 3.872 3.872-1.728 3.872-3.872c0-2.144-1.76-3.872-3.872-3.872z" />
                <path d="M16 32c-0.384 0-0.736-0.064-1.12-0.192-0.864-0.288-1.568-0.928-1.984-1.728l-6.784-13.664c-1.728-3.456-1.6-7.52 0.352-10.912 1.888-3.264 5.088-5.28 8.832-5.504h1.376c3.744 0.224 6.976 2.24 8.864 5.536 1.952 3.36 2.080 7.424 0.352 10.912l-6.784 13.632c-0.32 0.672-0.896 1.216-1.568 1.568-0.48 0.224-0.992 0.352-1.536 0.352zM15.36 0.64h-0.064c-3.488 0.224-6.56 2.112-8.32 5.216-1.824 3.168-1.952 7.040-0.32 10.304l6.816 13.632c0.32 0.672 0.928 1.184 1.632 1.44s1.472 0.192 2.176-0.16c0.544-0.288 1.024-0.736 1.28-1.28l6.816-13.632c1.632-3.264 1.504-7.136-0.32-10.304-1.824-3.104-4.864-5.024-8.384-5.216h-1.312zM16 29.952c-0.16 0-0.32-0.032-0.448-0.064-0.352-0.128-0.64-0.384-0.8-0.704l-6.816-13.664c-1.408-2.848-1.312-6.176 0.288-8.96 1.536-2.656 4.16-4.32 7.168-4.512h1.216c3.040 0.192 5.632 1.824 7.2 4.512 1.6 2.752 1.696 6.112 0.288 8.96l-6.848 13.632c-0.128 0.288-0.352 0.512-0.64 0.64-0.192 0.096-0.384 0.16-0.608 0.16zM15.424 2.688c-2.784 0.192-5.216 1.696-6.656 4.192-1.504 2.592-1.6 5.696-0.256 8.352l6.816 13.632c0.096 0.192 0.256 0.32 0.448 0.384s0.416 0.064 0.608-0.032c0.16-0.064 0.288-0.192 0.352-0.352l6.816-13.664c1.312-2.656 1.216-5.792-0.288-8.352-1.472-2.464-3.904-4-6.688-4.16h-1.152zM16 18.208c-3.424 0-6.24-2.784-6.24-6.24 0-3.424 2.816-6.208 6.24-6.208s6.24 2.784 6.24 6.24c0 3.424-2.816 6.208-6.24 6.208zM16 6.4c-3.072 0-5.6 2.496-5.6 5.6 0 3.072 2.528 5.6 5.6 5.6s5.6-2.496 5.6-5.6c0-3.104-2.528-5.6-5.6-5.6zM16 16.16c-2.304 0-4.16-1.888-4.16-4.16s1.888-4.16 4.16-4.16c2.304 0 4.16 1.888 4.16 4.16s-1.856 4.16-4.16 4.16zM16 8.448c-1.952 0-3.552 1.6-3.552 3.552s1.6 3.552 3.552 3.552c1.952 0 3.552-1.6 3.552-3.552s-1.6-3.552-3.552-3.552z" />
              </symbol>
              <symbol id="icon-facebook" viewBox="0 0 32 32">
                <title>facebook</title>
                <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z" />
              </symbol>
              <symbol id="icon-instagram" viewBox="0 0 32 32">
                <title>instagram</title>
                <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z" />
                <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z" />
                <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z" />
              </symbol>
              <symbol id="icon-twitter" viewBox="0 0 32 32">
                <title>twitter</title>
                <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z" />
              </symbol>
              <symbol id="icon-behance" viewBox="0 0 32 32">
                <title>behance</title>
                <path d="M9.281 6.412c0.944 0 1.794 0.081 2.569 0.25 0.775 0.162 1.431 0.438 1.988 0.813 0.55 0.375 0.975 0.875 1.287 1.5 0.3 0.619 0.45 1.394 0.45 2.313 0 0.994-0.225 1.819-0.675 2.481-0.456 0.662-1.119 1.2-2.006 1.625 1.213 0.35 2.106 0.962 2.706 1.831 0.6 0.875 0.887 1.925 0.887 3.163 0 1-0.194 1.856-0.575 2.581-0.387 0.731-0.912 1.325-1.556 1.781-0.65 0.462-1.4 0.8-2.237 1.019-0.831 0.219-1.688 0.331-2.575 0.331h-9.544v-19.688h9.281zM8.719 14.363c0.769 0 1.406-0.181 1.906-0.55 0.5-0.363 0.738-0.963 0.738-1.787 0-0.456-0.081-0.838-0.244-1.131-0.169-0.294-0.387-0.525-0.669-0.688-0.275-0.169-0.588-0.281-0.956-0.344-0.356-0.069-0.731-0.1-1.113-0.1h-4.050v4.6h4.388zM8.956 22.744c0.425 0 0.831-0.038 1.213-0.125 0.387-0.087 0.731-0.219 1.019-0.419 0.287-0.194 0.531-0.45 0.706-0.788 0.175-0.331 0.256-0.756 0.256-1.275 0-1.012-0.287-1.738-0.856-2.175-0.569-0.431-1.325-0.644-2.262-0.644h-4.7v5.419h4.625z" />
                <path d="M22.663 22.675c0.587 0.575 1.431 0.863 2.531 0.863 0.788 0 1.475-0.2 2.044-0.6s0.913-0.825 1.044-1.262h3.45c-0.556 1.719-1.394 2.938-2.544 3.675-1.131 0.738-2.519 1.113-4.125 1.113-1.125 0-2.131-0.181-3.038-0.538-0.906-0.363-1.663-0.869-2.3-1.531-0.619-0.663-1.106-1.45-1.45-2.375-0.337-0.919-0.512-1.938-0.512-3.038 0-1.069 0.175-2.063 0.525-2.981 0.356-0.925 0.844-1.719 1.494-2.387s1.413-1.2 2.313-1.588c0.894-0.387 1.881-0.581 2.975-0.581 1.206 0 2.262 0.231 3.169 0.706 0.9 0.469 1.644 1.1 2.225 1.887s0.994 1.694 1.25 2.706c0.256 1.012 0.344 2.069 0.275 3.175h-10.294c0 1.119 0.375 2.188 0.969 2.756zM27.156 15.188c-0.462-0.512-1.256-0.794-2.212-0.794-0.625 0-1.144 0.106-1.556 0.319-0.406 0.213-0.738 0.475-0.994 0.787-0.25 0.313-0.425 0.65-0.525 1.006-0.1 0.344-0.163 0.663-0.181 0.938h6.375c-0.094-1-0.438-1.738-0.906-2.256z" />
                <path d="M20.887 8h7.981v1.944h-7.981v-1.944z" />
              </symbol>
              <symbol id="icon-link" viewBox="0 0 32 32">
                <title>link</title>
                <path d="M17.984 11.456c-0.704 0.704-0.704 1.856 0 2.56 2.112 2.112 2.112 5.568 0 7.68l-5.12 5.12c-2.048 2.048-5.632 2.048-7.68 0-1.024-1.024-1.6-2.4-1.6-3.84s0.576-2.816 1.6-3.84c0.704-0.704 0.704-1.856 0-2.56s-1.856-0.704-2.56 0c-1.696 1.696-2.624 3.968-2.624 6.368 0 2.432 0.928 4.672 2.656 6.4 1.696 1.696 3.968 2.656 6.4 2.656s4.672-0.928 6.4-2.656l5.12-5.12c3.52-3.52 3.52-9.248 0-12.8-0.736-0.672-1.888-0.672-2.592 0.032z" />
                <path d="M29.344 2.656c-1.696-1.728-3.968-2.656-6.4-2.656s-4.672 0.928-6.4 2.656l-5.12 5.12c-3.52 3.52-3.52 9.248 0 12.8 0.352 0.352 0.8 0.544 1.28 0.544s0.928-0.192 1.28-0.544c0.704-0.704 0.704-1.856 0-2.56-2.112-2.112-2.112-5.568 0-7.68l5.12-5.12c2.048-2.048 5.632-2.048 7.68 0 1.024 1.024 1.6 2.4 1.6 3.84s-0.576 2.816-1.6 3.84c-0.704 0.704-0.704 1.856 0 2.56s1.856 0.704 2.56 0c1.696-1.696 2.656-3.968 2.656-6.4s-0.928-4.704-2.656-6.4z" />
              </symbol>
            </defs>
          </svg>
          <style dangerouslySetInnerHTML={{__html: "\n  @import url(\"https://fonts.googleapis.com/css?family=Quicksand:400,500,700&subset=latin-ext\");\nhtml {\n  position: relative;\n  overflow-x: hidden !important;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Quicksand', sans-serif;\n  color: #324e63;\n}\n\na, a:hover {\n  text-decoration: none;\n}\n\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n\n.wrapper {\n  width: 100%;\n  width: 100%;\n  height: auto;\n  min-height: 100vh;\n  padding: 50px 20px;\n  padding-top: 100px;\n  display: flex;\n  background-image: linear-gradient(-20deg, #ff2846 0%, #6944ff 100%);\n  display: flex;\n  background-image: linear-gradient(-20deg, #ff2846 0%, #6944ff 100%);\n}\n@media screen and (max-width: 768px) {\n  .wrapper {\n    height: auto;\n    min-height: 100vh;\n    padding-top: 100px;\n  }\n}\n\n.profile-card {\n  width: 100%;\n  min-height: 460px;\n  margin: auto;\n  box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);\n  background: #fff;\n  border-radius: 12px;\n  max-width: 700px;\n  position: relative;\n}\n.profile-card.active .profile-card__cnt {\n  filter: blur(6px);\n}\n.profile-card.active .profile-card-message,\n.profile-card.active .profile-card__overlay {\n  opacity: 1;\n  pointer-events: auto;\n  transition-delay: .1s;\n}\n.profile-card.active .profile-card-form {\n  transform: none;\n  transition-delay: .1s;\n}\n.profile-card__img {\n  width: 150px;\n  height: 150px;\n  margin-left: auto;\n  margin-right: auto;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  overflow: hidden;\n  position: relative;\n  z-index: 4;\n  box-shadow: 0px 5px 50px 0px #6c44fc, 0px 0px 0px 7px rgba(107, 74, 255, 0.5);\n}\n@media screen and (max-width: 576px) {\n  .profile-card__img {\n    width: 120px;\n    height: 120px;\n  }\n}\n.profile-card__img img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.profile-card__cnt {\n  margin-top: -35px;\n  text-align: center;\n  padding: 0 20px;\n  padding-bottom: 40px;\n  transition: all .3s;\n}\n.profile-card__name {\n  font-weight: 700;\n  font-size: 24px;\n  color: #6944ff;\n  margin-bottom: 15px;\n}\n.profile-card__txt {\n  font-size: 18px;\n  font-weight: 500;\n  color: #324e63;\n  margin-bottom: 15px;\n}\n.profile-card__txt strong {\n  font-weight: 700;\n}\n.profile-card-loc {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: 600;\n}\n.profile-card-loc__icon {\n  display: inline-flex;\n  font-size: 27px;\n  margin-right: 10px;\n}\n.profile-card-inf {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  margin-top: 35px;\n}\n.profile-card-inf__item {\n  padding: 10px 35px;\n  min-width: 150px;\n}\n@media screen and (max-width: 768px) {\n  .profile-card-inf__item {\n    padding: 10px 20px;\n    min-width: 120px;\n  }\n}\n.profile-card-inf__title {\n  font-weight: 700;\n  font-size: 27px;\n  color: #324e63;\n}\n.profile-card-inf__txt {\n  font-weight: 500;\n  margin-top: 7px;\n}\n.profile-card-social {\n  margin-top: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.profile-card-social__item {\n  display: inline-flex;\n  width: 55px;\n  height: 55px;\n  margin: 15px;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background: #405de6;\n  box-shadow: 0px 7px 30px rgba(43, 98, 169, 0.5);\n  position: relative;\n  font-size: 21px;\n  flex-shrink: 0;\n  transition: all .3s;\n}\n@media screen and (max-width: 768px) {\n  .profile-card-social__item {\n    width: 50px;\n    height: 50px;\n    margin: 10px;\n  }\n}\n@media screen and (min-width: 768px) {\n  .profile-card-social__item:hover {\n    transform: scale(1.2);\n  }\n}\n.profile-card-social__item.facebook {\n  background: linear-gradient(45deg, #3b5998, #0078d7);\n  box-shadow: 0px 4px 30px rgba(43, 98, 169, 0.5);\n}\n.profile-card-social__item.twitter {\n  background: linear-gradient(45deg, #1da1f2, #0e71c8);\n  box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.7);\n}\n.profile-card-social__item.instagram {\n  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);\n  box-shadow: 0px 4px 30px rgba(120, 64, 190, 0.6);\n}\n.profile-card-social__item.behance {\n  background: linear-gradient(45deg, #1769ff, #213fca);\n  box-shadow: 0px 4px 30px rgba(27, 86, 231, 0.7);\n}\n.profile-card-social__item.github {\n  background: linear-gradient(45deg, #333333, #626b73);\n  box-shadow: 0px 4px 30px rgba(63, 65, 67, 0.6);\n}\n.profile-card-social__item.codepen {\n  background: linear-gradient(45deg, #324e63, #414447);\n  box-shadow: 0px 4px 30px rgba(55, 75, 90, 0.6);\n}\n.profile-card-social__item.link {\n  background: linear-gradient(45deg, #d5135a, #f05924);\n  box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.6);\n}\n.profile-card-social .icon-font {\n  display: inline-flex;\n}\n.profile-card-ctr {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 40px;\n}\n@media screen and (max-width: 576px) {\n  .profile-card-ctr {\n    flex-wrap: wrap;\n  }\n}\n.profile-card__button {\n  background: none;\n  border: none;\n  font-family: 'Quicksand', sans-serif;\n  font-weight: 700;\n  font-size: 19px;\n  margin: 15px 35px;\n  padding: 15px 40px;\n  min-width: 201px;\n  border-radius: 50px;\n  min-height: 55px;\n  color: #fff;\n  cursor: pointer;\n  backface-visibility: hidden;\n  transition: all .3s;\n}\n@media screen and (max-width: 768px) {\n  .profile-card__button {\n    min-width: 170px;\n    margin: 15px 25px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .profile-card__button {\n    min-width: inherit;\n    margin: 0;\n    margin-bottom: 16px;\n    width: 100%;\n    max-width: 300px;\n  }\n  .profile-card__button:last-child {\n    margin-bottom: 0;\n  }\n}\n.profile-card__button:focus {\n  outline: none !important;\n}\n@media screen and (min-width: 768px) {\n  .profile-card__button:hover {\n    transform: translateY(-5px);\n  }\n}\n.profile-card__button:first-child {\n  margin-left: 0;\n}\n.profile-card__button:last-child {\n  margin-right: 0;\n}\n.profile-card__button.button--blue {\n  background: linear-gradient(45deg, #1da1f2, #0e71c8);\n  box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.4);\n}\n.profile-card__button.button--blue:hover {\n  box-shadow: 0px 7px 30px rgba(19, 127, 212, 0.75);\n}\n.profile-card__button.button--orange {\n  background: linear-gradient(45deg, #d5135a, #f05924);\n  box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.35);\n}\n.profile-card__button.button--orange:hover {\n  box-shadow: 0px 7px 30px rgba(223, 45, 70, 0.75);\n}\n.profile-card__button.button--gray {\n  box-shadow: none;\n  background: #dcdcdc;\n  color: #142029;\n}\n.profile-card-message {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-top: 130px;\n  padding-bottom: 100px;\n  opacity: 0;\n  pointer-events: none;\n  transition: all .3s;\n}\n.profile-card-form {\n  box-shadow: 0 4px 30px rgba(15, 22, 56, 0.35);\n  max-width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  background: #fff;\n  border-radius: 10px;\n  padding: 35px;\n  transform: scale(0.8);\n  position: relative;\n  z-index: 3;\n  transition: all .3s;\n}\n@media screen and (max-width: 768px) {\n  .profile-card-form {\n    max-width: 90%;\n    height: auto;\n  }\n}\n@media screen and (max-width: 576px) {\n  .profile-card-form {\n    padding: 20px;\n  }\n}\n.profile-card-form__bottom {\n  justify-content: space-between;\n  display: flex;\n}\n@media screen and (max-width: 576px) {\n  .profile-card-form__bottom {\n    flex-wrap: wrap;\n  }\n}\n.profile-card textarea {\n  width: 100%;\n  resize: none;\n  height: 210px;\n  margin-bottom: 20px;\n  border: 2px solid #dcdcdc;\n  border-radius: 10px;\n  padding: 15px 20px;\n  color: #324e63;\n  font-weight: 500;\n  font-family: 'Quicksand', sans-serif;\n  outline: none;\n  transition: all .3s;\n}\n.profile-card textarea:focus {\n  outline: none;\n  border-color: #8a979e;\n}\n.profile-card__overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  opacity: 0;\n  background: rgba(22, 33, 72, 0.35);\n  border-radius: 12px;\n  transition: all .3s;\n}\n\n" }} />
        </div>
                    </div>

                </div>


        )
    }
}
export default withRouter(Home);
