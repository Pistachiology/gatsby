import React from 'react'

class StupidComponent extends React.Component {
  handleClick = () => {
    console.log(`Sync-Click!`)
    import(/* webpackChunkName: "async-console", webpackPreload: true */ `./async-console`).then(module => {
      const asyncAlert = module.default
      asyncAlert(`Async-Click!`)
    })
  }

  render() {
    return <div>
      <button onClick={this.handleClick}>
        stupid me.
      </button>
    </div>
  }
}

export default StupidComponent
