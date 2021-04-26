import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import StoryReal from "./components/MainBody/StoryReal/StoryReal";
import MainBody from "./components/MainBody/MainBody";
import Widget from "./components/widget/Widget";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

const Routing = () => {
  const history = useHistory();
  const abc = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  

  

  useEffect(() => {
    const user=JSON.parse(localStorage.getItem("user"))
    
    if(user){
      dispatch({type: "SET__USER", payload:user})
    }

    else if(!user){
      history.push('/login')
    }
    
  }, []);
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <div className="app">
          <Header />
          <div className="app__body">
            <div className="app__sidebar">
              <Sidebar />
            </div>
            <div className="app__mainbody">
              <MainBody />
            </div>
            <div className="app__widget">
              <Widget />
            </div>
          </div>
        </div>
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
