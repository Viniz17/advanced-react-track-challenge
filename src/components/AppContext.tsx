import { createContext, useEffect, useState } from "react";

// Função auxiliar para verificar se o usuário está logado no localStorage
const isUserLoggedIn = () => {
  const storage = localStorage.getItem("userData");
  return storage ? JSON.parse(storage).isLoggedIn : false;
};

interface IAppContext {
  user: string;
  isLoggedIn: boolean;
  login: (userData: { user: string }) => void;
  logout: () => void;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>; // Adicione esta linha
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isUserLoggedIn());
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    // Recupere os dados do usuário do localStorage, se existirem
    const storage = localStorage.getItem("userData");
    if (storage) {
      const { user } = JSON.parse(storage);
      setUser(user);
    }
  }, []);

  // Função para fazer login e salvar os dados no localStorage
  const login = (userData: { user: string }) => {
    setIsLoggedIn(true);
    setUser(userData.user);
    localStorage.setItem("userData", JSON.stringify({ user: userData.user, isLoggedIn: true }));
  };

  // Função para fazer logout e remover os dados do localStorage
  const logout = () => {
    setIsLoggedIn(false);
    setUser("");
    localStorage.removeItem("userData");
  };

  return (
    <AppContext.Provider value={{ user, isLoggedIn, login, logout, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
