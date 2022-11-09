import { RepositoryList } from '../../components/RepoList/RepositoryList';
import { useEffect, useState } from 'react';
import '../../styles/Home.scss';
import { RepositoryContext } from '../../context';
import { useContextSelector } from "use-context-selector";

export function Home() {
  const [repository, setRepository] = useState('');
  
  const repositories = useContextSelector(RepositoryContext, (context) => {
    return context.repositories
  });
  const handleSearchRepository = async () => {
    const repo = document.querySelector('input').value;

    fetch(`https://api.github.com/search/repositories?q="${repo}"+in:name+user:erickmarquesc`)
    .then((response) => response.json())
    .then((data) => {
      const repos = document.getElementById("repos");
      repos.innerHTML = '';
      let languages = '';
      data.items.forEach( repository => {
        languages = repository.topics.toString().toUpperCase();
        repos.innerHTML +=
        `<li>
          <strong>${repository.name}</strong>
          <p>${repository.description ?? "Sem descrição disponível."}</p>
            <label>${languages
              ? languages
              : 'Linguagem não identificada.'}
            </label>
            <a target="_blank" href=${repository.html_url}>Acessar repositório</a>
        </li>`;
      });
    });
  };


  

  return (
    <main>
      <h1>Explore repositórios no Github.</h1>

      <section>
        <input
          placeholder="Busque por um dos meus repositórios"
          onChange={handleSearchRepository}
        />
        <button onClick={handleSearchRepository}>Buscar</button>
      </section>

      <RepositoryList />


    </main>
  );
};