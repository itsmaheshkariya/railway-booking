(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,a){e.exports=a(70)},44:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(35),i=a.n(l),r=(a(44),a(6)),c=a(7),o=a(9),m=a(8),u=a(19),d=a(10),h=a(15),g=a(18),E=a(21),p=a.n(E),f=a(36),b=a(13),v=a.n(b),N=(a(63),a(4)),y=a.n(N),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).firstnamechange=function(e){a.setState({firstname:e.target.value})},a.lastnamechange=function(e){a.setState({lastname:e.target.value})},a.aadharchange=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:12===t.target.value.length?(v.a.get("http://127.0.0.1:5000/user/checkaadhar/".concat(t.target.value)).then((function(e){null!=e.data?(a.setState({classAadhar:"not"}),y.a.toast({html:"Aadhar Not Valid"})):a.setState({classAadhar:"aadhar"})})),a.setState({aadhar:t.target.value})):t.target.value.length>12||a.setState({aadhar:t.target.value});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.mobilenochange=function(e){10===e.target.value.length?(v.a.get("http://127.0.0.1:5000/user/checkmobileno/".concat(e.target.value)).then((function(e){null!=e.data?(a.setState({classMobileno:"not"}),y.a.toast({html:"Mobileno Not Valid"})):a.setState({classMobileno:"mobileno"})})),a.setState({mobileno:e.target.value})):e.target.value.length>10||a.setState({mobileno:e.target.value})},a.emailchange=function(e){v.a.get("http://127.0.0.1:5000/user/checkemail/".concat(e.target.value)).then((function(e){null!=e.data?(a.setState({classEmail:"not"}),y.a.toast({html:"Email Not Valid"})):a.setState({classEmail:"email"})})),a.setState({email:e.target.value})},a.passwordchange=function(e){a.setState({password:e.target.value})},a.citychange=function(e){a.setState({address:Object(g.a)({},a.state.address,Object(h.a)({},"city",e.target.value))})},a.statechange=function(e){a.setState({address:Object(g.a)({},a.state.address,Object(h.a)({},"state",e.target.value))})},a.countrychange=function(e){a.setState({address:Object(g.a)({},a.state.address,Object(h.a)({},"country",e.target.value))})},a.pincodechange=function(e){a.setState({address:Object(g.a)({},a.state.address,Object(h.a)({},"pincode",e.target.value))})},a.state={classEmail:"",classMobileno:"",classAadhar:"",users:[],id:0,firstname:"",lastname:"",aadhar:null,mobileno:null,email:"",password:"",address:{country:"",state:"",city:"",pincode:null}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({classEmail:"",classMobileno:"",classAadhar:"",id:0,firstname:"",lastname:"",aadhar:null,mobileno:null,email:"",password:"",address:{country:"",state:"",city:"",pincode:null}})}},{key:"handleValidation",value:function(){var e=this.state,t={},a=!0;if(e.email||(a=!1,t.email="Cannot be empty"),"undefined"!==typeof e.email){var n=e.email.lastIndexOf("@"),s=e.email.lastIndexOf(".");n<s&&n>0&&-1===e.email.indexOf("@@")&&s>2&&e.email.length-s>2||(a=!1,t.email="Email is not valid")}return this.setState({errors:t}),a}},{key:"submit",value:function(e,t){var a=this;e.preventDefault(),this.handleValidation()?v.a.post("http://127.0.0.1:5000/user",{firstname:this.state.firstname,lastname:this.state.lastname,aadhar:this.state.aadhar,email:this.state.email,mobileno:this.state.mobileno,password:this.state.password,address:{city:this.state.address.city,state:this.state.address.state,country:this.state.address.country,pincode:this.state.address.pincode}}).then((function(){console.log("ok"),y.a.toast({html:"Registered Successfully"}),a.componentDidMount()})):y.a.toast({html:"Form has errors."})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h2",{className:"center"},"Registration"),s.a.createElement("div",{className:"container box"},s.a.createElement("form",{onSubmit:function(t){return e.submit(t,e.state.id)}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"person_add"),s.a.createElement("input",{required:!0,onChange:function(t){return e.firstnamechange(t)},value:this.state.firstname,minLength:"4",maxLength:"12",type:"text",id:"firstname",className:"firstname"}),s.a.createElement("label",{htmlFor:"firstname"},"First Name"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"person_add"),s.a.createElement("input",{required:!0,onChange:function(t){return e.lastnamechange(t)},value:this.state.lastname,minLength:"4",maxLength:"12",type:"text",id:"lastname",className:"lastname"}),s.a.createElement("label",{htmlFor:"lastname"},"Last Name"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"filter_vintage"),s.a.createElement("input",{required:!0,onChange:function(t){return e.aadharchange(t)},value:this.state.aadhar,minLength:"12",maxLength:"12",type:"number",id:"aadhar",className:this.state.classAadhar}),s.a.createElement("label",{htmlFor:"aadhar"},"Aadhar"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"call"),s.a.createElement("input",Object(h.a)({required:!0,onChange:function(t){return e.mobilenochange(t)},value:this.state.mobileno,minLength:"10",maxLength:"10",type:"number",id:"mobilenumber",className:"mobilenumber"},"className",this.state.classMobileno)),s.a.createElement("label",{htmlFor:"mobilenumber"},"Mobile Number"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"email"),s.a.createElement("input",Object(h.a)({required:!0,onChange:function(t){return e.emailchange(t)},value:this.state.email,minLength:"4",maxLength:"30",type:"email",id:"email",className:"email"},"className",this.state.classEmail)),s.a.createElement("label",{htmlFor:"email"},"Email"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"lock"),s.a.createElement("input",{required:!0,onChange:function(t){return e.passwordchange(t)},value:this.state.password,minLength:"5",maxLength:"12",type:"password",id:"password",className:"password"}),s.a.createElement("label",{htmlFor:"password"},"Password"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"public"),s.a.createElement("input",{required:!0,onChange:function(t){return e.countrychange(t)},value:this.state.address.country||"",minLength:"4",maxLength:"10",type:"text",id:"country",className:"country"}),s.a.createElement("label",{htmlFor:"country"},"Country"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"public"),s.a.createElement("input",{required:!0,onChange:function(t){return e.statechange(t)},value:this.state.address.state,minLength:"4",maxLength:"20",type:"text",id:"state",className:"state"}),s.a.createElement("label",{htmlFor:"state"},"State"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"place"),s.a.createElement("input",{required:!0,onChange:function(t){return e.citychange(t)},value:this.state.address.city,minLength:"4",maxLength:"12",type:"text",id:"city",className:"city"}),s.a.createElement("label",{htmlFor:"city"},"City"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"place"),s.a.createElement("input",{required:!0,onChange:function(t){return e.pincodechange(t)},value:this.state.address.pincode,minLength:"6",maxLength:"6",type:"number",id:"pincode",className:"pincode"}),s.a.createElement("label",{htmlFor:"pincode"},"Pin Code")))),s.a.createElement("button",{className:"btn waves-effect waves-light right",type:"submit",name:"action"},"Register",s.a.createElement("i",{className:"material-icons right"},"send")))))}}]),t}(s.a.Component),x=(a(64),a(11)),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).UserIdchange=function(e){a.setState({UserId:e.target.value})},a.passwordchange=function(e){a.setState({password:e.target.value})},a.state={UserId:"",password:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({UserId:"",password:""})}},{key:"submit",value:function(e,t){var a=this;e.preventDefault(),v.a.post("http://127.0.0.1:5000/user/login",{UserId:this.state.UserId,password:this.state.password}).then((function(e){null!=e.data?(a.props.handler(),y.a.toast({html:"Loged in"}),a.props.history.push("/booking")):y.a.toast({html:"Invalid Username/Password"})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h2",{className:"center"},"Login"),s.a.createElement("div",{className:"container box"},s.a.createElement("form",{onSubmit:function(t){return e.submit(t,e.state.id)}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12 m6 l4"}),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"filter_vintage"),s.a.createElement("input",{required:!0,onChange:function(t){return e.UserIdchange(t)},minLength:"10",maxLength:"40",type:"text",id:"UserId"}),s.a.createElement("label",{htmlFor:"UserId"},"Aadhar/Mobile/Email")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12 m6 l4"}),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"lock"),s.a.createElement("input",{required:!0,onChange:function(t){return e.passwordchange(t)},minLength:"5",maxLength:"15",type:"password",id:"password"}),s.a.createElement("label",{htmlFor:"password"},"Password")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12 m6 l4"}),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("button",{className:"btn waves-effect waves-light right",type:"submit",name:"action"},"Login",s.a.createElement("i",{className:"material-icons right"},"send")))))))}}]),t}(s.a.Component),L=Object(x.f)(w),O=(a(69),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"center"},s.a.createElement("h2",null,"Profile"),s.a.createElement("div",{className:"container-box"},s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col s6 m6 l4"}),s.a.createElement("div",{class:"col s6 m6 l4"},s.a.createElement("div",{class:"card-image"},s.a.createElement("img",{src:"https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&dpr=1&auto=format&fit=crop&w=416&h=312&q=60"}),s.a.createElement("span",{class:"card-title"},"Card Title"),s.a.createElement("a",{class:"btn-floating halfway-fab waves-effect waves-light red"},s.a.createElement("i",{class:"material-icons"},"add"))),s.a.createElement("div",{class:"card-content"},s.a.createElement("p",null,"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."))))))}}]),t}(s.a.Component)),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).sourcechange=function(e){a.setState({source:e.target.value})},a.destinationchange=function(e){a.setState({destination:e.target.value})},a.farechange=function(e){a.setState({fare:e.target.value})},a.noofpassengerschange=function(e){a.setState({noofpassengers:e.target.value})},a.bookingdatechange=function(e){a.setState({bookingdate:e.target.value})},a.bookingtimechange=function(e){a.setState({bookingtime:e.target.value})},a.useridchange=function(e){a.setState({userid:e.target.value})},a.trainnochange=function(e){a.setState({trainno:e.target.value})},a.trainnamechange=function(e){a.setState({trainname:e.target.value})},a.seatnochange=function(e){a.setState({seatno:e.target.value})},a.state={source:"",destination:"",noofpassengers:"",bookingdate:"",bookingtime:"",userid:"",trainno:"",trainname:"",seatno:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({source:"",destination:"",fare:"",noofpassengers:"",bookingdate:"",bookingtime:"",userid:"",trainno:"",trainname:"",seatno:""})}},{key:"submit",value:function(e,t){var a=this;e.preventDefault(),v.a.post("http://127.0.0.1:5000/booking",{source:this.state.source,destination:this.state.destination,fare:this.state.fare,noofpassengers:this.state.noofpassengers,bookingdate:this.state.bookingdate,bookingtime:this.state.bookingtime,userid:this.state.userid,trainno:this.state.trainno,trainname:this.state.trainname,seatno:this.state.seatno}).then((function(){console.log("ok"),y.a.toast({html:"Booked Successfully"}),a.props.history.push("/history"),a.componentDidMount()}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h2",{className:"center"},"Booking"),s.a.createElement("div",{className:"container box"},s.a.createElement("form",{onSubmit:function(t){return e.submit(t,e.state.id)}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"my_location"),s.a.createElement("input",{required:!0,onChange:function(t){return e.sourcechange(t)},value:this.state.source,minLength:"4",maxLength:"12",type:"text",id:"source",className:"source"}),s.a.createElement("label",{htmlFor:"source"},"Source"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"person_pin_circle"),s.a.createElement("input",{required:!0,onChange:function(t){return e.destinationchange(t)},value:this.state.destination,minLength:"4",maxLength:"12",type:"text",id:"destination",className:"destination"}),s.a.createElement("label",{htmlFor:"destination"},"Destination"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"person_pin_circle"),s.a.createElement("input",{required:!0,onChange:function(t){return e.farechange(t)},value:this.state.fare,minLength:"4",maxLength:"4",type:"number",id:"fare",className:"fare"}),s.a.createElement("label",{htmlFor:"fare"},"Fare"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"people"),s.a.createElement("input",{required:!0,onChange:function(t){return e.noofpassengerschange(t)},value:this.state.noofpassengers,minLength:"1",maxLength:"5",type:"text",id:"noofpassengers",className:"noofpassengers"}),s.a.createElement("label",{htmlFor:"noofpassengers"},"No of Passengers"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"today"),s.a.createElement("input",{required:!0,onChange:function(t){return e.bookingdatechange(t)},value:this.state.bookingdate,minLength:"4",maxLength:"12",type:"date",id:"bookingdate",className:"bookingdate"}),s.a.createElement("label",{htmlFor:"bookingdate"},"Booking Date"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"timer"),s.a.createElement("input",{required:!0,onChange:function(t){return e.bookingtimechange(t)},value:this.state.bookingtime,minLength:"4",maxLength:"12",type:"time",id:"bookingtime",className:"bookingtime"}),s.a.createElement("label",{htmlFor:"bookingtime"},"Booking Time"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"person_add"),s.a.createElement("input",{required:!0,onChange:function(t){return e.useridchange(t)},value:this.state.userid,minLength:"4",maxLength:"30",type:"text",id:"userid",className:"userid"}),s.a.createElement("label",{htmlFor:"userid"},"User Id"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"train"),s.a.createElement("input",{required:!0,onChange:function(t){return e.trainnochange(t)},value:this.state.trainno,minLength:"4",maxLength:"6",type:"number",id:"trainno",className:"trainno"}),s.a.createElement("label",{htmlFor:"trainno"},"Train Number"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"subway"),s.a.createElement("input",{required:!0,onChange:function(t){return e.trainnamechange(t)},value:this.state.trainname,minLength:"4",maxLength:"20",type:"text",id:"trainname",className:"trainname"}),s.a.createElement("label",{htmlFor:"trainname"},"Train Name"))),s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("i",{className:"material-icons prefix"},"airline_seat_recline_normal"),s.a.createElement("input",{required:!0,onChange:function(t){return e.seatnochange(t)},value:this.state.seatno,minLength:"1",maxLength:"3",type:"number",id:"seatno",className:"seatno"}),s.a.createElement("label",{htmlFor:"seatno"},"Seat Number")))),s.a.createElement("button",{className:"btn waves-effect waves-light right",type:"submit",name:"action"},"Book",s.a.createElement("i",{className:"material-icons right"},"send")))))}}]),t}(s.a.Component),S=Object(x.f)(j),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={historys:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:5000/booking/history").then((function(t){e.setState({historys:t.data})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("h2",{className:"center"},"History"),s.a.createElement("div",{className:"container-box"},s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col s6 m6 l4"}),s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Source"),s.a.createElement("th",null,"Destination"),s.a.createElement("th",null,"Fare"),s.a.createElement("th",null,"Date"))),s.a.createElement("tbody",null,this.state.historys.map((function(e){return s.a.createElement("tr",null,s.a.createElement("td",null,e.source),s.a.createElement("td",null,e.destination),s.a.createElement("td",null,e.fare),s.a.createElement("td",null,e.bookingdate))})))))))}}]),t}(s.a.Component),F=a(2),q=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={hidelink:!0},a.handler=a.handler.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){y.a.toast({html:this.state.hidelink})}},{key:"handler",value:function(){this.setState({someVar:"some value"})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(F.a,null,s.a.createElement("nav",null,s.a.createElement("div",{className:"nav-wrapper"},s.a.createElement("a",{href:"#",className:"brand-logo"},"Railway Booking"),s.a.createElement("a",{href:"#","data-target":"mobile-demo",className:"sidenav-trigger"},s.a.createElement("i",{className:"material-icons"},"menu")),s.a.createElement("ul",{className:"right hide-on-med-and-down"},s.a.createElement("li",null,s.a.createElement(F.b,{to:"/"},"Home")),s.a.createElement("li",null,!1===this.state.hidelink?s.a.createElement(F.b,{to:"/login"},"Login"):s.a.createElement(F.b,{to:"/logout"},"Logout")),s.a.createElement("li",null,s.a.createElement(F.b,{to:"/register"},"Register")),s.a.createElement("li",null,s.a.createElement(F.b,{to:"/booking"},"Booking")),s.a.createElement("li",null,s.a.createElement(F.b,{to:"/history"},"History"))))),s.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},s.a.createElement("li",null,s.a.createElement(F.b,{to:"/"},"Home"),!1===this.state.hidelink?s.a.createElement(F.b,{to:"/login"},"Login"):s.a.createElement(F.b,{to:"/logout"},"Logout"),s.a.createElement(F.b,{to:"/register"},"Register"),s.a.createElement(F.b,{to:"/booking"},"Booking"),s.a.createElement(F.b,{to:"/history"},"History"))),s.a.createElement(x.c,null,s.a.createElement(x.a,{path:"/history"},s.a.createElement(C,null)),s.a.createElement(x.a,{path:"/booking"},s.a.createElement(S,null)),s.a.createElement(x.a,{path:"/register"},s.a.createElement(k,null)),s.a.createElement(x.a,{path:"/login"},s.a.createElement(L,{handler:this.handler})),s.a.createElement(x.a,{path:"/"},s.a.createElement(O,null)))),s.a.createElement("h1",null,this.state.hidelink))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.eb3ba785.chunk.js.map