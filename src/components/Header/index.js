import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <h2> CHAT ONLINE</h2>
        </div>
      </header>
    );
  }
}



export default Header;
