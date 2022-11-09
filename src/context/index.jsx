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


  const handleSearchRepository = (repositoryName) => {

    fetch(`https://api.github.com/search/repositories?q="${repositoryName}"+in:name+user:erickmarquesc`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data.items)
      });
  };

  return (
    <RepositoryContext.Provider value={{
      repositories,
      handleSearchRepository
    }}>
      {children}
    </RepositoryContext.Provider>
  );
};