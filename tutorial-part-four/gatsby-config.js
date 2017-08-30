module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
    description: `Hey hey Syn-Ee`,
  },
  plugins: [
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}