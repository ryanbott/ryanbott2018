module.exports = {
  siteMetadata: {
    title: 'Ryan Bott | Web Developer. Music Maker.',
    author: 'Ryan Bott',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/img`
      }
    },
    {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/img/favicon.png",
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
