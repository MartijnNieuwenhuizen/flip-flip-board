import React, { Component } from 'react'

import FlipBoard from '../../components/FlipBoard'

const url = ''
const intervalInMs = 2000

const getStatus = () => {
  const odds = Math.floor(Math.random() * Math.floor(3))

  if (odds === 0) {
    return 'healthy'
  }
  if (odds === 1) {
    return 'unhealthy'
  }

  return 'degraded'
}

const fetchData = () => {
  return [
    {
      name: 'first API',
      status: getStatus(),
      onStateFrom: 'timestamp',
    },
    {
      name: 'second API',
      status: getStatus(),
      onStateFrom: 'timestamp',
    },
    {
      name: 'third API',
      status: getStatus(),
      onStateFrom: 'timestamp',
    },
  ]
}

export default class Apis extends Component {
  state = {
    rows: [
      {
        id: 1,
        name: '          ',
        status: 'healthy',
      },
      {
        id: 2,
        name: '          ',
        status: 'healthy',
      },
      {
        id: 3,
        name: '          ',
        status: 'healthy',
      },
    ],
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ rows: fetchData() }),
      intervalInMs
    )
  }

  render() {
    return (
      <div>
        <FlipBoard apis={this.state.rows} sound={this.props.sound}></FlipBoard>;
      </div>
    )
  }
}
