import '../../styles/Repositoryitem.scss';

export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>
      <label>{repository.language
        ? repository.language
        : 'linguagem não identificada'}</label>
      <a href={repository.html_url}>Acessar repositório</a>
    </li>
  );
};