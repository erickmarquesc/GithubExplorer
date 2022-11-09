import { RepositoryItem } from "./RepositoryItem";
import { RepositoryContext } from "../../context";
import { useContextSelector } from "use-context-selector";

export function RepositoryList(){
  
  const repositories = useContextSelector(RepositoryContext, (context)=>{
    return context.repositories
  });

  return(
    <div id="repos">
      {repositories.map((repository) => {
        return(
          <RepositoryItem  key={repository.id} repository={repository}/>
        )
      })}
    </div>
  );
};