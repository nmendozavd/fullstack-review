import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    //bind methods to Search class
    this.onChange = this.onChange.bind(this);
    this.OnClick = this.OnClick.bind(this);
  }

  onChange (e) {
    // console.log('TESTING ON CHANGE');
    this.setState({
      term: e.target.value
    });
  }

  // onSearch(). calls search in index.jsx
  OnClick(e) {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.onChange}/>
      <button onClick={this.OnClick} > Add Repos </button>
    </div>)
  }
}

export default Search;