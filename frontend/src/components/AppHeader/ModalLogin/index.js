import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react/cjs/react.development";

import { login } from 'API/login'
import Context from 'context';

import Errors from './Errors'

import './styles.css'

const ModalLogin = ({ setOpenModal }) => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [loginFailed, setLoginFailed] = useState(false)
    const context = useContext(Context);

    const onSubmit = async ({ username, password }) => {
      await login(username, password)
        .then(() => {
          setOpenModal(false)
          context.setData({ username })
        })
        .catch(() => setLoginFailed(true))
    }

    const handleCloseModal = () => {
      setOpenModal(false)
    }

    return (
      <div className="modal-login bg-dark d-flex flex-column">
        <button type="button" className="btn btn-default align-self-end" onClick={handleCloseModal}>
          <i className="fas fa-times text-danger" title="Fechar modal de login"></i>
        </button>

        <form className="container needs-validation" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row d-flex">
              <div className="form-group col-md-12">
                <Errors loginFailed={loginFailed} />
              </div> 

              <div className="form-group col-md-12">
                  <label htmlFor="username">Username</label>
                  <input
                      autoFocus
                      id="username"
                      type="text"
                      className={`form-control ${errors.username && 'is-invalid'}`}
                      {...register("username", { required: true })}
                  />
                  <Errors error={errors.username} />
              </div>            
            
              <div className="form-group col-md-12">
                  <label htmlFor="password">Senha</label>
                  <input
                      autoFocus
                      id="password"
                      type="password"
                      className={`form-control ${errors.password && 'is-invalid'}`}
                      {...register("password", { required: true })}
                  />
                  <Errors error={errors.password} />
              </div>

              <div className="form-group col-md-12 d-flex align-center">
                  <button className="btn btn-block btn-primary">Entrar</button>
              </div> 
          </div>
        </form>
      </div>
    );
}

export default ModalLogin;
