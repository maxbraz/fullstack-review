import React from 'react';
import ReactDOM from 'react-dom';
import RepoListItem from './RepoListItem.jsx';

const RepoList = ({repos}) => (
  <div>
    <ol>
      {repos.map((repo, i) => {
        return <RepoListItem key={i} repo={repo} />
      })}
    </ol>
  </div>
)

export default RepoList;