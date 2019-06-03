import React, { Component } from 'react';
import WrappedRegistrationForm from './register';
import PicturesWall from '../../component/uploadpic';
export class index extends Component {
  render() {
    return (
      <div>
        <br />
        <body className="form-login">
          <PicturesWall />
          <WrappedRegistrationForm />
        </body>
      </div>
    );
  }
}

export default index;
