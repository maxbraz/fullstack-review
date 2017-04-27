import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Promise from 'bluebird';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Repo from '../../database/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

    this.search = this.search.bind(this);
  }

  search (term) {
    console.log(`${term} was searched`);
    //ajax post here
    $.get(`https://api.github.com/users/${term}/repos`, (data) => {
      
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));