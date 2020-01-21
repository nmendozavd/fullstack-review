import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    // bind methods to App class
    // this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies () {
    axios.get('/repos')
      .then((response) => {
        console.log(response.data)
        var data = response.data;
        this.setState({ repos: data })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  search (term) {
    console.log(`${term} was searched`);
    axios.post('/repos', {
      term: term
    })
    .then((response) => {
      this.getMovies()
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));