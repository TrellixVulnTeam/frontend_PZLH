import{useState, useEffect} from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../Style/repositories.scss';
interface Repository {
    name: string;
    description: string;
        html_url: string; 
}

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/leoaxo/frontend'
}
//https://api.github.com/orgs/rocketseat/repos
const repositoryName = 'unform2';
export function RepositoryList() {
   const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect (() => {
     fetch('https://api.github.com/orgs/rocketseat/repos')
     .then(response => response.json())
     .then(data => setRepositories(data))
    },[]
    );
    console.log(repositories);
    return (
      <section className = "repository-list">
          <h1>Lista de repositorios </h1>
          <ul>
              {repositories.map(repository => {
                  return <RepositoryItem key={repository.name} repository = {repository} />
              })}
            
          </ul>
      </section>
  );
}