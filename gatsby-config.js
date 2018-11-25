module.exports = {
    siteMetadata: {
      title: 'Lung Vang Landing Page',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'lung-vang',
          short_name: 'lv',
          start_url: '/',
          background_color: '#663399',
          theme_color: '#663399',
          display: 'minimal-ui',
          icon: 'src/assets/images/lungvang-icon.png', // This path is relative to the root of the site.
        },
      },
      'gatsby-plugin-offline',
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
      'gatsby-plugin-sass',
      'gatsby-plugin-styled-components',
    ],
  }