import React, { PureComponent, Fragment } from "react";
import "./signUp.css";
import "../../App.css";

class SignUp extends PureComponent {
  render() {
    return (
      <Fragment>
        <section className="block">
          <div className="wrapper">
            <h2 className="title">Dados para cadastro</h2>

            <form className="section-sign-in">
              <div className="form-group form-icon">
                <label className="form-label">Nome completo</label>
                <input type="text" className="form-input" placeholder="Insira seu nome" />
              </div>
              <div className="form-group">
                <label className="form-label">E-mail</label>
                <input type="text" className="form-input" placeholder="Insira o seu e-mail" />
              </div>
              <div className="form-group">
                <label className="form-label">Celular</label>
                <input type="phone" className="form-input" placeholder="Insira o número com o DDD" />
              </div>
            </form>
            
            <div className="form-group form-icon">
                <label className="form-label">Crie uma senha</label>
                <input type="text" className="form-input form-icon-lock" placeholder="Insira uma nova senha" />
              </div>
              <div className="form-group form-icon">
                <label className="form-label">Repita a senha </label>
                <input type="text" className="form-input form-icon-lock" placeholder="Insira a senha novamente" />
              </div>

          </div>
        </section>
        <section className="block">
          <div className="wrapper">
              <button type="button" className="btn-default btn-light">
                Finalizar cadastro
              </button>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default SignUp;
