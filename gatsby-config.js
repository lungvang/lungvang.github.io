module.exports = {
    siteMetadata: {
      title: 'Lung Vang JSC.',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'LungVang',
          short_name: 'LungVang',
          start_url: '/',
          background_color: '#663399',
          theme_color: '#663399',
          display: 'minimal-ui',
          icon: 'src/assets/img/lungvang-icon.png', // This path is relative to the root of the site.
        },
      },
      'gatsby-plugin-offline',
      'gatsby-plugin-styled-components',
    ],
  }