import React from "react"
import styled from "styled-components"

export default function Footer() {
  return (
    <Container>
      <Text>
        Powered by <Link href="https://www.gatsbyjs.com/">Gatsby</Link>, made by{" "}
        <Link href="https://benjaminhera.me">Benjamin Hera</Link>.
      </Text>
    </Container>
  )
}

const Container = styled.footer.attrs({
  className:
    "align-items-center d-flex justify-content-center p-3 text-white-50",
})``

const Text = styled.span.attrs({
  className: "small text-center",
})``

const Link = styled.a.attrs({
  className: "text-decoration-none text-white",
  rel: "noopener",
  target: "_blank",
})`
  &:hover {
    text-decoration: underline !important;
  }
`
