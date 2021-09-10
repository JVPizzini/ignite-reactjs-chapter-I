import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositoryList.scss";

//https://api.github.com/users/JVPizzini/repos


interface Repostory{
  name: string;
  description : string;
  html_url: string;
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState<Repostory[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }
    , []);


  return (
    <section className="repostory-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
              return (
                <RepositoryItem key={repository.name} repository={repository} />
              )
            })}
      </ul>
    </section>
  );
};