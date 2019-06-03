import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import Hamburger from './sidebar';
import './burger.css';
const { Header } = Layout;
export class index extends Component {
  _renderNamepatch = () => {
    const Namepatch = window.location.pathname;
    if (Namepatch === '/profile') {
      return <h5 className="namepage">โปรไฟล์</h5>;
    } else if (Namepatch === '/home') {
      return <h5 className="namepage">ความรู้เรื่องโรค</h5>;
    }
  };
  render() {
    return (
      <div>
        <Hamburger />
        <Header>
          <div className="logo">{this._renderNamepatch()}</div>
        </Header>
      </div>
    );
  }
}

export default index;
