const SITE_URL = `https://mehesapartman.hu`

module.exports = {
  flags: {
    DEV_SSR: false,
    FAST_DEV: false,
    LMDB_STORE: false,
    PARALLEL_QUERY_RUNNING: false,
    PARALLEL_SOURCING: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
  },
  pathPrefix: "/gatsby-starter-vacation-rental",
  siteMetadata: {
    siteUrl: `${SITE_URL}`,
    SEO: {
      author: {
        name: `Benjamin Hera`,
        website: `https://benjaminhera.me`,
      },
      fallbackDescription: `A Méhes Apartman egy egész évben bérelhető, maximum 12 fő számára fenntartott kétszintes, ötszobás nyaralóház a bánki-tótól negyed órányi sétára.`,
      fallbackTitle: `Méhes Apartman`,
      image: `/media/images/misc/seo.webp`,
      type: `website`,
      url: `${SITE_URL}`,
    },
    contacts: {
      tel: `tel:+0123456789`,
      facebook: ``,
      email: `mailto:youremail@mail.com?subject=[Vacation%20Rental]`,
    },
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
        siteUrl: `${SITE_URL}`,
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
        host: `${SITE_URL}`,
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
