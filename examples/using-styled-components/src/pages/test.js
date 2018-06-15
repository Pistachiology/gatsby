import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`


class IndexPage extends React.Component {
  handleClick = () => {
    console.log(`Sync-Click!`)
    import(/* webpackChunkName: "async-alert", webpackPreload: true */ `../utils/async-alert`).then(module => {
      const asyncAlert = module.default
      asyncAlert(`Async-Click!`)
    })
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Gatsby Styled Components</title>
          <meta
            name="description"
            content="Gatsby example site using Styled Components"
          />
          <meta name="referrer" content="origin" />
        </Helmet>
        <div
          style={{
            margin: `0 auto`,
            marginTop: `3rem`,
            padding: `1.5rem`,
            maxWidth: 800,
            color: `red`,
          }}
        >
          <Wrapper>
            <Title>Hello World, this is my first styled component!</Title>
            <p>
              <button onClick={this.handleClick}>
                gatsby-plugin-styled-component
              </button>
            </p>
          </Wrapper>
        </div>
      </>
    )
  }
}

export default IndexPage
