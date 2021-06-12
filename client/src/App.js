import logo from './logo.svg';
import './App.css';
import Result from './components/Result'
import Catherine from './components/Catherine'
import Home from './pages/Home'
import Saved from './pages/Saved'
import EssayForm from './test'
import { NavItem } from 'reactstrap';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  // const searchresults = ['apple', 'pear', 'banana'];
  // const faces = [':D', ':%^)', '>:C']

  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/saved">Saved Items</Link>
              </li>
            </ul>
          </nav>
          <h1 className='display-1 m-5'>Trip Planner</h1>
          
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/saved">
              <Saved />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

            </div>
    //     searchresults.map((result) => 
    //     <Result 
    //       fruit={result}
    //     />
    //     )
    //   }
    //   {
    //     faces.map((face) =>
    //     <Result
    //       head={face}
    //     />
    //   )
    //   }
    //   {/* {
    //     faces.map(face => 
    //     <Catherine
    //       something={face}
    //     />)
    //   } */}
    // </div>
  );
}

export default App;
