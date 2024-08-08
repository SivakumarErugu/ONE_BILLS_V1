import { useState } from 'react'
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import WonBillsContext from './context/WonBillsContext';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [activeTab,setActiveTab] = useState('Dashboard')

  const onChangeTab = (tab) => {
    console.log(tab)
    setActiveTab(tab)
  }

  return (
    <WonBillsContext.Provider
      value={{
        activeTab,
        setActiveTab: onChangeTab
      }}
    >
      <RouterProvider router={router} />
    </WonBillsContext.Provider>

  )
}

export default App
