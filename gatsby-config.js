module.exports = {
  siteMetadata: {
    title: `Mannan Qazi`,
    description: `Mannan's Landing Page`,
    author: `@mannanqazi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/Projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `links`,
        path: `${__dirname}/src/Links`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/globe.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-transformer-remark",
    "gatsby-remark-copy-linked-files",
    {
      resolve: "gatsby-remark-images",
      options: {
        maxWidth: 350,
      },
    },
  ],
}
