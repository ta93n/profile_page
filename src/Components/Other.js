import React from 'react';

class Other extends React.Component {
  render() {
    return(
      <div className="other">
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
          <img src={this.props.icon} alt={this.props.name} />
        </a>
      </div>
    )
  }
}

export default Other;
