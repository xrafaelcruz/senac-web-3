import React from "react";
import './styles.css'

const Errors = ({ error, loginFailed }) => (
    <div className={`invalid-feedback ${loginFailed && 'show'}`}>
        {error && error.type === 'required' && (
            <>Campo obrigatório</>
        )}

        {loginFailed && <p className="text-center">Username ou senha inválido</p>}
    </div>
);

export default Errors;
