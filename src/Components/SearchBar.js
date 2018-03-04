import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  handleChange(term) {
    this.setState({ term });
    this.props.onSearchChange(term);
  }

  render() {
    return (
      <div className="SearchBar">
      <form class="search-container" action="action_page.php">
        <input
            type="text"
            placeholder="Search for Blog Posts"
            value={this.state.term}
            onChange={e => this.handleChange(e.target.value)}
            name="search"
        />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
      </div>
    );
  }
}

export default SearchBar;
