module.exports = {
  siteMetadata: {
    description: `Hey hey Syn-Ee`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-glamor`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
  ],
}