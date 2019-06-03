import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './component/Nevigation';
import Comp from './component/index';
import Auth from './authentication/index';
import User from './user/index';
import Index from './component/Nav';

export class App extends Component {
  // _renderNav = () => {
  //   console.log('windowss', window.location.pathname);
  //   if (window.location.pathname === '/') {
  //     return <Comp.NothingNav />;
  //   } else if (window.location.pathname === '/register') {
  //     return <Comp.Nav />;
  //   } else if (
  //     window.location.pathname === '/home' ||
  //     window.location.pathname === '/profile'
  //   ) {
  //     return <Comp.NavigationBurger />;
  //   }
  // };
  _renderNav = () => {
    const path = window.location.pathname;

    const NAVBAR_PAGES = {
      '/register': <Comp.Nav />,
      '/home': <Comp.NavigationBurger />,
      '/profile': <Comp.NavigationBurger />,
    };
    return NAVBAR_PAGES[path] || <Comp.NothingNav />;
  };

  _renderNavbar = () => {
    console.log('ABCCCCCC');
    const path = window.location.pathname;
    const NAVBAR_PAGES = {
      '/register': <Index name={path} />,
      '/home': <Index name={path} />,
      '/profile': <Index name={path} />,
    };
    return NAVBAR_PAGES[path] || <Comp.NothingNav />;
  };

  render() {
    const path = window.location.pathname;
    return (
      <div className="App">
        {this._renderNav()}
        {/* {this._renderNavbar()} */}
        {/* <Index name={path} /> */}
        <Router>
          <body className="form-login">
            <Route exact path="/" component={Auth.Login} />
            <Route exact path="/register" component={Auth.Register} />
            <Route exact path="/home" component={User.Home} />
            <Route exact path="/profile" component={User.Profile} />
          </body>
        </Router>
      </div>
    );
  }
}

export default App;
