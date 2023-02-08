import { createContext, useState, useContext } from "react";

export const loadingContext = createContext();

export const useLoading = () => useContext(loadingContext);

export const LoadingProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    return (
        <loadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </loadingContext.Provider>
    );
    };
