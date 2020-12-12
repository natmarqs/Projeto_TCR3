import React, { PureComponent, Fragment } from "react";
import CallToAction from "./CallToAction";

import "./signIn.css";

class SignIn extends PureComponent {
  render() {
    return (
      <Fragment>
        <section className="block">
          <div className="wrapper">
            <h2 className="title">Entrar</h2>
            <h4>Acesse para iniciar um chat</h4>
            <form className="section-sign-in">
              <div className="form-group form-icon">
                <label className="form-label">E-mail</label>
                <input type="text" className="form-input form-icon--user" placeholder="Insira o seu e-mail" />
              </div>
              <div className="form-group form-icon">
                <label className="form-label">Senha</label>
                <input type="text" className="form-input form-icon-lock" placeholder="Insira sua senha" />
              </div>
              <a href="#" className="form-link">
                Esqueci minha senha
              </a>
              <button type="button" className="btn-default btn-light">
                Acessar
              </button>
            </form>
          </div>
        </section> 
        <CallToAction />
      </Fragment>
    );
  }
}

export default SignIn;
