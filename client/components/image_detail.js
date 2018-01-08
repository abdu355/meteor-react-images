//create image detail component

import React from 'react';
import ImageScore from './image_score';
import '../../node_modules/video-react/dist/video-react.css'; // import css
import { Player, LoadingSpinner } from 'video-react';

class ImageDetail extends React.Component {
  constructor(props) {
    super();
    //this.state = {};
  }
  renderImage() {
    if (this.props.isVideo) {
      return (
        <div>
          <div className="media-left">
            <Player
              fluid={false}
              height={300}
              width={300}
              loop
              autoPlay
              src={this.props.img}
            >
              <LoadingSpinner />
            </Player>
          </div>
          <div className="media-body">
            <div className="media-heading">
              <h3> {this.props.title} </h3>
            </div>
            <ImageScore ups={this.props.ups} downs={this.props.downs} />
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="media-left">
          <img src={this.props.img} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            <h3> {this.props.title} </h3>
            <p> {this.props.desc} </p>
          </div>
          <ImageScore ups={this.props.ups} downs={this.props.downs} />
        </div>
      </div>
    );
  }
  render() {
    return <li className="media list-group-item">{this.renderImage()}</li>;
  }
}
export default ImageDetail;
