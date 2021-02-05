import React, { Component } from 'react'
import Tour from '../Tour/Tour'
import './Tourlist.scss'
import {tourData} from '../../tourData'

export default class Tourlist extends Component {

  state = {
    tours: tourData
  }

  removeTour = (id) => () => {
    this.setState({
      tours: this.state.tours.filter(tour => tour.id !== id)
    })
  }

  render() {
    return (
      <section className="tourlist">
        {this.state.tours.map(tour => (
          <Tour
            key={tour.id}
            img={tour.img}
            city={tour.city}
            name={tour.name}
            info={tour.info}
            remove={this.removeTour(tour.id)}
          />
        ))}
      </section>
    )
  }
}
