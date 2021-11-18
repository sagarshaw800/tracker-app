import React, {useState} from 'react'

export const SwitchContext = React.createContext()

export const SwitchAppContext = ({children}) => {

    const [isBudget, setIsBudget] = useState(true)

    return (
        <SwitchContext.Provider value={[{isBudget:isBudget, setIsBudget}]}>
            {children}
        </SwitchContext.Provider>
    )
}

export default SwitchAppContext

