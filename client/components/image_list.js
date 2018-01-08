//create image list component

import React from 'react';
import ImageDetail from './image_detail';
import axios from 'axios';
import _ from 'lodash';

class ImageList extends React.Component {
  mapImages() {
    var gallery = this.props.gallery;
    //console.log(gallery);
    return _.map(gallery, (image, i) => {
      if (!image.is_album && !_.includes(image.type, 'video')) {
        return (
          <ImageDetail
            isVideo={false}
            title={image.title}
            img={image.link}
            desc={image.description}
            ups={image.ups}
            downs={image.downs}
            key={i}
          />
        );
      } else if (!image.is_album && _.includes(image.type, 'video')) {
        return (
          <ImageDetail
            isVideo={true}
            title={image.title}
            img={image.link}
            desc={image.description}
            ups={image.ups}
            downs={image.downs}
            key={i}
          />
        );
      }
    });
  }
  render() {
    return <ul className="media-list list-group">{this.mapImages()}</ul>;
  }
}
export default ImageList;
