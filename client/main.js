//runs JS automatically

import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';
import keys from '../config/keys';

//create component
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      gallery: {}
    };
  }
  componentWillMount() {
    this.getGallery();
  }
  async getGallery() {
    //get gallery data from Imgur
    const config = {
      headers: {
        Authorization: keys.imgurClientId
      }
    };
    const imgGallery = await axios.get(
      'https://api.imgur.com/3/gallery/hot/top/day/0',
      config
    );
    this.setState({ gallery: imgGallery.data.data });
  }
  render() {
    console.log(this.state.gallery);
    return (
      <div>
        <h2> Image List </h2>
        <ImageList gallery={this.state.gallery} />
      </div>
    );
  }
}

//wait for DOM to fully load
Meteor.startup(() => {
  //render to screen, specify where to render in DOM
  ReactDOM.render(<App />, document.querySelector('.container')); //render App component to element with class 'container'
});
