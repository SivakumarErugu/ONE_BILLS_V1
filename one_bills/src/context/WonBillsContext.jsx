import React from 'react'

const WonBillsContext = React.createContext({
    activeTab:'Dashboard',

    setActiveTab: () => {}
})

export default WonBillsContext