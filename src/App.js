import { onAuthStateChanged } from "@firebase/auth";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./default.scss";
import { authconst } from "./services/firebase/config";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import Registration from "./views/Registration";

const initialState = {
  currentUser: null,
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = onAuthStateChanged(authconst, (userAuth) => {
      if (!userAuth) {
        this.setState({ ...initialState });
      }
      this.setState({
        currentUser: userAuth,
      });
      console.log(userAuth);
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Header currentUser={currentUser} />
          <Routes>
            <Route path="/" element={<Homepage />} currentUser={currentUser} />
            <Route
              path="/registration"
              element={<Registration />}
              currentUser={currentUser}
            />
            <Route
              path="/login" element={<Login />}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
