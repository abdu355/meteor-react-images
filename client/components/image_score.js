import React from 'react';

class ImageScore extends React.Component {
  //props.up and props.down for upvotes/downvotes

  render() {
    const { ups, downs } = this.props;
    const upsPercent = `${100 * (ups / (ups + downs))}%`;
    const downsPercent = `${100 * (downs / (ups + downs))}%`;

    return (
      <div>
        UpVotes vs. DownVotes
        <div className="progress">
          <div
            style={{ width: upsPercent }}
            className="progress-bar progress-bar-success progress-bar-striped"
          >
            {' '}
          </div>
          <div
            style={{ width: downsPercent }}
            className="progress-bar progress-bar-danger progress-bar-striped"
          >
            {' '}
          </div>
        </div>
      </div>
    );
  }
}
export default ImageScore;
