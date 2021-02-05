import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Tour.scss'

class Tour extends React.Component {
  state = {
    showInfo: false
  }

  handleInfo = (e) => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  render() {
    const {city, img, info, name, remove} = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt=""/>
          <span className="close-btn" onClick={remove}>
            <FontAwesomeIcon icon="window-close"/>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.handleInfo}>
              <FontAwesomeIcon icon={this.state.showInfo ? "caret-square-up" : "caret-square-down"}/>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    )
  }
}

export default Tour
