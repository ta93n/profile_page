import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

class Work extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickWork() {
    this.setState({isModalOpen: true});
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className="modal">
          <div className="modal-inner">
            <div className="modal-header">
              <h2>{this.props.name}</h2>
            </div>
            <div className="modal-introduction">
              <p>
                {this.props.introduction.split('\n').map(x => (<div>{x}</div>))}
              </p>
            </div>
            <div className="modal-link">
              <div className="modal-link-home">
                <a href={this.props.home}><FontAwesomeIcon icon={faHome} /> Home</a>
              </div>
              <div className="modal-link-github">
                <a href={this.props.github}><FontAwesomeIcon icon={faGithub} /> GitHub</a>
              </div>
            </div>
            <button
              className="modal-close-btn"
              onClick={() => this.handleClickClose()}
            >
              閉じる
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="work">
        <div
          className="work-item"
          onClick={() => {this.handleClickWork()}}
        >
          <div className="work-image">
            <img src={this.props.image} alt="画像" />
          </div>
          <div className="work-contents">
            <h4>{this.props.name}</h4>
            <p>({this.props.skill})</p>
          </div>
        </div>
        {modal}
      </div>
    );
  }
}

export default Work;
