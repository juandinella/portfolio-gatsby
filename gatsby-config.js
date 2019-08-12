module.exports = {
  siteMetadata: {
    title: "Juan Di Nella's Portfolio",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/assets/fonts/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Juan Di Nella",
        short_name: "JuanDiNella",
        start_url: "/",
        background_color: "#000",
        theme_color: "#000",
        display: "standalone",
        icon: "static/favicon.ico",
        crossOrigin: "use-credentials",
      },
    },
  ],
}
