import React from 'react';

class Work extends React.Component {

  constructor(props) {
    super(props);
    this.state={isModalOpen: false};
  }

  handleClickWork() {
    this.setState({isModalOpen: true});
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  render() {

    let modal;

    if(this.state.isModalOpen) {
      modal = (
        <div className="modal">
          <div className="modal-inner">
            <div className="modal-header">
              <h2>{this.props.name}</h2>
            </div>
            <div className="modal-introduction">
              <p>{this.props.introduction}</p>
            </div>
            <button
              className="modal-close-btn"
              onClick={() => {this.handleClickClose()}}
            >
              閉じる
            </button>
          </div>
        </div>
      );
    }

    return (
      <div
        className="work"
        onClick={() => {this.handleClickWork()}}
      >
        <div className="work-image">
          <img src={this.props.image} />
        </div>
        <div className="work-contents">
          <div className="work-name">
            <h4>{this.props.name}</h4>
          </div>
          <div className="work-skill">
            <p>({this.props.skill})</p>
          </div>
        </div>
        {modal}
      </div>
    );
  }
}

export default Work;
