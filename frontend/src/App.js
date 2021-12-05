import React, { useState } from 'react'
import { NotificationContainer } from 'react-notifications';

import Context from "context";

import AppBody from 'components/AppBody'
import AppHeader from 'components/AppHeader'

import 'react-notifications/lib/notifications.css';
import './styles.css';

const App = () => {
  const [data, setData] = useState({})

  return (
    <div className="container-fluid pb-5">
      <React.StrictMode>
        <Context.Provider value={{ data, setData }}>
          <AppHeader />
          <AppBody />
        </Context.Provider>
      </React.StrictMode>
      
      <NotificationContainer />
    </div>
  )
}

export default App;
