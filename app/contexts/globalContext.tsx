// app/context.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextType {
    iconMode: boolean;
    setIconMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [iconMode, setIconMode] = useState(false);

    return (
        <GlobalContext.Provider value={{ iconMode: iconMode, setIconMode }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};
