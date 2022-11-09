import '../../styles/Repositoryitem.scss';
import ptBR from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';

export function RepositoryItem({ repository }) {

  const pushed_at = new Date(repository.pushed_at);
  const repositoryDescription = repository.description ? repository.description : 'Esse repositório não possui descrição!';
  const repositoryLanguage = repository.language ? repository.language : 'linguagem não identificada';

  const publishedDateFormatted = format(pushed_at, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  return (
    <a href={repository.html_url}>
      <li>
        <section>
          <strong>{repository.name}</strong>
          <time>Ultimo push {publishedDateFormatted}</time>
        </section>

        <p>{repositoryDescription}</p>
        <label>{repositoryLanguage}</label>

      </li>
    </a>
  );
};