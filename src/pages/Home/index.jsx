import { RepositoryList } from '../../components/RepoList/RepositoryList';
import { useState } from 'react';
import '../../styles/Home.scss';
import { RepositoryContext } from '../../context';
import { useContextSelector } from "use-context-selector";

export function Home() {
  
  const setRepositories = useContextSelector(RepositoryContext, (context)=>{
    return context.setRepositories
  });
  
  const [repositoryName, setRepositoryName] = useState('');

  const handleSearchRepository = async () => {

    fetch(`https://api.github.com/search/repositories?q="${repositoryName}"+in:name+user:erickmarquesc`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data.items)
      });
  };

  return (
    <main>
      <h1>Explore repositórios no Github.</h1>

      <section>
        <input
          placeholder="Busque por um dos meus repositórios"
          onChange={(e) => setRepositoryName(e.target.value)}
        />
        <button onClick={handleSearchRepository}>Buscar</button>
      </section>

      <RepositoryList />


    </main>
  );
};