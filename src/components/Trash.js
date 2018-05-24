import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {
  render() {
    let img = '';
    if (this.props.isVisible) {
        img = <img onClick={ this.props.onClickHandler } src={ TrashIcon } alt="Trash" className="trash"></img>;
    }

    return (
      <div className="bin">
        { img }
      </div>
    );
  }
}

export default Trash;
