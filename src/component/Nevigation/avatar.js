import React, { Component } from 'react';

export class avatar extends Component {
  render() {
    return (
      <div>
        <img
          className="avatar"
          alt="pic"
          style={{ float: 'left' }}
          src={require('./benz.jpg')}
        />
        <p className="p1">ชญานิน โรจรัตน์</p>

        <p className="p2">ผู้ใช้งานทั่วไป</p>
      </div>
    );
  }
}

export default avatar;
