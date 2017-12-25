import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/sample'>Sample</Link></li>
					<li><Link to='/pagesample'>More Page Sample</Link></li>
        </ul>
      </nav>
    )
  }
}

