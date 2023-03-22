import React from "react";
import {StoreType} from "./redux/store";

type ProviderPropsType = {
    store: StoreType
    children: React.ReactNode
}

export const StoreContext = React.createContext({} as StoreType)

export const Provider: React.FC<ProviderPropsType> = ({store, children}) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}