import React from 'react';
import ReactDOM from 'react-dom';

const RepoListItem = ({repo}) => (
  <li>  
    <a target='_blank' href={repo.url}>
      {repo.repoName}
    </a>
  </li>
)

export default RepoListItem;
