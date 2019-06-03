import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import './nav.css';
const { Header } = Layout;
export class index extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header />
      </Layout>
    );
  }
}

export default index;
