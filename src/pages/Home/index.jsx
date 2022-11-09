import { RepositoryList } from '../../components/RepoList/RepositoryList';
import { useState } from 'react';
import '../../styles/Home.scss';
import { RepositoryContext } from '../../context';
import { useContextSelector } from "use-context-selector";

export function Home() {

  const handleSearchRepository = useContextSelector(RepositoryContext, (context) => {
    return context.handleSearchRepository
  });
 
  const [repositoryName, setRepositoryName] = useState('');

  const handleSearchRepositoryName = async () => {
    handleSearchRepository(repositoryName);
  };

  return (
    <main>
      <h1>Explore repositórios no Github.</h1>

      <section>
        <input
          placeholder="Busque por um dos meus repositórios"
          onChange={(e) => setRepositoryName(e.target.value)}
        />
        <button onClick={handleSearchRepositoryName}>Buscar</button>
      </section>

      <RepositoryList />

    </main>
  );
};