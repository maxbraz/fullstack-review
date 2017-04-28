import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Promise from 'bluebird';  
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Data from '../../data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

    this.search = this.search.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  componentWillMount() {
    this.fetch();
  }

  search (term) {
    term = {username: term};

    $.ajax({
      type: 'POST',
      url: '/repos/import', 
      data: JSON.stringify(term),
      contentType: "application/json",
      success: (data) => {
      },
      error: (err) => {
        console.log('post error: ', err);
      }
    })

    this.fetch();
  }

  fetch() {
    let fetchedRepos;

    $.get('/repos', (repos) => {
      fetchedRepos = JSON.parse(repos);
      this.setState({ repos: fetchedRepos });
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