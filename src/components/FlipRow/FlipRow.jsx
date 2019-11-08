import React, { createRef, Component } from 'react'

const getStatus = status => {
  if (status === 'healthy') {
    return '😄'
  }
  if (status === 'unhealthy') {
    return '🤡'
  }
  if (status === 'degraded') {
    return '🤕'
  }
}

export default class FlipRow extends Component {
  audioRef = createRef()

  render() {
    const audio = new Audio('./public/sounds/flip.mp3')
    // audio.play()

    const name = []
    const nameAsArray = Array.from(this.props.name)

    for (let index = 0; index < this.props.maxLength; index++) {
      nameAsArray[index] ? name.push(nameAsArray[index]) : name.push('')
    }
    name.unshift('')
    name.push('')
    name.push(getStatus(this.props.status))
    name.push('')

    return (
      <div>
        {name.map((letter, index) => {
          if (index === name.length - 2) {
            return (
              <span
                className="emoji"
                key={`${letter}-${index}`}
                data-status={this.props.status}
              >
                {letter}
              </span>
            )
          }

          return (
            <span key={`${letter}-${index}`} data-status={this.props.status}>
              {letter}
            </span>
          )
        })}
      </div>
    )
  }
}
