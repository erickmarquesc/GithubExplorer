import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";

export function RepositoryList(){
   const [repositories, setRepositories] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/erickmarquesc/repos')
    .then((response)=> response.json())
    .then((data)=> setRepositories(data))
  },[]);

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