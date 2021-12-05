import React, { useState, useContext } from 'react'
import Context from 'context';
import ModalLogin from './ModalLogin'
import './styles.css'

const AppHeader = () => {
  const [openModal, setOpenModal] = useState(false);
  const context = useContext(Context);

  const handleLogin = () => {
    setOpenModal(true)
  }

  const handleLogout = () => {
    context.setData({})
  }

  return (
    <header className="row">
      <nav className="col-md-12 navbar navbar-expand-lg bg-dark">
        {!context.data.username && 
          <button type="button" className="btn btn-light" onClick={handleLogin}>Login</button>
        }

        {context.data.username && 
          <>
            <button type="button" className="btn btn-light" onClick={handleLogout}>Sair</button>
            <p className="username">{context.data.username}</p>
          </>
        }

        {openModal && 
          <ModalLogin setOpenModal={setOpenModal} />
        }
      </nav>
    </header>
  )
}

export default AppHeader;