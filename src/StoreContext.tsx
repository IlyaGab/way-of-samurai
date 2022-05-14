import React from 'react';

import {DialogPageType, ProfilePageType, StoreTypes} from './redux/store';
import {EmptyObject, Store} from 'redux';


const StoreContext = React.createContext({} as Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogPageType; }>);

export type ProviderType = {
    store:Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogPageType; }>
    children: React.ReactNode
}

export const Provider = (props:ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>
    )
}


export default StoreContext