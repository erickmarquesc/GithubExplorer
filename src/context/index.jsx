import { useEffect, useState } from "react";
import { createContext } from "use-context-selector";

export const RepositoryContext = createContext();

export function RepositoryProvider({children}) {
  
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/erickmarquesc/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, []);

  return (
    <RepositoryContext.Provider value={{
      repositories
    }}>
      {children}
    </RepositoryContext.Provider>
  );
};