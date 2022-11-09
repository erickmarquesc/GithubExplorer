import { useContextSelector } from "use-context-selector";
import { RepositoryItem } from "./RepositoryItem";
import { RepositoryContext } from "../../context";

export function RepositoryList(){
  
  const repositories = useContextSelector(RepositoryContext, (context)=>{
    return context.repositories
  });

  return(
    <div>
      {repositories.map((repository) => {
        return(
          <RepositoryItem  key={repository.id} repository={repository}/>
        )
      })}
    </div>
  );
};