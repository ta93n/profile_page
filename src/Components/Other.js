import React from 'react';

class Other extends React.Component {
  render() {
    return(
      <div className="other">
        <a href={this.props.url}>
          <img src={this.props.icon} width="180" height="180" alt={this.props.name} />
        </a>
      </div>
    )
  }
}

export default Other;
