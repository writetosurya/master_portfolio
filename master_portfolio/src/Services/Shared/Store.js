import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCurrentLanguage } from '../Shared/Translate';
export const DataContext = React.createContext();


export function Provider({ children }) {
    const [userLanguage, setUserLanguage] = useState('en');

    useEffect(() => {
        const userSelectedLanguage = getCurrentLanguage()
        setUserLanguage(userSelectedLanguage)
    }, [])

    getUserLanguage = () => {
        return userLanguage
    }
    
    const store = {
        userLanguage,
        setUserLanguage,
        getUserLanguage
    };
    return <DataContext.Provider value={store}>{children}</DataContext.Provider>
}
Provider.propTypes = {
    children: PropTypes.any
};