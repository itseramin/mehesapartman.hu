module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: false,
    QUERY_ON_DEMAND: true,
  },
  siteMetadata: {
    author: `Benjamin Hera`,
    description: `A Méhes Apartman egy egész évben bérelhető, maximum 12 fő számára fenntartott kétszintes, ötszobás nyaralóház a bánki-tótól negyed órányi sétára.`,
    image: `/media/images/misc/seo.webp`,
    title: `Méhes Apartman`,
    siteUrl: `https://www.mehesapartman.hu`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        defaultLanguage: `hu`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
        languages: [`de`, `en`, `hu`],
        localeJsonSourceName: `locales`,
        siteUrl: `https://mehesapartman.hu/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#888888`,
        display: `fullscreen`,
        icon: `static/media/images/misc/favicon.png`,
        name: `Méhes Apartman`,
        lang: `hu`,
        localize: [
          {
            lang: `de`,
            name: `Appartement Méhes`,
            start_url: `/de/`,
          },
          {
            lang: `en`,
            name: `Apartment Méhes`,
            start_url: `/en/`,
          },
        ],
        short_name: `AM`,
        start_url: `/`,
        theme_color: `#22262a`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.mehesapartman.hu",
        policy: [{ allow: "/", userAgent: "*" }],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: `${__dirname}/locales`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/media/images/`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
