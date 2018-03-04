import React, { Component } from 'react';
import '../App.css';

class BlogPost extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    };
  }

  componentWillMount() {
    fetch('https://randomuser.me/api/?gender=female')
    .then(results => {
      return results.json();
    }).then(data => {
      let pictures = data.results.map((pic) => {
        return (
          <div key={pic.results}>
            <img src={pic.picture.thumbnail} alt='cover'/>
          </div>
        )
    })
    this.setState({pictures: pictures});
    console.log("state", this.state.pictures);
    })
  }

  render() {
    return (
      <div className="BlogPost">
        {/*Generate a random image with Lorem Picsum*/}
        <img src="https://picsum.photos/500/200/?random" alt='cover'/>
        <div class="container">
          <h1>Game Theory</h1>
          <div id="description">
            Game theory is one of the foundational building blocks of our behavior
            as social beings as well as many of our behavioral patterns.
          </div>
          {/*Display a random generated user image*/}
          <div id="userInfo">
            {this.state.pictures}
            Tea Gardner
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
