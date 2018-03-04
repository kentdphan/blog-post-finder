import React, { Component } from 'react';
import './App.css';

import BlogPost from './Components/BlogPost.js';
import SearchBar from './Components/SearchBar.js';

// Data for short cards
var data = [
  {
    name: 'Janette Ellis',
    title: 'All-time best vaction resorts in the Carribeans',
    description: 'According to recent polls, the best resorts include the northern tip of St. Sugar Beach, A Viceroy Resort. '
  }, {
    name: 'Cody Ross',
    title: 'Only 11% of business tax cuts are going to workers',
    description: 'The new tax law will go to workers in the form of bonuses, raises and employee benefits.'
  }, {
    name: 'Julia King',
    title: '10 ways to discover your true passion in life',
    description: 'Take time to work through the process and know that, no matter what, you will be getting closer to where you want to be.'
  }, {
    name: 'Adam Marshall',
    title: 'Top public sector industries in the US',
    description: 'In total, over 200 companies represent two-thirds of the U.S. GDP.'
  }, {
    name: 'Stacy Hughes',
    title: 'How to win clients with public speaking',
    description: 'As professionals and top executives, we can win clients with public speaking abilities.'
  }
]

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <p className="App-intro">
          Please enter below to search.
        </p>
        <SearchBar onSearchChange={''}/>
        <BlogPost />
      </div>
    );
  }
}

export default App;
