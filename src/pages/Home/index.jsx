import { RepositoryList } from '../../components/RepoList/RepositoryList';
import { useState } from 'react';
import '../../styles/Home.scss';
import { RepositoryContext } from '../../context';
import { useContextSelector } from "use-context-selector";

export function Home() {
  const [reporitoryName, setRepositoryName] = useState('');
  
  const repositories = useContextSelector(RepositoryContext, (context) => {
    return context.repositories
  });
  const handleSearchRepository = async () => {
    console.log(repositories.find((reporitoryname)=>{
      return reporitoryname.name = reporitoryName
    }))
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

      <div>
        <RepositoryList />
      </div>

    </main>
  );
};