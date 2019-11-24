import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import Nav from './Nav.js';
import Blog1 from './Blog1.js';
import Blog2 from './Blog2.js';
import Blog3 from './Blog3.js';


  class App extends Component {
    render() {
        return (
          <Router>
    <div className="App">

   <Header />
   <Route exact path='/' component={Main} />
   <Route exact path='/Blog1' component={Blog1} />
   <Route exact path='/Blog2' component={Blog2} />
   <Route exact path='/Blog3' component={Blog3} />
   <Nav />

   <Footer />

    </div>
    </Router>
  );
    }
}

export default App;
