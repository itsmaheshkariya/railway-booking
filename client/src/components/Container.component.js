import React from "react";
import Register from "./client/Register.component";
import Login from "./client/Login.component";
import Home from "./client/Home.component";
import Booking from "./client/Booking.component";
import TableData from "./client/TableData.component";
import TableData1 from "./client/TableData1.component";
import TableData2 from "./client/TableData2.component";
import Train from "./client/Train.component";
import "./client/css/Container.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import M from "materialize-css";
import axios from "axios";
//import Train from './client/Train.component';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: Boolean
    };

    this.handler = this.handler.bind(this);
    this.loghandler = this.loghandler.bind(this);
    // this.logOut = this.logOut.bind(this);
  }

  // constructor(props)
  // {
  //     super(props)
  //     this.state({
  //         show:false
  //     })

  // }
  componentDidMount() {
    let hold = localStorage.getItem("UserInfo");
    console.log(hold);
    if (hold === null) {
      this.setState({
        show: true
      });
    } else {
      this.setState({
        show: false
      });
    }

    // M.toast({html:this.state.show})
    // store = await axios.get('http://127.0.0.1:5000/Users/chechlogedin')
    // if(store === true){

    // }
  }

  loghandler() {
    this.setState({
      show: true
    });
  }
  handler() {
    this.setState({
      show: false
    });
  }

  async logOut(e) {
    e.preventDefault();
    let store = await axios.get("http://localhost:5000/Users/logout");
    if (store.data.message === "loggedout") {
      this.setState({
        show: true
      });

      M.toast({ html: store.data.message });
    }
  }
  render() {
    return (
      <div>
        <Router>
          <nav className="pink lighten-1">
            <div className="nav-wrapper">
              <a href="#" className="logo">
                Railway Booking
              </a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  {this.state.show === false ? (
                    <Link className="menu-item" to="/">
                      Home
                    </Link>
                  ) : (
                    <Link to="/"></Link>
                  )}
                </li>

                <li>
                  {localStorage.getItem('UserType') === 'admin' ? (
                    <Link className="menu-item" to="/Trains">
                      Trains
                    </Link>
                  ) : null}
                </li>

                <li>
                  {this.state.show === false ? (
                    <Link className="menu-item" to="/booking">
                      Booking
                    </Link>
                  ) : null}
                </li>

                <li>
                  {this.state.show === false ? (
                    <Link className="menu-item" to="/history">
                      History
                    </Link>
                  ) : null}
                </li>
                <li>
                  {localStorage.getItem('UserType') === 'admin' ? (
                    <Link className="menu-item" to="/getall">
                      Users
                    </Link>
                  ) : null}
                </li>
                <li>
                  {localStorage.getItem('UserType') === 'admin' ? (
                    <Link className="menu-item" to="/getallbookings">
                      Bookings
                    </Link>
                  ) : null}
                </li>
                <li>
                  {this.state.show === false ? (
                    <Link className="menu-item" to="/logout">
                      Logout
                    </Link>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
          </nav>

          <ul className="sidenav" id="mobile-demo">
            <li>
              {this.state.show === false ? (
                <Link className="menu-item" to="/">
                  Home
                </Link>
              ) : (
                <Link to="/"></Link>
              )}

              {this.state.show === true ? (
                <Link className="menu-item" to="/login/in">
                  Login
                </Link>
              ) : (
                <Link className="menu-item" to="/login/out">
                  Logout
                </Link>
              )}

              <Link className="menu-item" to="/register">
                Register
              </Link>
              <Link className="menu-item" to="/booking">
                Booking
              </Link>
              <Link className="menu-item" to="/history">
                History
              </Link>
              <Link className="menu-item" to="/Trains">
                Trains
              </Link>
            </li>
          </ul>
          <Switch>
            <Route path="/history">
              {/* {this.props.history.delete} */}
              <TableData
                title="History"
                rows={[
                  "source",
                  "destination",
                  "fare",
                  "bookingdate",
                  "delete"
                ]}
                url="http://localhost:5000/booking/history"
              />
            </Route>

            <Route path="/getall">
              <TableData1
                title="Users"
                rows={[
                  "firstname",
                  "lastname",
                  "aadhar",
                  "mobileno",
                  "email",
                  "password",
                  "type",
                  "delete"
                ]}
                url="http://localhost:5000/getall"
              />
            </Route>
            <Route path="/getallbookings">
              <TableData2
                title="Bookings"
                rows={[
                  "source",
                  "destination",
                  "fare",
                  "noofpassengers",
                  "bookingdate",
                  "bookingtime",
                  "trainno",
                  "seatno",
                  "delete"
                ]}
                url={`http://localhost:5000/booking/history/${localStorage.getItem(
                  "UserInfo"
                )}`}
              />
            </Route>

            <Route path="/booking">
              <Booking />
            </Route>
            <Route path="/Trains">
              <Train
                title="Trains"
                rows={[
                  "trainname",
                  "origin",
                  "destination",
                  "trainno",
                  "servicetype",
                  "arrivaltime",
                  "arrivalday",
                  "departuretime",
                  "departureday",
                  "delete"
                ]}
                url={"http://localhost:5000/Trains"}
              />
            </Route>

            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login
                logged="in"
                loghandler={this.loghandler}
                handler={this.handler}
              />
            </Route>

            <Route path="/logout">
              <Login
                logged="out"
                loghandler={this.loghandler}
                handler={this.handler}
              />
            </Route>
            <Route path="/">
              <Home typeofuser="user" />
            </Route>
          </Switch>
        </Router>

        <h1>{this.state.show}</h1>
      </div>
    );
  }
}

export default Container;
