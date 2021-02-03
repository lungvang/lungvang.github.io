module.exports = {
  siteMetadata: {
    title: 'Lung Vang JSC.',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'LungVang',
        short_name: 'LungVang',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/lungvang-icon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-theme-notes`,
      options: {
        basePath: `/notes`,
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        prismPreset: `prism-okaidia`,
        basePath: `/blog`,
      },
    },
  ],
};
