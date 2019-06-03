import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import './nav.css';
const { Header } = Layout;
export class index extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div>
            <h5 className="namepage">สมัครสมาชิก</h5>
          </div>
        </Header>
      </Layout>
    );
  }
}

export default index;
