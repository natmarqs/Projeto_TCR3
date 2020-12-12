import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class CallToAction extends PureComponent {
  render() {
    return (
      <section className="block block-gradient">
        <div className="wrapper">
          <Link to="/cadastrar">
            <button className="btn-default btn-dark">Criar conta</button>
          </Link>
        </div>
      </section>
    );
  }
}

export default CallToAction;
