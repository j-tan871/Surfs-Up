import logo from './logo.svg';
import './App.css';
import Result from './components/Result'
import Catherine from './components/Catherine'
import Home from './pages/Home'
import Saved from './pages/Saved'
import EssayForm from './test'
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

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
          <Navbar
            className="navbar-horizontal navbar-dark bg-primary"
            expand="lg"
          >
            <NavbarBrand className='px-5'><Link to="/"><h3 style={{ color: 'white' }} className='px-5'>Trip Planner</h3></Link></NavbarBrand>
            <Nav className="ml-lg-auto px-5" navbar>
              <NavLink><Link to="/"><h6 style={{ color: 'white' }}>Home</h6></Link></NavLink>
              <NavLink><Link to="/saved"><h6 style={{ color: 'white' }}>Saved Locations</h6></Link></NavLink>
            </Nav>
          </Navbar>
          
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
