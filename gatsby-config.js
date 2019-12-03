module.exports = {
  siteMetadata: {
    title: `Alicia MacCara's portfolio`,
    description: `Designer, programmer, maker.`,
    author: `@alimariemac`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alicia-website`,
        short_name: `alicia`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/blob.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
