import { createContext, useContext, useState } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

// 1. Adicionamos title e setTitle na tipagem
interface NavContextData {
    navVisibility: boolean;
    setNavVisibility: Dispatch<SetStateAction<boolean>>;
    toggleNav: () => void;
    
    title: string; // O texto do título
    setTitle: Dispatch<SetStateAction<string>>; // A função para alterar o título
}

interface NavProviderProps {
    children: ReactNode;
}

const NavContext = createContext<NavContextData | undefined>(undefined);

export function NavProvider({ children }: NavProviderProps) {
    const [navVisibility, setNavVisibility] = useState<boolean>(true);
    
    // 2. Criamos o estado do título (com um valor padrão inicial)
    const [title, setTitle] = useState<string>('Historia');

    function toggleNav() {
        setNavVisibility((prev) => !prev);
    }

    return (
        <NavContext.Provider value={{ 
            navVisibility, 
            setNavVisibility, 
            toggleNav,
            title,      // Exportando o valor
            setTitle    // Exportando a função de troca
        }}>
            {children}
        </NavContext.Provider>
    );
}

export function useNav(): NavContextData {
    const context = useContext(NavContext);
    if (!context) {
        throw new Error('useNav deve ser usado dentro de um NavProvider');
    }
    return context;
}