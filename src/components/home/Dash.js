import React from 'react'
    import Navbar from './Navbar';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Home from '../pages';
    import About from '../pages/about';
    import Events from '../pages/events';
    import AnnualReport from '../pages/annual';
    import Teams from '../pages/team';
    import Blogs from '../pages/blogs';
    import SignUp from '../pages/signup';
    import AdminLogin from '../login/AdminLogin';
      
    function Dash() {
      return (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/'  component={Home} />
            <Route path='/about' component={About} />
            <Route path='/events' component={Events} />
            <Route path='/annual' component={AnnualReport} />
            <Route path='/team' component={Teams} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/Adminlogin' component={AdminLogin}/>
          </Routes>
        </Router>
      );
    }
      

export default Dash
