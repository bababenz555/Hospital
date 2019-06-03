import React from 'react';
import { push as Menu } from 'react-burger-menu';
import Avatar from './avatar';

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Avatar />
      <a className="menu-item" style={{ paddingTop: 40 }} href="/">
        แก้ไขประวัติ
      </a>

      <a className="menu-item" href="/user/home">
        ความรู้เรื่องโรค
      </a>
      <a className="menu-item" href="/">
        ปฏิทินบันทึกอาการ
      </a>
      
        <a className="menu-item" href="/">
          ติดต่อพยาบาล
        </a>
        <li className="small" style={{ paddingLeft: '25%' }}>
          <a href="#3">ออกจากระบบ</a>
        </li>
    </Menu>
  );
};
