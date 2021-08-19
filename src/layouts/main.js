import { useTranslation } from "gatsby-plugin-react-i18next"
import React from "react"
import styled from "styled-components"

import Footer from "../components/footer"
import Header from "../components/header"
import Seo from "../components/seo"

export default function Layout({ children }) {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        title={(t("page") === "Home" ? "" : t("page") + " | ") + t("title")}
        description={t("descp")}
      />
      <Body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Body>
    </>
  )
}

const Body = styled.div.attrs({
  className: "d-flex flex-column min-vh-100",
})``

const Main = styled.main.attrs({
  className:
    "align-items-center d-flex flex-column flex-grow-1 justify-content-center text-center",
})``
