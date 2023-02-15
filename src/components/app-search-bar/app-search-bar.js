import { Component } from 'react';
import './app-search-bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearchLocal = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search employee"
        value={this.state.term}
        onChange={this.onUpdateSearchLocal} />
    );
  }
};

export default SearchBar;