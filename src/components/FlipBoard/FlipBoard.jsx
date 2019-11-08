import React from 'react'

import FlipRow from '../FlipRow'
import logo from '../../kubernetes-logo.png'

export default ({ apis, sound }) => {
  const maxLength = apis.reduce((currentMaxLength, row) => {
    if (row.name.length > currentMaxLength) {
      return row.name.length
    }

    return currentMaxLength
  }, 0)

  return (
    <section>
      <h1>
        <div>
          <img src={logo} alt="logo" />
          {/* Is your API sick?! */}
          kubernetes cluster deployed with YAML inside Docker
        </div>
      </h1>

      <ol>
        {apis.map(apiRow => (
          <li key={`${apiRow.name}${apiRow.id}`}>
            <div>
              <FlipRow
                {...apiRow}
                sound={sound}
                maxLength={maxLength}
              ></FlipRow>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
