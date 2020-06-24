import React, { useEffect, Fragment } from 'react'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layouts/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layouts/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import ShowTechModal from './components/techs/ShowTechModal'
import store from './store'
import { Provider } from 'react-redux'

const App = () => {
  // ye bh jquery ha
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <Logs />
          <ShowTechModal />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <AddBtn />
        </div>
      </Fragment>
    </Provider>
  )
}

export default App
